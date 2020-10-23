import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { openPicker, selectedImage$ } from '../lib/SelectedImage';
import Control from './Control';
import PanoList from './PanoList';
import { resetCropSettings } from '../lib/CropSettings';

export default function HomeScreen() {
  if (Platform.OS === 'ios') {
    return <PanoList />;
  }

  const window = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#000',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }} />
      <Image
        source={require('../assets/splash.png')}
        style={{ height: 180, width: 180, resizeMode: 'cover' }}
      />
      <Text
        style={{
          color: '#fff',
          fontWeight: '500',
          marginTop: -10,
          marginBottom: 30,
          marginHorizontal: 50,
          lineHeight: 20,
          textAlign: 'center',
          zIndex: 4,
        }}
      >
        Select a panorama to split it into equal slyces
      </Text>
      <Control
        onPress={async () => {
          await openPicker();
          if (selectedImage$.value) {
            resetCropSettings();
            navigation.navigate('Editor - Slyce', { id: '' });
          }
        }}
        touchableStyle={{
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }}>
          SELECT PANORAMA
        </Text>
      </Control>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingTop: Platform.OS === 'web' ? window.height * 0.15 : 0,
        }}
      >
        <WebFooter />
      </View>
    </View>
  );
}

function WebFooter() {
  if (Platform.OS !== 'web') {
    return null;
  }
  return (
    <View style={{ alignItems: 'center', paddingBottom: 40 }}>
      <Text style={{ color: '#fff', marginBottom: 20, fontWeight: '500' }}>
        Apps also available
      </Text>
      <View style={{ flexDirection: 'row', padding: 10, paddingTop: 0 }}>
        <Control
          touchableStyle={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            marginHorizontal: 5,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: '700' }}>
            iOS
          </Text>
        </Control>
        <Control
          touchableStyle={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            marginHorizontal: 5,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: '700' }}>
            ANDROID
          </Text>
        </Control>
      </View>
    </View>
  );
}