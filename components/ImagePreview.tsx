import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSubject } from '../lib/useSubject';
import { selectedImage$ } from '../lib/SelectedImage';
import SharedElement from 'react-navigation-shared-element/build/SharedElement';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import SliceBar from './SliceBar';
import InfoBar from './InfoBar';
import CropBox from './CropBox';

export default function ImagePreview({
  route,
}: StackScreenProps<RootStackParamList, 'Splitter'>) {
  const window = useWindowDimensions();
  const selectedImage = useSubject(selectedImage$)!;

  const id = route.params.id;

  const imageHeight =
    (selectedImage.height * window.width) / selectedImage.width;

  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{ flex: 1 }}
          bouncesZoom
          maximumZoomScale={4}
          minimumZoomScale={1}
          centerContent
          alwaysBounceVertical
          alwaysBounceHorizontal
          contentContainerStyle={
            Platform.OS === 'ios'
              ? null
              : {
                  minHeight: window.height,
                  justifyContent: 'center',
                  paddingBottom: '5%',
                }
          }
        >
          <View>
            <SharedElement id={id}>
              <Image
                source={selectedImage}
                style={{ height: imageHeight, width: window.width }}
              />
            </SharedElement>

            <CropBox />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <SliceBar />
      <InfoBar />
    </View>
  );
}
