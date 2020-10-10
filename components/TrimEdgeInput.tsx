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

  const firstIcon = 'chevron-left';
  const secondIcon = 'chevron-right';
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

  return (
    <View
      style={{
        flexDirection,
        alignItems: 'center',
      }}
    >
      <ArrowButton onPress={onArrowButton(-1)}>
        <MaterialCommunityIcons name={firstIcon} size={28} color="#fff" />
      </ArrowButton>

      <EdgeTextInput {...props} />
      <ArrowButton onPress={onArrowButton(1)}>
        <MaterialCommunityIcons name={secondIcon} size={28} color="#fff" />
      </ArrowButton>
    </View>
  );
}

interface IArrowButtonProps {
  children: ReactNode;
  onPress: () => void;
}

function ArrowButton({ children, onPress }: IArrowButtonProps) {
  return (
    <TouchableOpacity
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
        backgroundColor: selected
          ? 'rgba(255,255,255,0.25)'
          : 'rgba(255,255,255,0.1)',
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
