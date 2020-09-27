import React from 'react';
import {
  Image,
  ScrollView,
  useWindowDimensions,
  View,
  StyleSheet,
} from 'react-native';
import { useSubject } from '../lib/useSubject';
import { selectedImage$ } from '../lib/SelectedImage';
import { numberOfSlices$ } from '../lib/CropSettings';
import SharedElement from 'react-navigation-shared-element/build/SharedElement';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import ReselectPano from './ReselectPano';
import SliceBar from './SliceBar';

export default function ImagePreview({
  route,
}: StackScreenProps<RootStackParamList, 'Splitter'>) {
  const window = useWindowDimensions();
  const selectedImage = useSubject(selectedImage$)!;
  const numberOfSlices = useSubject(numberOfSlices$);
  const id = route.params.id;

  const imageHeight =
    (selectedImage.height * window.width) / selectedImage.width;

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
  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        bouncesZoom
        maximumZoomScale={4}
        minimumZoomScale={1}
        centerContent
        alwaysBounceVertical
        alwaysBounceHorizontal
      >
        <View>
          <SharedElement id={id}>
            <Image
              source={selectedImage}
              style={{ height: imageHeight, width: window.width }}
            />
          </SharedElement>

          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            {bars}
          </View>
        </View>
      </ScrollView>
      <SliceBar />
      <ReselectPano />
    </View>
  );
}

// ImagePreview.sharedElements = (
//   navigation: any,
//   otherNavigation: any,
//   showing: any
// ) => {
//   const id = navigation.getParam('id'); // "pizza"
//   return [id];
// };
