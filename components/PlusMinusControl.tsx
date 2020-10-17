import React from 'react';
import { ViewStyle, View, Text } from 'react-native';
import Control from './Control';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CONTROL_DISABLED_FILL } from './Control';

const PlusMinusControlTouchableStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 8,
  paddingHorizontal: 12,
};

interface IPlusMinusControlProps {
  currentValue: number;
  disableDecrement?: boolean;
  disableIncrement?: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function PlusMinusControl({
  currentValue,
  disableDecrement,
  disableIncrement,
  onIncrement,
  onDecrement,
}: IPlusMinusControlProps) {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      pointerEvents="box-none"
    >
      {/* subtract button */}
      <Control
        onPress={onDecrement}
        disabled={disableDecrement}
        touchableStyle={PlusMinusControlTouchableStyle}
      >
        <MaterialCommunityIcons
          name="minus"
          size={28}
          color={disableDecrement ? CONTROL_DISABLED_FILL : '#fff'}
        />
      </Control>
      {/* text */}
      <View style={{ width: 140, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: '700', color: '#fff' }}>
          {currentValue}
        </Text>
      </View>
      {/* add button */}
      <Control
        onPress={onIncrement}
        disabled={disableIncrement}
        touchableStyle={PlusMinusControlTouchableStyle}
      >
        <MaterialCommunityIcons name="plus" size={28} color="#fff" />
      </Control>
    </View>
  );
}
