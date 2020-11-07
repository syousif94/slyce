import {
  Image,
  Platform,
  ScaledSize,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as MediaLibrary from 'expo-media-library';
import { getAssetInfo, useAssetInfoAddress } from '../lib/PanoAlbum';
import { selectImage } from '../lib/SelectedImage';
import SharedElement from 'react-navigation-shared-element/build/SharedElement';
import { useNavigation } from '@react-navigation/native';
import { resetCropSettings } from '../lib/CropSettings';

interface IPanoItem {
  item: MediaLibrary.Asset;
  index: number;
  window: ScaledSize;
}

export default function PanoItem({ item: asset, index, window }: IPanoItem) {
  const navigation = useNavigation();
  const height = PanoItem.getHeight(asset, window);
  const info = getAssetInfo(asset);
  const address = useAssetInfoAddress(info);
  return (
    <View style={{ backgroundColor: '#000' }}>
      <TouchableOpacity
        style={{ height: height, overflow: 'hidden' }}
        onPress={() => {
          selectImage(asset);
          resetCropSettings();
          navigation.navigate('Editor - Slyce', { id: asset.id });
        }}
      >
        <SharedElement id={asset.id}>
          <Image
            source={asset}
            style={{
              height: height - PanoItem.infoHeight,
              width: window.width,
              overflow: 'hidden',
            }}
          />
        </SharedElement>
        <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
          <Text style={{ color: '#fff', fontWeight: '700' }} numberOfLines={1}>
            {address}
          </Text>
          <Text style={{ color: '#ccc' }} numberOfLines={1}>
            created {info.createdAt.from}
          </Text>
          <Text style={{ color: '#ccc' }} numberOfLines={1}>
            updated {info.updatedAt.from}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

PanoItem.infoHeight = 90;

PanoItem.getHeight = function (
  item: MediaLibrary.Asset,
  window: ScaledSize
): number {
  return Math.ceil((item.height * window.width) / item.width) + this.infoHeight;
};
