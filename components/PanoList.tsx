import React, { useEffect } from 'react';
import { View, FlatList, useWindowDimensions, Text, Image } from 'react-native';
import { useSubject } from '../lib/useSubject';
import { album$, initializeAlbum } from '../lib/PanoAlbum';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PanoItem from './PanoItem';

export default function PanoList() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const album = useSubject(album$);
  useEffect(() => {
    initializeAlbum();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <FlatList
        ListHeaderComponent={() => (
          <View
            style={{
              height: 80 + insets.top,
              paddingHorizontal: 10,
              paddingTop: insets.top,
            }}
          >
            <Text style={{ fontSize: 30, color: '#fff', fontWeight: '700' }}>
              Panoramas
            </Text>
            <Text style={{ fontSize: 14, color: '#ccc' }}>
              Select a panorama to slice and export
            </Text>
          </View>
        )}
        contentInsetAdjustmentBehavior="never"
        style={{ flex: 1 }}
        data={album}
        contentContainerStyle={{ minHeight: window.height }}
        getItemLayout={(data, index) => {
          const height = PanoItem.getHeight(data![index], window);

          return {
            index,
            length: height,
            offset: height * index + 80 + insets.top,
          };
        }}
        renderItem={(data) => {
          return <PanoItem window={window} {...data} />;
        }}
      />
    </View>
  );
}
