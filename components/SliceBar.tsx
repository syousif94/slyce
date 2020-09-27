import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActionBarView from './ActionBarView';
import { useSubject } from '../lib/useSubject';
import { getRatio } from '../lib/CropSettings';
import {
  numberOfSlices$,
  decrementSlices,
  incrementSlices,
  sliceImage,
} from '../lib/CropSettings';

export default function SliceBar() {
  const numberOfSlices = useSubject(numberOfSlices$);
  const disableDecrement = numberOfSlices <= 2;
  const ratio = getRatio()! * 9;
  const lessThan16By9 = ratio > 16;
  return (
    <ActionBarView>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 40,
        }}
        pointerEvents="box-none"
      >
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          onPress={sliceImage}
        >
          <MaterialCommunityIcons name="crop" size={28} color="#fff" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#fff',
              marginLeft: 10,
            }}
          >
            Slice Panorama
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: lessThan16By9 ? 'red' : 'yellow',
              marginLeft: 10,
            }}
          >
            {ratio.toFixed(2)} : 9
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
        }}
        pointerEvents="box-none"
      >
        <TouchableOpacity
          disabled={disableDecrement}
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          onPress={decrementSlices}
        >
          <MaterialCommunityIcons
            name="minus"
            size={28}
            color={disableDecrement ? '#555' : '#fff'}
          />
        </TouchableOpacity>
        <View style={{ width: 140, alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: '700', color: '#fff' }}>
            {numberOfSlices}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          onPress={incrementSlices}
        >
          <MaterialCommunityIcons name="plus" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </ActionBarView>
  );
}
