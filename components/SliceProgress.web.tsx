import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { slyce$, downloadImage } from '../lib/SliceImage';
import { useSubject } from '../lib/useSubject';
import { IImageSource } from '../lib/SelectedImage';

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

  console.log(images);

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
      <View style={{ alignItems: 'center' }}>
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
        <Text style={{ color: '#fff', fontSize: 12, marginBottom: 20 }}>
          {!images.length
            ? 'Wait a few seconds... Apps do this a bit faster.'
            : 'Click or tap to download each slyce. May take a few seconds for the download to start.'}
        </Text>
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
                    downloadImage((image as any).base64, `slyce-${i + 1}.jpg`);
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
      </View>
    </View>
  );
}
