import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { slyce$, downloadImage, clearImage } from '../lib/SliceImage';
import { useSubject } from '../lib/useSubject';
import { IImageSource } from '../lib/SelectedImage';
import Control from './Control';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SliceProgress() {
  const [images, setImages] = useState<IImageSource[]>([]);

  const slyce = useSubject(slyce$);

  useEffect(() => {
    if (slyce) {
      const sub = slyce.images.subscribe((val) => {
        setImages(val);
      });

      return () => {
        sub.unsubscribe();
      };
    }
  }, [slyce]);

  if (!slyce) {
    return null;
  }

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', maxWidth: '100%' }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '700',
            marginBottom: 10,
          }}
        >
          {!images.length ? 'Slicing' : 'Slyced'}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            marginHorizontal: 25,
            maxWidth: 500,
          }}
        >
          {!images.length
            ? 'Wait a few seconds... Apps do this a bit faster.'
            : 'Click or tap to download each slyce. May take a few seconds for the download to start. iOS may not handle full size images. Use the the app instead.'}
        </Text>
        <ScrollView
          horizontal
          style={{ height: 130, maxWidth: '100%' }}
          centerContent
        >
          <View style={{ flexDirection: 'row', height: 130 }}>
            {images.map((image, i) => {
              return (
                <TouchableOpacity
                  key={`${i}`}
                  style={{
                    height: 130,
                    width: (image.width * 150) / image.height,
                    overflow: 'hidden',
                    marginHorizontal: 5,
                  }}
                  onPress={() => {
                    setTimeout(() => {
                      downloadImage(
                        (image as any).base64,
                        `slyce-${i + 1}.jpg`
                      );
                    }, 500);
                  }}
                >
                  <img
                    style={{
                      height: 130,
                      width: (image.width * 150) / image.height,
                      flex: '0 0 auto',
                      cursor: 'pointer',
                    }}
                    src={(image as any).base64}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <DismissControl />
    </View>
  );
}

function DismissControl() {
  return (
    <Control
      touchableStyle={{
        position: 'absolute',
        top: 20,
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
