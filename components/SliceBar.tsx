import React, { ReactNode, useState } from 'react';
import { Platform, Text, View, ViewStyle } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ActionBarView from './ActionBarView';
import { useSubject } from '../lib/useSubject';
import { decrementSlices, incrementSlices } from '../lib/CropSettings';
import { numberOfSlices$ } from '../lib/CropSettings';
import Control from './Control';
import PanoBack from './PanoBack';
import PlusMinusControl from './PlusMinusControl';
import TrimControl from './TrimControl';
import PanoExpand from './PanoExpand';

enum EditorState {
  Slice,
  Trim,
}

export default function SliceBar() {
  const [editorState, setEditorState] = useState(EditorState.Slice);
  return (
    <ActionBarView>
      {(() => {
        switch (editorState) {
          case EditorState.Slice:
            return <SlicesManipulator />;
          case EditorState.Trim:
            return <TrimControl />;
        }
      })()}
      <NavBar>
        {Platform.OS === 'web' ? <PanoBack /> : <PanoExpand />}
        <View style={{ flexDirection: 'row' }}>
          <TrimToggle
            disabled={editorState == EditorState.Trim}
            onToggle={() => {
              setEditorState(EditorState.Trim);
            }}
            controlStyle={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              marginRight: 3,
              backgroundColor:
                editorState == EditorState.Trim
                  ? 'rgba(255,255,255,0.25)'
                  : 'rgba(255,255,255,0.1)',
            }}
          />
          <SliceToggle
            disabled={editorState == EditorState.Slice}
            onToggle={() => {
              setEditorState(EditorState.Slice);
            }}
            controlStyle={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor:
                editorState == EditorState.Slice
                  ? 'rgba(255,255,255,0.25)'
                  : 'rgba(255,255,255,0.1)',
            }}
          />
        </View>
        {Platform.OS === 'ios' ? <PanoBack /> : null}
      </NavBar>
    </ActionBarView>
  );
}

function NextButton() {
  return (
    <View style={{ alignItems: 'center', marginBottom: 35 }}>
      <Control
        touchableStyle={{
          ...ToggleControlStyle,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <MaterialIcons name="photo-camera" size={20} color="#fff" />
        <Text
          style={{
            color: 'yellow',
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 10,
          }}
        >
          SAVE PHOTOS
        </Text>
      </Control>
    </View>
  );
}

const SlicesManipulator = () => {
  const slices = useSubject(numberOfSlices$);

  return (
    <View style={{ marginBottom: 40 }} pointerEvents="box-none">
      <NextButton />
      <PlusMinusControl
        currentValue={slices}
        disableDecrement={slices <= 2}
        onIncrement={incrementSlices}
        onDecrement={decrementSlices}
      />
    </View>
  );
};

const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
      }}
    >
      {children}
    </View>
  );
};

interface IToggleProps {
  onToggle: () => void;
  controlStyle?: ViewStyle;
  disabled?: boolean;
}

const ToggleControlStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 4,
  paddingHorizontal: 10,
};

const SliceToggle = ({ onToggle, controlStyle, disabled }: IToggleProps) => {
  return (
    <Control
      touchableStyle={{ ...ToggleControlStyle, ...controlStyle }}
      onPress={onToggle}
      disabled={disabled}
    >
      <MaterialCommunityIcons
        name="scissors-cutting"
        size={20}
        color="#fff"
        style={{ transform: [{ rotate: '45deg' }, { translateY: -2 }] }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: '700',
          color: '#fff',
          marginLeft: 8,
        }}
      >
        SLICE
      </Text>
    </Control>
  );
};

const TrimToggle = ({ onToggle, controlStyle, disabled }: IToggleProps) => {
  return (
    <Control
      touchableStyle={{ ...ToggleControlStyle, ...controlStyle }}
      onPress={onToggle}
      disabled={disabled}
    >
      <MaterialCommunityIcons name="aspect-ratio" size={20} color="#fff" />
      <Text
        style={{
          fontSize: 12,
          fontWeight: '700',
          color: '#fff',
          marginLeft: 8,
        }}
      >
        CROP
      </Text>
    </Control>
  );
};
