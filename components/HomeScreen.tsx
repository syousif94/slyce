import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Platform, Text, useWindowDimensions, View } from 'react-native';
import { openPicker, selectedImage$ } from '../lib/SelectedImage';
import Control from './Control';
// import PanoList from './PanoList';
import { resetCropSettings } from '../lib/CropSettings';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import MapScreen from './MapScreen';

export default function HomeScreen() {
  if (Platform.OS === 'ios') {
    return <MapScreen />;
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
      <WebHeader />
      <View style={{ flex: 1 }} />
      <Image
        source={require('../assets/splash.png')}
        style={{ height: 180, width: 180, resizeMode: 'cover' }}
      />
      <Text
        style={{
          color: '#fff',
          fontWeight: '500',
          marginTop: -15,
          marginBottom: 20,
          marginHorizontal: 50,
          fontSize: 17,
          lineHeight: 27,
          textAlign: 'center',
          zIndex: 4,
        }}
      >
        Select a panorama to split it into equal slyces
      </Text>
      <Control
        onPress={async () => {
          if (isiOSWeb()) {
            alert(
              'Heads up: On iPhones, switch the selected image size to large for panoramas.'
            );
          }

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
          onPress={() => {
            Linking.openURL(
              'https://apps.apple.com/us/app/slyce-panoramas/id1533345426'
            );
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
          onPress={() => {
            Linking.openURL(
              'https://play.google.com/store/apps/details?id=me.syousif.slyce'
            );
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

function WebHeader() {
  if (Platform.OS !== 'web') {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        paddingTop: 10,
        paddingRight: 10,
      }}
    >
      <Control
        touchableStyle={{
          flexDirection: 'row',
          paddingRight: 12,
          paddingLeft: 6,
          paddingVertical: 6,
          alignItems: 'center',
        }}
        onPress={() => {
          Linking.openURL('https://instagram.com/slyce.app');
        }}
      >
        <MaterialCommunityIcons name="instagram" size={20} color="#fff" />
        <Text
          style={{
            color: '#fff',
            fontSize: 13,
            fontWeight: '700',
            marginLeft: 12,
          }}
        >
          @slyce.app
        </Text>
      </Control>
      <Control
        touchableStyle={{
          flexDirection: 'row',
          paddingRight: 12,
          paddingLeft: 6,
          paddingVertical: 6,
          alignItems: 'center',
        }}
        onPress={() => {
          Linking.openURL('https://instagram.com/slyce.app');
        }}
      >
        {/* <MaterialCommunityIcons name="github-circle" size={20} color="#fff" /> */}
        <MaterialCommunityIcons name="file-code" size={20} color="#fff" />
        <Text
          style={{
            color: '#fff',
            fontSize: 13,
            fontWeight: '700',
            marginLeft: 5,
          }}
        >
          {'<github />'}
        </Text>
      </Control>
    </View>
  );
}

function isiOSWeb() {
  return ['iPhone Simulator', 'iPod Simulator', 'iPhone', 'iPod'].includes(
    navigator.platform
  );
}
