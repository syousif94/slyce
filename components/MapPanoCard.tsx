import React, { useState } from 'react';
import { View, Image, LayoutRectangle, ImageStyle, Text } from 'react-native';
import { selectedMarkerData$ } from '../lib/MapData';
import { useSubject } from '../lib/useSubject';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { selectImage } from '../lib/SelectedImage';
import { resetCropSettings } from '../lib/CropSettings';
import SharedElement from 'react-navigation-shared-element/build/SharedElement';

export default function PanoCard() {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);
  const selectedMarkerData = useSubject(selectedMarkerData$);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  if (!selectedMarkerData) {
    return null;
  }

  let imageStyle: ImageStyle | null = null;

  if (layout) {
    imageStyle = {
      width: layout.width - 10,
      height:
        ((layout.width - 10) / selectedMarkerData.width) *
        selectedMarkerData.height,
      borderRadius: 6,
    };
  }

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 5,
        paddingBottom: insets.bottom,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      }}
      onLayout={(e) => {
        setLayout(e.nativeEvent.layout);
      }}
    >
      {imageStyle && (
        <SharedElement id={selectedMarkerData.id}>
          <Image source={selectedMarkerData} style={imageStyle} />
        </SharedElement>
      )}
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <MaterialCommunityIcons name="eye" size={25} color="blue" />
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '700',
                marginLeft: 10,
              }}
            >
              VIEW
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: 5 }} />
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => {
              selectImage(selectedMarkerData);
              resetCropSettings();
              navigation.navigate('Editor - Slyce', {
                id: selectedMarkerData.id,
              });
            }}
          >
            <Feather name="share" size={23} color="blue" />
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '700',
                marginLeft: 10,
              }}
            >
              SHARE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
