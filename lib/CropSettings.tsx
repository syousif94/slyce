import { BehaviorSubject } from 'rxjs';
import { selectedImage$ } from './SelectedImage';
import * as ImageManipulator from 'expo-image-manipulator';
import { Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const numberOfSlices$ = new BehaviorSubject(2);

export function getRatio() {
  const selectedImage = selectedImage$.value;

  if (!selectedImage) {
    return;
  }

  const sliceCount = numberOfSlices$.value;

  const sliceWidth = selectedImage.width / sliceCount;

  return sliceWidth / selectedImage.height;
}

export function incrementSlices() {
  const currentValue = numberOfSlices$.value;

  numberOfSlices$.next(currentValue + 1);
}

export function decrementSlices() {
  const currentValue = numberOfSlices$.value;
  if (currentValue <= 2) {
    return;
  }

  numberOfSlices$.next(currentValue - 1);
}

export async function sliceImage() {
  const selectedImage = selectedImage$.value;

  if (!selectedImage) {
    return;
  }

  const sliceCount = numberOfSlices$.value;

  const sliceWidth = Math.floor(selectedImage.width / sliceCount);

  const slicePromises: Promise<ImageManipulator.ImageResult>[] = [];

  for (let i = 0; i < sliceCount; i++) {
    slicePromises.push(
      ImageManipulator.manipulateAsync(
        selectedImage.uri,
        [
          {
            crop: {
              originX: sliceWidth * i,
              originY: 0,
              width: sliceWidth,
              height: selectedImage.height,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      )
    );
  }

  try {
    const crops = await Promise.all(slicePromises);

    const savePromises = crops.map((crop) =>
      MediaLibrary.saveToLibraryAsync(crop.uri)
    );

    await Promise.all(savePromises);

    Alert.alert('Success!');
  } catch (err) {
    Alert.alert(err.message);
  }
}
