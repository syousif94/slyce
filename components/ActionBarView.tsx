import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ActionBarView({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      pointerEvents="box-none"
    >
      {children}
    </View>
  );
}
