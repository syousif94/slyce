import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import {
  slyce$,
  useSlyceImages,
  clearImage,
  deleteImageSlices,
} from '../lib/SliceImage';
import { useSubject } from '../lib/useSubject';
import Control from './Control';
import { CONTROL_DISABLED_FILL } from './Control';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { openInstagram } from '../lib/ShareImages';

export default function SliceProgress() {
  const slyce = useSubject(slyce$);

  const images = useSlyceImages(slyce);

  if (!slyce) {
    return null;
  }

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.85)',
      }}
    >
      <View style={{ height: 150, backgroundColor: '#000' }}>
        <ScrollView horizontal style={{ height: 150 }}>
          <View
            style={{ height: 150, flexDirection: 'row', alignItems: 'center' }}
          >
            {images.map((image) => {
              return (
                <Image
                  source={image}
                  key={image.uri}
                  style={{
                    height: 130,
                    width: (image.width * 150) / image.height,
                    overflow: 'hidden',
                    marginHorizontal: 2,
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: '#fff',
          marginTop: 20,
        }}
      >
        {!images.length ? 'Slycing' : 'Slyced'}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: '#fff',
          marginTop: 5,
        }}
      >
        {!images.length ? 'hang tight' : 'Saved in order'}
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: -70 }}>
        {/** Delete control */}
        <Control
          touchableStyle={{
            paddingHorizontal: 18,
            paddingVertical: 12,
            marginHorizontal: 7,
          }}
          onPress={() => {
            deleteImageSlices();
            clearImage();
          }}
        >
          <Text
            style={{
              color: !images.length ? CONTROL_DISABLED_FILL : '#F61A44',
              fontSize: 13,
              fontWeight: '700',
            }}
          >
            Delete
          </Text>
        </Control>
        {/** Share control */}
        <Control
          touchableStyle={{
            paddingHorizontal: 18,
            paddingVertical: 12,
            marginHorizontal: 7,
          }}
          onPress={() => {
            openInstagram();
          }}
        >
          <Text
            style={{
              color: !images.length ? CONTROL_DISABLED_FILL : '#1AA6F6',
              fontSize: 15,
              fontWeight: '700',
            }}
          >
            Open Instagram
          </Text>
        </Control>
      </View>
      <DismissControl />
    </View>
  );
}

function DismissControl() {
  const insets = useSafeAreaInsets();
  return (
    <Control
      touchableStyle={{
        position: 'absolute',
        top: 20 + insets.top,
        right: 20,
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        clearImage();
      }}
    >
      <MaterialCommunityIcons name="close" size={24} color="#fff" />
    </Control>
  );
}
