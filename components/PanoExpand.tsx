import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSubject } from '../lib/useSubject';
import { previewMode$, PreviewMode } from '../lib/PreviewModes';

export default function PanoExpand() {
  const previewMode = useSubject(previewMode$);

  const inSlices = previewMode === PreviewMode.Slices;

  const onPress = () => {
    switch (previewMode) {
      case PreviewMode.Full:
        previewMode$.next(PreviewMode.Slices);
        break;
      case PreviewMode.Slices:
        previewMode$.next(PreviewMode.Full);
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: `rgba(255,255,255,${inSlices ? '0.25' : '0.1'})`,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 9,
        paddingRight: 11,
      }}
    >
      <MaterialIcons name="zoom-out-map" size={28} color="#fff" />
    </TouchableOpacity>
  );
}
