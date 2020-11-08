import React, { useRef } from 'react';
import { View, Image, useWindowDimensions, Animated } from 'react-native';
import { selectedImage$ } from '../lib/SelectedImage';
import { useSubject } from '../lib/useSubject';
import { IImageEditorSharedElement } from './ImageEditor';
import {
  topOffset$,
  leftOffset$,
  rightOffset$,
  bottomOffset$,
  numberOfSlices$,
} from '../lib/CropSettings';
import SharedElement from 'react-navigation-shared-element/build/SharedElement';
import ImagePreviewDots from './ImagePreviewDots';

export default function ImagePreview({ id }: IImageEditorSharedElement) {
  const scrollOffsetRef = useRef(new Animated.Value(0));

  const window = useWindowDimensions();

  const selectedImage = useSubject(selectedImage$);
  const numberOfSlices = useSubject(numberOfSlices$);
  const topOffset = useSubject(topOffset$);
  const bottomOffset = useSubject(bottomOffset$);
  const leftOffset = useSubject(leftOffset$);
  const rightOffset = useSubject(rightOffset$);

  if (!selectedImage) {
    return null;
  }

  const leftPercent = leftOffset / 100;
  const rightPercent = rightOffset / 100;
  const percentWidth = 1 - (leftPercent + rightPercent);

  const topPercent = topOffset / 100;
  const bottomPercent = bottomOffset / 100;
  const percentHeight = 1 - (topPercent + bottomPercent);

  const croppedImageWidth = selectedImage.width * percentWidth;

  const croppedImageHeight = selectedImage.height * percentHeight;

  const segmentWidth = croppedImageWidth / numberOfSlices;

  const scaledSegmentRatio = window.width / segmentWidth;

  const scaledHeight = croppedImageHeight * scaledSegmentRatio;

  const scaledWidth = segmentWidth * scaledSegmentRatio * numberOfSlices;

  const scaledImageWidth = scaledWidth / percentWidth;

  const scaledImageHeight = scaledHeight / percentHeight;

  const top = scaledImageHeight * -topPercent;
  const left = scaledImageWidth * -leftPercent;

  // console.log({
  //   top,
  //   left,
  //   leftPercent,
  //   rightPercent,
  //   percentWidth,
  //   topPercent,
  //   bottomPercent,
  //   percentHeight,
  //   croppedImageWidth,
  //   croppedImageHeight,
  //   segmentWidth,
  //   scaledSegmentRatio,
  //   scaledHeight,
  //   scaledWidth,
  //   scaledImageWidth,
  //   scaledImageHeight,
  // });

  return (
    <View
      style={{ flex: 1, backgroundColor: '#13052b', justifyContent: 'center' }}
    >
      <View
        style={{
          height: scaledHeight,
          width: window.width,
        }}
      >
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollOffsetRef.current } },
              },
            ],
            { useNativeDriver: true }
          )}
          horizontal
          pagingEnabled
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: '#333',
              height: scaledHeight,
              width: scaledWidth,
              overflow: 'hidden',
            }}
          >
            <SharedElement id={id}>
              <Image
                source={selectedImage}
                style={{
                  position: 'absolute',
                  height: scaledImageHeight,
                  width: scaledImageWidth,
                  top,
                  left,
                }}
              />
            </SharedElement>
          </View>
        </Animated.ScrollView>
      </View>
      <ImagePreviewDots
        offset={scrollOffsetRef}
        window={window}
        slices={numberOfSlices}
      />
    </View>
  );
}
