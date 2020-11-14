import React from 'react';
import SegmentSwitch from './SegmentSwitch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { BehaviorSubject } from 'rxjs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const currentIndex$ = new BehaviorSubject(0);

export default function MapViewSegments() {
  const insets = useSafeAreaInsets();
  return (
    <SegmentSwitch
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 8,
        position: 'absolute',
        bottom: insets.bottom,
        right: 10,
        width: 100,
        height: 38,
      }}
      sliderBackground="rbga(255,255,255,0.1)"
      onPress={(index) => {
        currentIndex$.next(index);
      }}
      initialIndex={currentIndex$.value}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons name="map" color="#fff" size={24} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name="format-list-numbered"
          color="#fff"
          size={24}
        />
      </View>
    </SegmentSwitch>
  );
}
