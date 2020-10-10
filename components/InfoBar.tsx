import React from 'react';
import { View, Text } from 'react-native';
import {
  numberOfSlices$,
  getRatio,
  topOffset$,
  bottomOffset$,
  rightOffset$,
  leftOffset$,
} from '../lib/CropSettings';
import { useSubject } from '../lib/useSubject';
import { selectedImage$ } from '../lib/SelectedImage';

export default function InfoBar() {
  const selectedImage = useSubject(selectedImage$);

  const topOffset = useSubject(topOffset$);
  const bottomOffset = useSubject(bottomOffset$);
  const leftOffset = useSubject(leftOffset$);
  const rightOffset = useSubject(rightOffset$);
  const slices = useSubject(numberOfSlices$);
  const ratio =
    getRatio(
      selectedImage!,
      slices,
      topOffset,
      bottomOffset,
      leftOffset,
      rightOffset
    ) * 9;
  const lessThan16By9 = ratio > 16;

  return (
    <View
      style={{
        position: 'absolute',
        top: 60,
        alignSelf: 'center',
        alignItems: 'center',
      }}
      pointerEvents="none"
    >
      {/* height and width box */}
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        {/* width box */}
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 8,
            flexDirection: 'row',
            marginRight: 5,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: '#fff',
            }}
          >
            W
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: 'yellow',
              marginLeft: 10,
            }}
          >
            {Math.round(
              (selectedImage!.width -
                ((leftOffset + rightOffset) / 100) * selectedImage!.width) /
                slices
            )}
            px
          </Text>
        </View>
        {/* height box */}
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 8,
            flexDirection: 'row',
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: '#fff',
            }}
          >
            H
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: 'yellow',
              marginLeft: 10,
            }}
          >
            {selectedImage!.height -
              ((topOffset + bottomOffset) / 100) * selectedImage!.height}
            px
          </Text>
        </View>
      </View>
      {/* ratio box */}
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: '700',
            color: '#fff',
          }}
        >
          RATIO
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '700',
            color: lessThan16By9 ? 'red' : 'yellow',
            marginLeft: 10,
          }}
        >
          {ratio.toFixed(2)} : 9
        </Text>
      </View>
    </View>
  );
}
