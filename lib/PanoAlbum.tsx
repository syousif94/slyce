import { BehaviorSubject } from 'rxjs';
import * as MediaLibrary from 'expo-media-library';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { getLibraryPermissions } from './SelectedImage';
import { Alert } from 'react-native';

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

const dateFormat = 'ddd MMM D, YYYY [at] h:mma';

function formatTime(epoch: number): AssetDate {
  const time = dayjs(epoch);
  const date = time.format(dateFormat);
  const from = time.fromNow();
  return {
    date,
    from,
  };
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
    const getAddress = async () => {
      const address = await info.address;
      setAddress(address);
    };

    getAddress();
  }, [info]);

  return address;
}

interface ILoadPanos {
  total?: number;
  after?: string | MediaLibrary.Asset | undefined;
}

async function loadPhotos({
  total,
  after,
}: ILoadPanos): Promise<MediaLibrary.PagedInfo<MediaLibrary.Asset>> {
  return MediaLibrary.getAssetsAsync({
    sortBy: MediaLibrary.SortBy.modificationTime,
    first: total,
    after,
  });
}

function filterPanos(assets: MediaLibrary.Asset[]): MediaLibrary.Asset[] {
  return assets.filter((asset) => asset.mediaSubtypes?.includes('panorama'));
}

export async function initializeAlbum() {
  try {
    await getLibraryPermissions();

    let panos: MediaLibrary.Asset[] = [];

    let currentRequest = await loadPhotos({ total: 20 });

    panos = panos.concat(filterPanos(currentRequest.assets));

    while (currentRequest.hasNextPage) {
      currentRequest = await loadPhotos({
        total: 20,
        after: currentRequest.endCursor,
      });

      panos = panos.concat(filterPanos(currentRequest.assets));
    }

    album$.next(panos);
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}

async function getAddress(
  coordinates: Promise<MediaLibrary.Location | undefined>
): Promise<string> {
  const coords = await coordinates;

  if (!coords) {
    return '';
  }

  let text = '';

  try {
    const placemarks = await Location.reverseGeocodeAsync(coords);

    placemarks.find((placemark) => {
      if (placemark.city && placemark.country) {
        text = `${placemark.city}, ${placemark.country}`;
        return true;
      } else if (placemark.name) {
        text = placemark.name;
        return true;
      }
    });
  } catch (error) {}

  return text;
}
