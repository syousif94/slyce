import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, useWindowDimensions } from 'react-native';
import { currentIndex$ } from './MapViewSegments';
import { useSubject } from '../lib/useSubject';
import PanoList from './PanoList';

export default function BrowseList() {
  const window = useWindowDimensions();
  const value = useRef(new Animated.Value(0));
  const currentIndex = useSubject(currentIndex$);
  useEffect(() => {
    let toValue = currentIndex;

    Animated.timing(value.current, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);
  return (
    <View
      style={{ ...StyleSheet.absoluteFillObject }}
      pointerEvents={currentIndex ? 'box-none' : 'none'}
    >
      <Animated.View
        style={{
          backgroundColor: '#000',
          flex: 1,
          opacity: value.current,
          transform: [
            {
              scale: value.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1.2, 1],
              }),
            },
          ],
        }}
      >
        <PanoList />
      </Animated.View>
    </View>
  );
}
