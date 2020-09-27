import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { openPicker } from '../lib/SelectedImage';
import ActionBarView from './ActionBarView';

export default function LoadBar() {
  return (
    <ActionBarView style={{ alignItems: 'center', paddingBottom: 80 }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}
        onPress={openPicker}
      >
        <MaterialCommunityIcons name="panorama" size={28} color="#fff" />
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#fff',
            marginLeft: 10,
          }}
        >
          Load Panorama
        </Text>
      </TouchableOpacity>
    </ActionBarView>
  );
}
