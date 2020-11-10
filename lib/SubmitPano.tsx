import firebase from './Firebase';
import * as MediaLibrary from 'expo-media-library';
import { getAssetInfoFromCache } from './PanoAlbum';
import { userAssets } from './MapData';
import { BehaviorSubject } from 'rxjs';
import { IImageSource } from './SelectedImage';
import * as ImageManipulator from 'expo-image-manipulator';
import * as geofirex from 'geofirex';
const geo = geofirex.init(firebase);

export const caption$ = new BehaviorSubject('');
export const instagram$ = new BehaviorSubject('');

export async function getAssetLocation(id: string) {
  let location: MediaLibrary.Location | undefined;

  const info = getAssetInfoFromCache(id);

  if (!info) {
    const mapAsset = userAssets.get(id);
    location = mapAsset?.location;
  } else {
    location = await info.coordinates;
  }

  return location;
}

export const submitting$ = new BehaviorSubject(false);

export const submissionError$ = new BehaviorSubject<string | null>(null);

export const submissionCompleted$ = new BehaviorSubject(false);

export async function submitPano(asset: IImageSource) {
  console.log('submitting pano');
  submitting$.next(true);

  try {
    if (!asset.id) {
      throw new Error('Image must exist in camera roll.');
    }
    const location = await getAssetLocation(asset.id);
    if (!location) {
      throw new Error('Image location required.');
    }
    const db = firebase.firestore();
    const doc = db.collection('submissions').doc();
    console.log('scaling pano');
    const scaledPano = await ImageManipulator.manipulateAsync(
      asset.uri,
      [{ resize: { height: 1024 } }],
      { compress: 0.8 }
    );
    console.log('uploading pano');
    await uploadImage(scaledPano.uri, doc.id);
    await doc.set({
      caption: caption$.value,
      height: scaledPano.height,
      width: scaledPano.width,
      ig: instagram$.value,
      position: geo.point(location.latitude, location.longitude),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    submissionCompleted$.next(true);
    console.log('submitted pano');
  } catch (e) {
    console.log(e);
    submissionError$.next(e.message);
  }

  submitting$.next(false);
}

async function uploadImage(uri: string, key: string) {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase.storage().ref().child(`panoramas/${key}`);
  return ref.put(blob);
}
