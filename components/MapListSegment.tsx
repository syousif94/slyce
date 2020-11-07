import React from 'react';
import SegmentSwitch from './SegmentSwitch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ViewStyle, View } from 'react-native';
const emitter = require('tiny-emitter/instance');

interface MapListSegmentProps {
  style: ViewStyle;
}

export default function MapListSegment(props: MapListSegmentProps) {
  return (
    <SegmentSwitch
      {...props}
      sliderBackground="rbga(255,255,255,0.1)"
      onPress={(index) => {
        switch (index) {
          case 0:
            emitter.emit('toggle-library', false);
            break;
          case 1:
            emitter.emit('toggle-library', true);
            break;
        }
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons name="map" color="#fff" size={18} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons name="image-multiple" color="#fff" size={18} />
      </View>
    </SegmentSwitch>
  );
}
