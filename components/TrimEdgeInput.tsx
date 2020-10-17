import React, { ReactNode, useRef, useState } from 'react';
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleSheet,
  TextInput,
  FlexStyle,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  topOffset$,
  bottomOffset$,
  leftOffset$,
  rightOffset$,
} from '../lib/CropSettings';
import { CONTROL_BG, CONTROL_DISABLED_FILL } from './Control';

export enum Edge {
  Top,
  Bottom,
  Left,
  Right,
}

export interface IEdgeInputProps {
  value: number;
  edge: Edge;
  onChange: (
    edge: Edge
  ) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export default function EdgeInput(props: IEdgeInputProps) {
  const { edge } = props;

  let firstIcon = 'chevron-left';
  let secondIcon = 'chevron-right';

  switch (edge) {
    case Edge.Top:
      firstIcon = 'chevron-up';
      secondIcon = 'chevron-down';
      break;
    case Edge.Bottom:
      firstIcon = 'chevron-down';
      secondIcon = 'chevron-up';
      break;
    default:
      break;
  }

  const flexDirection: FlexStyle['flexDirection'] = 'row';

  const onArrowButton = (addBy: number) => () => {
    const offset$ = [topOffset$, bottomOffset$, leftOffset$, rightOffset$][
      edge
    ];

    const newVal = offset$.value + addBy;

    if (newVal >= 0 && newVal <= 99) {
      offset$.next(newVal);
    }
  };

  let leftArrowValue = -1;
  let rightArrowValue = 1;
  let leftDisabled = props.value <= 0;
  let rightDisabled = props.value >= 99;
  if (edge === Edge.Right) {
    leftArrowValue = 1;
    rightArrowValue = -1;
    leftDisabled = props.value >= 99;
    rightDisabled = props.value <= 0;
  }

  return (
    <View
      style={{
        flexDirection,
        alignItems: 'center',
      }}
    >
      <ArrowButton
        onPress={onArrowButton(leftArrowValue)}
        disabled={leftDisabled}
      >
        <MaterialCommunityIcons
          name={firstIcon}
          size={28}
          color={
            leftDisabled ? CONTROL_DISABLED_FILL : 'rgba(255, 27, 150, 0.8)'
          }
        />
      </ArrowButton>

      <EdgeTextInput {...props} />
      <ArrowButton
        onPress={onArrowButton(rightArrowValue)}
        disabled={rightDisabled}
      >
        <MaterialCommunityIcons
          name={secondIcon}
          size={28}
          color={
            rightDisabled ? CONTROL_DISABLED_FILL : 'rgba(255, 27, 150, 0.8)'
          }
        />
      </ArrowButton>
    </View>
  );
}

interface IArrowButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

function ArrowButton({ children, onPress, disabled }: IArrowButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        paddingHorizontal: 8,
      }}
    >
      {children}
    </TouchableOpacity>
  );
}

function EdgeTextInput({ value, onChange, edge }: IEdgeInputProps) {
  const [selected, setSelected] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const textColor = getTextColor(value);
  return (
    <View
      style={{
        backgroundColor: selected ? 'rgba(255,255,255,0.25)' : CONTROL_BG,
        borderRadius: 5,
      }}
    >
      <TextInput
        contextMenuHidden
        selectTextOnFocus
        returnKeyType="done"
        keyboardType="decimal-pad"
        ref={inputRef}
        underlineColorAndroid="transparent"
        style={{
          ...StyleSheet.absoluteFillObject,
          fontSize: 14,
          color: textColor,
          fontWeight: '700',
          paddingLeft: 10,
        }}
        value={`${value}`}
        onFocus={() => {
          setSelected(true);
        }}
        onBlur={() => {
          setSelected(false);
        }}
        onChange={onChange(edge)}
      />
      <View
        style={{
          height: 32,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}
        pointerEvents="none"
      >
        <Text style={{ color: 'transparent', fontSize: 14, fontWeight: '700' }}>
          {value}
          <Text style={{ color: textColor }}>{'%'}</Text>
        </Text>
      </View>
    </View>
  );
}

function getTextColor(offset: number) {
  return offset > 0 ? 'yellow' : '#fff';
}
