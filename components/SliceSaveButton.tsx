import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSubject } from '../lib/useSubject';
import {
  numberOfSlices$,
  getRatio,
  topOffset$,
  bottomOffset$,
  rightOffset$,
  leftOffset$,
} from '../lib/CropSettings';
import Control from './Control';
import sliceImage from '../lib/SliceImage';
import { selectedImage$ } from '../lib/SelectedImage';
import ToggleControlStyle from './SliceToggleControlStyle';

export default function SaveButton() {
  const selectedImage = useSubject(selectedImage$);

  const topOffset = useSubject(topOffset$);
  const bottomOffset = useSubject(bottomOffset$);
  const leftOffset = useSubject(leftOffset$);
  const rightOffset = useSubject(rightOffset$);
  const slices = useSubject(numberOfSlices$);
  const ratio = getRatio(
    selectedImage!,
    slices,
    topOffset,
    bottomOffset,
    leftOffset,
    rightOffset
  );

  const invalidRatio = ratio > 1.91 || ratio < 0.8;

  return (
    <Control
      touchableStyle={{
        ...ToggleControlStyle,
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}
      onPress={() => {
        sliceImage();
      }}
    >
      <MaterialIcons
        name="photo-camera"
        size={20}
        color="#fff"
        style={{ marginTop: 1 }}
      />
      <Text
        style={{
          color: invalidRatio ? 'red' : 'yellow',
          fontSize: 12,
          fontWeight: '700',
          marginLeft: 10,
        }}
      >
        SAVE PHOTOS
      </Text>
    </Control>
  );
}
