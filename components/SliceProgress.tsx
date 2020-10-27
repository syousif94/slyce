import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
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
      {!images.length ? (
        <View
          style={{
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 24,
              marginTop: 15,
            }}
          >
            Slycing
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              marginTop: 8,
            }}
          >
            Hang tight
          </Text>
        </View>
      ) : (
        <View style={{ height: 150, backgroundColor: '#000' }}>
          <ScrollView horizontal style={{ height: 150 }}>
            <View
              style={{
                height: 150,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {images.map((image, i) => {
                return (
                  <Image
                    source={image}
                    key={image.uri}
                    style={{
                      height: 130,
                      width: (image.width * 150) / image.height,
                      overflow: 'hidden',
                      marginRight: i < images.length - 1 ? 7 : 0,
                    }}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}

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
          <MaterialCommunityIcons
            name="delete"
            size={25}
            color={!images.length ? CONTROL_DISABLED_FILL : '#fff'}
          />
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
          <MaterialCommunityIcons
            name="instagram"
            size={25}
            color={!images.length ? CONTROL_DISABLED_FILL : '#fff'}
          />
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
