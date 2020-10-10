import { BehaviorSubject } from 'rxjs';
import { selectedImage$, IImageSource } from './SelectedImage';
import * as ImageManipulator from 'expo-image-manipulator';
import { Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const numberOfSlices$ = new BehaviorSubject(2);
export const topOffset$ = new BehaviorSubject(0);
export const bottomOffset$ = new BehaviorSubject(0);
export const leftOffset$ = new BehaviorSubject(0);
export const rightOffset$ = new BehaviorSubject(0);

export function getRatio(
  selectedImage: IImageSource,
  numberOfSlices: number,
  topOffset: number,
  bottomOffset: number,
  leftOffset: number,
  rightOffset: number
) {
  const sliceWidth =
    (selectedImage.width -
      ((leftOffset + rightOffset) / 100) * selectedImage.width) /
    numberOfSlices;

  return (
    sliceWidth /
    (selectedImage.height -
      ((topOffset + bottomOffset) / 100) * selectedImage.height)
  );
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
