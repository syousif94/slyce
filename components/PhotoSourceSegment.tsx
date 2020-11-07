import React from 'react';
import SegmentSwitch from './SegmentSwitch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ViewStyle, View } from 'react-native';
const emitter = require('tiny-emitter/instance');

interface PhotoSourceSegmentProps {
  style: ViewStyle;
}

export default function PhotoSourceSegment(props: PhotoSourceSegmentProps) {
  return (
    <SegmentSwitch
      {...props}
      sliderBackground="rbga(255,255,255,0.1)"
      onPress={(index) => {}}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name="format-list-numbered"
          color="#fff"
          size={24}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons name="earth" color="#fff" size={24} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons name="account" color="#fff" size={24} />
      </View>
    </SegmentSwitch>
  );
}
