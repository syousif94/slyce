import React, { MutableRefObject, ReactNode } from 'react';
import { Animated, View, ViewStyle, ScaledSize } from 'react-native';

interface IImagePreviewDots {
  offset: MutableRefObject<Animated.Value>;
  slices: number;
  window: ScaledSize;
}

export default function ImagePreviewDots({
  offset,
  slices,
  window,
}: IImagePreviewDots) {
  const dots: ReactNode[] = [];

  for (let i = 0; i < slices; i++) {
    dots.push(
      <DotView
        offset={offset}
        slices={slices}
        window={window}
        index={i}
        key={`${i}`}
      />
    );
  }

  return (
    <View
      pointerEvents="none"
      style={{
        alignSelf: 'center',
        flexDirection: 'row',
        height: 2,
        marginBottom: -10,
        marginTop: 8,
      }}
    >
      {dots}
    </View>
  );
}

interface IImagePreviewDot extends IImagePreviewDots {
  index: number;
}

function DotView({ offset, slices, index, window }: IImagePreviewDot) {
  const translateX = offset.current.interpolate({
    inputRange: [
      (index - 1) * window.width,
      index * window.width,
      (index + 1) * window.width,
    ],
    outputRange: [-20, 0, 20],
    extrapolate: 'clamp',
  });

  return (
    <View
      style={{
        width: 20,
        backgroundColor: '#888',
        marginHorizontal: 4,
        overflow: 'hidden',
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          transform: [{ translateX }],
        }}
      />
    </View>
  );
}
