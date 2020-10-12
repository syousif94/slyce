import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { numberOfSlices$ } from '../lib/CropSettings';
import { useSubject } from '../lib/useSubject';
import {
  topOffset$,
  bottomOffset$,
  leftOffset$,
  rightOffset$,
} from '../lib/CropSettings';
import { selectedImage$ } from '../lib/SelectedImage';

export default function CropBox() {
  const window = useWindowDimensions();
  const selectedImage = useSubject(selectedImage$);

  if (!selectedImage) {
    return null;
  }

  const numberOfSlices = useSubject(numberOfSlices$);
  const topOffset = useSubject(topOffset$);
  const bottomOffset = useSubject(bottomOffset$);
  const leftOffset = useSubject(leftOffset$);
  const rightOffset = useSubject(rightOffset$);

  const barCount = numberOfSlices - 1;
  const bars: JSX.Element[] = [];
  for (let i = 0; i < barCount; i++) {
    bars.push(
      <View
        key={`bar${i}`}
        style={{ backgroundColor: 'rgba(235, 176, 40, 0.8)', width: 1 }}
      />
    );
  }

  const widthRatio = window.width / selectedImage.width;
  const correctedLeft = Math.round((leftOffset / 100) * window.width);
  const correctedRight = Math.round((rightOffset / 100) * window.width);

  const imageHeight = widthRatio * selectedImage.height;

  const heightRatio = imageHeight / selectedImage.height;
  const correctedTop = Math.round((topOffset / 100) * imageHeight);
  const correctedBottom = Math.round((bottomOffset / 100) * imageHeight);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: correctedTop,
        paddingLeft: correctedLeft,
        paddingRight: correctedRight,
        paddingBottom: correctedBottom,
      }}
    >
      {bars}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderTopWidth: correctedTop,
          borderLeftWidth: correctedLeft,
          borderRightWidth: correctedRight,
          borderBottomWidth: correctedBottom,
          borderColor: 'rgba(0,0,0,0.9)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: correctedTop,
          left: correctedLeft,
          right: correctedRight,
          bottom: correctedBottom,
          borderWidth: 1,
          borderTopColor: getBarColor(topOffset),
          borderLeftColor: getBarColor(leftOffset),
          borderRightColor: getBarColor(rightOffset),
          borderBottomColor: getBarColor(bottomOffset),
        }}
      />
    </View>
  );
}

function getBarColor(offset: number): string {
  return offset > 0 ? VISIBLE_BAR_COLOR : HIDDEN_BAR_COLOR;
}

const VISIBLE_BAR_COLOR = 'rgba(255, 27, 150, 0.8)';
const HIDDEN_BAR_COLOR = 'rgba(255, 27, 150, 0)';
