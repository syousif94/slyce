import React, { useEffect, useRef, useState } from 'react';
import { View, Image } from 'react-native';
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
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
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
      <MapView ref={mapRef} style={{ flex: 1 }}>
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
    </View>
  );
}
