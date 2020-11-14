import React, { ReactNode, useEffect } from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SharedElement from 'react-navigation-shared-element/build/SharedElement';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useSubject } from '../lib/useSubject';
import { selectedImage$ } from '../lib/SelectedImage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PostMapView from './PostMapView';
import { StatusBar } from 'expo-status-bar';
import {
  caption$,
  instagram$,
  submitPano,
  saveInstagram,
  loadInstagram,
} from '../lib/SubmitPano';
import PostProgress from './PostProgress';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PostScreen({
  route,
}: StackScreenProps<RootStackParamList, 'Post'>) {
  const selectedImage = useSubject(selectedImage$)!;
  const window = useWindowDimensions();
  const imageHeight =
    (selectedImage.height * window.width) / selectedImage.width;
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="never">
        <Text
          style={{
            color: '#000',
            marginHorizontal: 20,
            fontSize: 22,
            fontWeight: '700',
            marginTop: insets.top,
            marginBottom: 8,
          }}
        >
          Post on Slyce
        </Text>
        <View
          style={{
            height: imageHeight,
            width: window.width,
          }}
        >
          <SharedElement id={route.params.id}>
            <Image
              source={selectedImage}
              style={{ height: imageHeight, width: window.width }}
            />
          </SharedElement>
          <CropButton />
        </View>
        <InputLabel>Caption</InputLabel>
        <CaptionInput />
        <InputLabel>Instagram</InputLabel>
        <InstagramInput />
        <SubmitButton />
      </ScrollView>
      <PostMapView />
      <PostProgress />
      <StatusBar style="dark" />
    </View>
  );
}

function InputLabel({ children }: { children: ReactNode }) {
  return (
    <Text
      style={{
        color: '#666',
        marginHorizontal: 35,
        fontSize: 13,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 8,
      }}
    >
      {children}
    </Text>
  );
}

function CaptionInput() {
  const value = useSubject(caption$);
  return (
    <TextInput
      value={value}
      onChangeText={(text) => {
        caption$.next(text);
      }}
      multiline
      style={{
        marginHorizontal: 20,
        backgroundColor: '#fafafa',
        borderRadius: 10,
        height: 130,
        paddingTop: 13,
        paddingLeft: 15,
        color: '#000',
      }}
    />
  );
}

function CropButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 7,
        right: 7,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => {
        navigation.navigate('Editor - Slyce', { id: selectedImage$.value!.id });
      }}
    >
      <MaterialCommunityIcons name="crop" size={16} color="#fff" />
      <Text
        style={{
          fontSize: 12,
          fontWeight: '700',
          color: '#fff',
          marginLeft: 7,
        }}
      >
        CROP
      </Text>
    </TouchableOpacity>
  );
}

function InstagramInput() {
  const value = useSubject(instagram$);
  useEffect(() => {
    loadInstagram();
  }, []);
  return (
    <TextInput
      autoCapitalize="none"
      spellCheck={false}
      autoCorrect={false}
      value={value}
      onChangeText={(text) => {
        instagram$.next(text);
      }}
      onBlur={() => {
        saveInstagram();
      }}
      style={{
        marginHorizontal: 20,
        backgroundColor: '#fafafa',
        borderRadius: 10,
        height: 54,
        paddingLeft: 15,
        color: '#000',
      }}
    />
  );
}

function SubmitButton() {
  return (
    <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
      <TouchableOpacity
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 35,
        }}
        onPress={() => {
          submitPano(selectedImage$.value!);
        }}
      >
        <Text style={{ color: 'blue', fontWeight: '700' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
