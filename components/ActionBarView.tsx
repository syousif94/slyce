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
          maxWidth: 400,
          alignSelf: 'center',
          bottom: 0,
          width: '100%',
          top: 0,
          paddingBottom: insets.bottom,
          justifyContent: 'flex-end',
        },
        style,
      ]}
      pointerEvents="box-none"
    >
      {children}
    </View>
  );
}
