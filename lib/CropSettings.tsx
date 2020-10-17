import { BehaviorSubject } from 'rxjs';
import { IImageSource } from './SelectedImage';
import { Alert, Platform } from 'react-native';
import { PreviewMode, previewMode$ } from './PreviewModes';

export const numberOfSlices$ = new BehaviorSubject(2);
export const topOffset$ = new BehaviorSubject(0);
export const bottomOffset$ = new BehaviorSubject(0);
export const leftOffset$ = new BehaviorSubject(0);
export const rightOffset$ = new BehaviorSubject(0);

export function resetCropSettings() {
  numberOfSlices$.next(2);
  topOffset$.next(0);
  bottomOffset$.next(0);
  leftOffset$.next(0);
  rightOffset$.next(0);
  previewMode$.next(PreviewMode.Full);
}

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
