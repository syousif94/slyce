import React, { useEffect } from 'react';
import { View, FlatList, useWindowDimensions, Text } from 'react-native';
import { useSubject } from '../lib/useSubject';
import { album$, initializeAlbum } from '../lib/PanoAlbum';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PanoItem from './PanoItem';
import EmptyPanoView from './EmptyPanoView';
import { StatusBar } from 'expo-status-bar';

export default function PanoList() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const album = useSubject(album$);

  return (
    <View
      style={{
        backgroundColor: '#13052b',
        flex: 1,
      }}
    >
      <FlatList
        ListEmptyComponent={EmptyPanoView}
        contentInsetAdjustmentBehavior="never"
        ListHeaderComponent={() => (
          <View
            style={{
              paddingTop: insets.top,
              paddingBottom: 15,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: '#fff',
                  fontWeight: '700',
                }}
              >
                Camera Roll
              </Text>
            </View>
          </View>
        )}
        style={{ flex: 1 }}
        data={album}
        renderItem={(data) => {
          return <PanoItem window={window} {...data} />;
        }}
      />
      <StatusBar style="light" />
    </View>
  );
}
