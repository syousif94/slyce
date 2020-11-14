import React from 'react';
import SegmentSwitch from './SegmentSwitch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BehaviorSubject } from 'rxjs';

export const currentIndex$ = new BehaviorSubject(0);

export default function MapSourceSegments() {
  const insets = useSafeAreaInsets();
  return (
    <SegmentSwitch
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 8,
        position: 'absolute',
        bottom: insets.bottom,
        left: 10,
        width: 200,
        height: 38,
      }}
      sliderBackground="rbga(255,255,255,0.1)"
      onPress={(index) => {
        currentIndex$.next(index);
      }}
      initialIndex={currentIndex$.value}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <MaterialCommunityIcons name="earth" color="#fff" size={24} />
        <Text
          style={{
            fontSize: 12,
            color: '#fff',
            fontWeight: '700',
            marginLeft: 5,
          }}
        >
          WORLD
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <MaterialCommunityIcons name="account" color="#fff" size={24} />
        <Text
          style={{
            fontSize: 12,
            color: '#fff',
            fontWeight: '700',
            marginLeft: 5,
          }}
        >
          USER
        </Text>
      </View>
    </SegmentSwitch>
  );
}
