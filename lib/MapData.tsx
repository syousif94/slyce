import { BehaviorSubject } from 'rxjs';
import { album$ } from './PanoAlbum';
import * as MediaLibrary from 'expo-media-library';
import AsyncStorage from '@react-native-community/async-storage';

export enum MapSource {
  World,
  Personal,
}

export const mapSource$ = new BehaviorSubject<MapSource>(MapSource.World);

export const mappedPanos$ = new BehaviorSubject<MapAsset[]>([]);

export const totalPanos$ = new BehaviorSubject<number | null>(null);

export const mappingError$ = new BehaviorSubject<number | null>(null);

export interface MapAsset extends MediaLibrary.Asset {
  location: MediaLibrary.Location | undefined;
}

let userAssets = new Map<string, MapAsset>();

export async function initializeUserMap() {
  const mapCacheJson = await AsyncStorage.getItem('map-cache');

  let mapCache: MapAsset[];

  if (mapCacheJson) {
    mapCache = JSON.parse(mapCacheJson);
    mappedPanos$.next(mapCache);

    mapCache.forEach((asset) => {
      userAssets.set(asset.id, asset);
    });
  }

  subscribeToAlbum();
}

export function subscribeToAlbum() {
  album$.subscribe(async (album) => {
    try {
      const nextAssets: MapAsset[] = [];

      const slowAssets: MediaLibrary.Asset[] = [];

      for (let asset of album) {
        const existingAsset = userAssets.get(asset.id);

        if (existingAsset) {
          const mapAsset = {
            ...existingAsset,
            ...asset,
          };
          userAssets.set(mapAsset.id, mapAsset);
          nextAssets.push(mapAsset);
          mappedPanos$.next(nextAssets);
        } else {
          slowAssets.push(asset);
        }
      }

      for (let asset of slowAssets) {
        const info = await MediaLibrary.getAssetInfoAsync(asset);

        const location = info.location;

        if (location) {
          const mapAsset = {
            ...asset,
            location,
          };
          userAssets.set(mapAsset.id, mapAsset);
          nextAssets.push(mapAsset);
          mappedPanos$.next(nextAssets);
        }
      }

      await AsyncStorage.setItem('map-cache', JSON.stringify(nextAssets));
    } catch (error) {
      console.log(error);
    }
  });
}
