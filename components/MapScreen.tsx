import React, { useEffect, useRef, MutableRefObject, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import Control from './Control';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PhotoSourceSegment from './PhotoSourceSegment';
import { album$, initializeAlbum } from '../lib/PanoAlbum';
import { Marker, Callout } from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';
import { useSubject } from '../lib/useSubject';
import { mappedPanos$, MapAsset, initializeUserMap } from '../lib/MapData';
import { sampleTime } from 'rxjs/operators';

export default function MapScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <PanoMapView />
      <PhotoSourceSegment
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 8,
          position: 'absolute',
          bottom: insets.bottom,
          left: 10,
          width: 150,
          height: 38,
        }}
      />
      <PostButton />
    </View>
  );
}

function renderMarker(data: MapAsset) {
  return (
    <Marker key={data.id} coordinate={data.location!}>
      <View
        style={{
          padding: 2,
          backgroundColor: '#fff',
          borderRadius: 6,
        }}
      >
        <Image
          source={data}
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
  );
}

function renderCluster(ref: MutableRefObject<any>) {
  return (cluster: any, onPress: any) => {
    if (!ref.current) {
      return null;
    }
    const pointCount = cluster.pointCount;
    const coordinate = cluster.coordinate;
    const clusterId = cluster.clusterId;
    const clusteringEngine = ref.current.getClusteringEngine();
    const clusteredPoints = clusteringEngine.getLeaves(clusterId, 100);
    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <View
          style={{
            padding: 2,
            backgroundColor: '#fff',
            borderRadius: 6,
          }}
        >
          <Image
            source={clusteredPoints[0].properties.item}
            style={{
              height: 30,
              width: 60,
              borderRadius: 4,
              overflow: 'hidden',
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            position: 'absolute',
            top: -10,
            right: -10,
            height: 20,
            minWidth: 20,
            paddingHorizontal: 4,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}>
            {pointCount}
          </Text>
        </View>
      </Marker>
    );
  };
}

const INIT_REGION = {
  latitude: 30.2672,
  longitude: -97.7431,
  latitudeDelta: 100,
  longitudeDelta: 100,
};

function PanoMapView() {
  const insets = useSafeAreaInsets();
  const [personalData, setPersonalData] = useState<MapAsset[]>([]);
  const ref = useRef<ClusteredMapView | null>(null);
  useEffect(() => {
    initializeAlbum();
    initializeUserMap();

    const sub = mappedPanos$.pipe(sampleTime(300)).subscribe((panos) => {
      setPersonalData([...panos]);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);
  return (
    <ClusteredMapView
      style={{ flex: 1 }}
      data={personalData}
      initialRegion={INIT_REGION}
      ref={ref}
      renderMarker={renderMarker}
      renderCluster={renderCluster(ref)}
      edgePadding={{
        top: insets.top,
        bottom: insets.bottom || 25,
        left: 35,
        right: 45,
      }}
    />
  );
}

function PostButton() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: 38,
        width: 66,
        borderRadius: 19,
        backgroundColor: 'rgba(0, 65, 185, 0.8)',
        position: 'absolute',
        bottom: insets.bottom,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 2,
      }}
      onPress={() => {
        navigation.navigate('Library');
      }}
    >
      <Feather name="share" size={20} color="#fff" />
    </TouchableOpacity>
  );
}
