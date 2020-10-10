import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface IControlProps {
  touchableStyle?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
  disabled?: boolean;
}

export default function Control({
  touchableStyle,
  onPress,
  children,
  disabled,
}: IControlProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: 10,
        },
        touchableStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
}
