import React from 'react';
import { Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Control from './Control';
import sliceImage from '../lib/SliceImage';
import ToggleControlStyle from './SliceToggleControlStyle';

export default function PostButton() {
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
