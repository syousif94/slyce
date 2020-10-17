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

export const CONTROL_BG = 'rgba(48,48,48,0.45)';
export const CONTROL_SELECTED_BG = 'rgba(130,130,130,0.45)';
export const CONTROL_DISABLED_FILL = 'rgba(140,140,140,0.8)';

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
          backgroundColor: CONTROL_BG,
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
