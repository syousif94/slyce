import React, { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { selectedImage$ } from '../lib/SelectedImage';
import * as MediaLibrary from 'expo-media-library';
import { useSubject } from '../lib/useSubject';
import { getAssetLocation } from '../lib/SubmitPano';

export default function PostMapView() {
  const mapRef = useRef<MapView | null>(null);
  const selectedImage = useSubject(selectedImage$);
  const [location, setLocation] = useState<MediaLibrary.Location | undefined>();
  useEffect(() => {
    let unmounted = false;

    const onMount = async () => {
      const id = selectedImage$.value?.id;
      if (id) {
        const location = await getAssetLocation(id);

        if (unmounted || !location) {
          return;
        }

        setLocation(location);

        mapRef.current?.animateToRegion(
          {
            ...location,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
          0
        );
      }
    };

    onMount();

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <View style={{ height: '30%' }}>
      <MapView ref={mapRef} style={{ flex: 1 }} mapType="hybrid">
        {location ? (
          <Marker coordinate={location}>
            <View
              style={{
                padding: 2,
                backgroundColor: '#fff',
                borderRadius: 6,
              }}
            >
              <Image
                source={selectedImage!}
                style={{
                  height: 30,
                  width: 60,
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
                resizeMode="cover"
              />
            </View>
          </Marker>
        ) : null}
      </MapView>
      {!location ? (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              paddingHorizontal: 7,
              paddingVertical: 5,
              borderRadius: 5,
              backgroundColor: 'rgba(100,100,100, 0.7)',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: '700' }}>
              Location required to post on Slyce
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
