import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Control from './Control';
import ToggleControlStyle from './SliceToggleControlStyle';
import { useNavigation } from '@react-navigation/native';
import { useSubject } from '../lib/useSubject';
import { selectedImage$ } from '../lib/SelectedImage';

export default function PostButton() {
  const navigation = useNavigation();
  const selectedImage = useSubject(selectedImage$);
  return (
    <Control
      touchableStyle={{
        ...ToggleControlStyle,
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}
      onPress={() => {
        navigation.navigate('Post', { id: selectedImage?.id });
      }}
    >
      <MaterialCommunityIcons
        name="comment-text"
        size={20}
        color="#fff"
        style={{ marginTop: 1 }}
      />
      <Text
        style={{
          color: 'yellow',
          fontSize: 12,
          fontWeight: '700',
          marginLeft: 10,
        }}
      >
        POST ON SLYCE
      </Text>
    </Control>
  );
}
