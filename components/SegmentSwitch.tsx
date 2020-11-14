import {
  View,
  Animated,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  LayoutRectangle,
} from 'react-native';
import React, { useRef, ReactNode, useState, useEffect } from 'react';

const { timing, Value } = Animated;

export interface SegmentProps {
  initialIndex?: number;
  children: ReactNode;
  style?: ViewStyle;
  sliderBackground?: string;
  onPress?: (index: number) => void;
}

export default function SegmentSwitch({
  children,
  style,
  sliderBackground = '#fff',
  onPress,
  initialIndex = 0,
}: SegmentProps) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const value = useRef(new Value(0));

  const [layout, setLayout] = useState<LayoutRectangle | null>();
  const initialIndexSet = useRef(false);

  const childrenLen = React.Children.count(children);

  useEffect(() => {
    if (initialIndexSet.current || !layout) {
      return;
    }

    value.current.setValue(initialIndex / childrenLen);
    initialIndexSet.current = true;
  }, [layout]);

  return (
    <View
      style={{ ...style }}
      onLayout={(e) => {
        setLayout(e.nativeEvent.layout);
      }}
    >
      {!layout ? null : (
        <Animated.View
          style={{
            transform: [
              {
                translateX: value.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, layout.width],
                }),
              },
            ],
            flex: 1,
            width: layout.width / childrenLen,
          }}
        >
          <View
            style={{
              margin: 3,
              backgroundColor: 'rgba(255,255,255,0.3)',
              flex: 1,
              borderRadius: 5,
            }}
          />
        </Animated.View>
      )}
      <View style={{ ...StyleSheet.absoluteFillObject, flexDirection: 'row' }}>
        {React.Children.map(children, (child, index) => {
          return (
            <TouchableOpacity
              disabled={index == selectedIndex}
              style={{ flex: 1 }}
              onPress={() => {
                setSelectedIndex(index);
                const config = {
                  duration: 150,
                  toValue: index / childrenLen,
                  useNativeDriver: true,
                };
                const anim = timing(value.current, config);
                anim.start();
                onPress && onPress(index);
              }}
            >
              {child}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
