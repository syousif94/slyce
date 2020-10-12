import React, { useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  useWindowDimensions,
  Text,
  ViewToken,
} from 'react-native';
import { useSubject } from '../lib/useSubject';
import { album$, initializeAlbum } from '../lib/PanoAlbum';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PanoItem from './PanoItem';
import EmptyPanoView from './EmptyPanoView';

export default function PanoList() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const album = useSubject(album$);
  useEffect(() => {
    initializeAlbum();
  }, []);

  const onViewableItemsChanged = useCallback(
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      console.log(info.viewableItems);
    },
    []
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <FlatList
        ListEmptyComponent={EmptyPanoView}
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
              Select to split into equal slyces
            </Text>
          </View>
        )}
        contentInsetAdjustmentBehavior="never"
        style={{ flex: 1 }}
        data={album}
        renderItem={(data) => {
          return <PanoItem window={window} {...data} />;
        }}
        viewabilityConfig={PanoList.viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </View>
  );
}

PanoList.viewabilityConfig = {
  itemVisiblePercentThreshold: 0.1,
  minimumViewTime: 250,
};
