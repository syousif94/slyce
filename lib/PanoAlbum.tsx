import { BehaviorSubject } from 'rxjs';
import * as MediaLibrary from 'expo-media-library';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { getAddress } from './Addresses';

dayjs.extend(relativeTime);

export const album$ = new BehaviorSubject<MediaLibrary.Asset[]>([]);

interface AssetDate {
  date: string;
  from: string;
}

interface AssetInfo {
  updatedAt: AssetDate;
  createdAt: AssetDate;
  coordinates: Promise<MediaLibrary.Location | undefined>;
  address: Promise<string>;
}

const assetCache = new Map<string, AssetInfo>();

const dateFormat = 'h:mma ddd M/DD/YY ';

function formatTime(epoch: number): AssetDate {
  const time = dayjs(epoch);
  const date = time.format(dateFormat);
  const from = time.fromNow();
  return {
    date,
    from,
  };
}

export function getAssetInfoFromCache(id: string) {
  return assetCache.get(id);
}

export function getAssetInfo(asset: MediaLibrary.Asset): AssetInfo {
  let info = assetCache.get(asset.id);

  if (info) {
    return info;
  }

  const updatedAt = formatTime(asset.modificationTime);
  const createdAt = formatTime(asset.creationTime);

  const moreInfo = MediaLibrary.getAssetInfoAsync(asset);

  const coordinates = moreInfo.then((info) => {
    return info.location;
  });

  info = {
    updatedAt,
    createdAt,
    coordinates,
    address: getAddress(coordinates),
  };

  assetCache.set(asset.id, info);

  return info;
}

export function useAssetInfoAddress(info: AssetInfo) {
  const [address, setAddress] = useState('');

  useEffect(() => {
    let canceled = false;

    const getAddress = async () => {
      const address = await info.address;
      if (canceled) {
        return;
      }
      setAddress(address);
    };

    getAddress();

    return () => {
      canceled = true;
    };
  }, [info]);

  return address;
}

interface ILoadPanos {
  total?: number;
  after?: string | MediaLibrary.Asset;
  album?: MediaLibrary.Album;
}

async function loadPhotos({
  total,
  after,
  album,
}: ILoadPanos): Promise<MediaLibrary.PagedInfo<MediaLibrary.Asset>> {
  return MediaLibrary.getAssetsAsync({
    album,
    sortBy:
      Platform.OS === 'ios' ? MediaLibrary.SortBy.modificationTime : undefined,
    first: total,
    after,
  });
}

function filterPanos(assets: MediaLibrary.Asset[]): MediaLibrary.Asset[] {
  return assets.filter((asset) => asset.mediaSubtypes?.includes('panorama'));
}

async function getLibraryPermissions() {
  if (Platform.OS !== 'web') {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Permission Required');
    }
  }
}

async function loadAllAssets() {
  let panos: MediaLibrary.Asset[] = [];

  let album;

  if (Platform.OS === 'android') {
    const albums = await MediaLibrary.getAlbumsAsync();

    const album = albums.find((album) => album.title === 'Camera');

    if (!album) {
      return;
    }
  }

  let currentRequest = await loadPhotos({ total: 20, album });

  panos = panos.concat(filterPanos(currentRequest.assets));

  while (currentRequest.hasNextPage) {
    currentRequest = await loadPhotos({
      total: 20,
      after: currentRequest.endCursor,
      album,
    });

    panos = panos.concat(filterPanos(currentRequest.assets));
  }

  album$.next(panos);
}

export async function initializeAlbum() {
  try {
    await getLibraryPermissions();

    await loadAllAssets();

    MediaLibrary.addListener((event) => {
      loadAllAssets().catch((err) => {
        console.log(err.stack);
      });
    });
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
