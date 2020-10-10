import React, { ReactNode, useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActionBarView from './ActionBarView';
import { useSubject } from '../lib/useSubject';
import { decrementSlices, incrementSlices } from '../lib/CropSettings';
import { numberOfSlices$ } from '../lib/CropSettings';
import Control from './Control';
import ReselectPano from './ReselectPano';
import PlusMinusControl from './PlusMinusControl';
import TrimControl from './TrimControl';

enum EditorState {
  Slice,
  Trim,
}

export default function SliceBar() {
  const [editorState, setEditorState] = useState(EditorState.Trim);
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
      <BottomBar>
        <ReselectPano />
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
        <ExportControl />
      </BottomBar>
    </ActionBarView>
  );
}

function ExportControl() {
  return (
    <Control
      touchableStyle={{
        ...ToggleControlStyle,
      }}
    >
      <MaterialCommunityIcons name="share" size={20} color="#fff" />
      <Text
        style={{
          fontSize: 12,
          fontWeight: '700',
          color: '#fff',
          marginLeft: 10,
        }}
      >
        EXPORT
      </Text>
    </Control>
  );
}

const SlicesManipulator = () => {
  const slices = useSubject(numberOfSlices$);

  return (
    <View style={{ marginBottom: 40 }} pointerEvents="box-none">
      <PlusMinusControl
        currentValue={slices}
        disableDecrement={slices <= 2}
        onIncrement={incrementSlices}
        onDecrement={decrementSlices}
      />
    </View>
  );
};

const BottomBar = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingHorizontal: 20,
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
  paddingVertical: 8,
  paddingHorizontal: 12,
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
          marginLeft: 10,
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
          marginLeft: 10,
        }}
      >
        TRIM
      </Text>
    </Control>
  );
};
