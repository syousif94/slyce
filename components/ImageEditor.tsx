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
import { previewMode$, PreviewMode } from '../lib/PreviewModes';
import ImagePreview from './ImagePreview';
import SliceProgress from './SliceProgress';
import { StatusBar } from 'expo-status-bar';

export default function ImageEditor({
  route,
}: StackScreenProps<RootStackParamList, 'Editor - Slyce'>) {
  const id = route.params.id;

  return (
    <View style={{ backgroundColor: '#13052b', flex: 1 }}>
      <KeyboardAvoidingView
        enabled={Platform.OS === 'ios'}
        behavior="padding"
        style={{
          flex: 1,
        }}
      >
        <ImageView id={id} />
      </KeyboardAvoidingView>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 80,
        }}
      />
      <SliceBar />
      <InfoBar />
      <SliceProgress />
    </View>
  );
}

export interface IImageEditorSharedElement {
  id: string;
}

function ImageView({ id }: IImageEditorSharedElement) {
  const previewMode = useSubject(previewMode$);

  let Component;

  switch (previewMode) {
    case PreviewMode.Full:
      Component = <ImagePanView id={id} />;
      break;
    case PreviewMode.Slices:
      Component = <ImagePreview id={id} />;
      break;
    default:
      return null;
  }

  return Component;
}

function ImagePanView({ id }: IImageEditorSharedElement) {
  const window = useWindowDimensions();
  const selectedImage = useSubject(selectedImage$)!;
  const imageHeight =
    (selectedImage.height * window.width) / selectedImage.width;
  return (
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
      <StatusBar style="light" />
    </ScrollView>
  );
}
