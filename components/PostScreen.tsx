import React from 'react';
import { View, Image, useWindowDimensions, Text } from 'react-native';
import SharedElement from 'react-navigation-shared-element/build/SharedElement';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useSubject } from '../lib/useSubject';
import { selectedImage$ } from '../lib/SelectedImage';
import { useNavigation } from '@react-navigation/native';
import { resetCropSettings } from '../lib/CropSettings';
import Control from './Control';

export default function PostScreen({
  route,
}: StackScreenProps<RootStackParamList, 'Post'>) {
  const selectedImage = useSubject(selectedImage$)!;
  const window = useWindowDimensions();
  const imageHeight =
    (selectedImage.height * window.width) / selectedImage.width;
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: '#000', justifyContent: 'center', flex: 1 }}
    >
      <SharedElement id={route.params.id}>
        <Image
          source={selectedImage}
          style={{ height: imageHeight, width: window.width }}
        />
      </SharedElement>
      <Control
        touchableStyle={{ marginTop: 20, padding: 8 }}
        onPress={() => {
          resetCropSettings();
          navigation.navigate('Editor - Slyce', { id: route.params.id });
        }}
      >
        <Text style={{ color: '#fff' }}>Split</Text>
      </Control>
      <Control
        touchableStyle={{ marginTop: 20, padding: 8 }}
        onPress={() => {
          resetCropSettings();
          navigation.navigate('Editor - Slyce', { id: route.params.id });
        }}
      >
        <Text style={{ color: '#fff' }}>Post</Text>
      </Control>
    </View>
  );
}
