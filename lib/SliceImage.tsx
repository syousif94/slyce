import { BehaviorSubject } from 'rxjs';
import { selectedImage$, IImageSource } from './SelectedImage';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImageCanvas from './ImageManipulator';
import { Alert, Platform } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useState } from 'react';

import {
  numberOfSlices$,
  topOffset$,
  bottomOffset$,
  leftOffset$,
  rightOffset$,
} from './CropSettings';

class ImageSlices {
  image: IImageSource;
  slices: number;
  right: number;
  top: number;
  left: number;
  bottom: number;
  images = new BehaviorSubject<IImageSource[]>([]);
  assets: MediaLibrary.Asset[] = [];

  constructor(
    image: IImageSource,
    slices: number,
    top: number,
    bottom: number,
    left: number,
    right: number
  ) {
    this.image = image;
    this.slices = slices;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
}

export const slyce$ = new BehaviorSubject<ImageSlices | null>(null);

export function clearImage() {
  slyce$.next(null);
}

export default async function sliceImage() {
  const selectedImage = selectedImage$.value;
  const slices = numberOfSlices$.value;
  const top = topOffset$.value;
  const bottom = bottomOffset$.value;
  const left = leftOffset$.value;
  const right = rightOffset$.value;

  if (!selectedImage) {
    return;
  }

  const slyce = new ImageSlices(
    selectedImage,
    slices,
    top,
    bottom,
    left,
    right
  );

  slyce$.next(slyce);

  const sliceCount = numberOfSlices$.value;

  const sliceWidth = Math.floor(selectedImage.width / sliceCount);

  const isWeb = Platform.OS === 'web';

  const images: ImageManipulator.ImageResult[] = [];

  try {
    for (let i = 0; i < sliceCount; i++) {
      const originX = sliceWidth * i;

      const manipulateAsync = isWeb
        ? ImageCanvas.default.manipulateAsync
        : ImageManipulator.manipulateAsync;

      const crop = await manipulateAsync(
        selectedImage.uri,
        [
          {
            crop: {
              originX,
              originY: 0,
              width: sliceWidth,
              height: selectedImage.height,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: isWeb }
      );

      images.push(crop);
    }
    if (!isWeb) {
      for (let i = 0; i < images.length; i++) {
        const asset = await MediaLibrary.createAssetAsync(images[i].uri);
        slyce.assets.push(asset);
      }
    }
    slyce.images.next(images);
  } catch (err) {
    Alert.alert(err.message);
  }
}

export function downloadImage(dataurl: string, filename: string) {
  var a = document.createElement('a');
  a.href = dataurl;
  a.setAttribute('download', filename);
  a.click();
  a.parentElement?.removeChild(a);
}

export function useSlyceImages(slyce: ImageSlices | null) {
  const [images, setImages] = useState<IImageSource[]>([]);
  useEffect(() => {
    if (slyce) {
      const sub = slyce.images.subscribe((val) => {
        setImages(val);
      });

      return () => {
        sub.unsubscribe();
      };
    }
  }, [slyce]);

  return images;
}

export function deleteImageSlices() {
  const slyce = slyce$.value;

  if (!slyce) {
    return;
  }

  const assets = slyce.assets;

  MediaLibrary.deleteAssetsAsync(assets).catch((err) => {});
}
