import React, { ReactNode, useState } from 'react';
import { Platform, Text, View, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActionBarView from './ActionBarView';
import { useSubject } from '../lib/useSubject';
import { decrementSlices, incrementSlices } from '../lib/CropSettings';
import { numberOfSlices$ } from '../lib/CropSettings';
import Control, { CONTROL_BG } from './Control';
import PanoBack from './PanoBack';
import PlusMinusControl from './PlusMinusControl';
import TrimControl from './TrimControl';
import PanoExpand from './PanoExpand';
import { CONTROL_SELECTED_BG } from './Control';
import ToggleControlStyle from './SliceToggleControlStyle';
import SaveButton from './SliceSaveButton';
import PostButton from './SlicePostButton';

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
        <View style={{ flexDirection: 'row' }} pointerEvents="box-none">
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
                  ? CONTROL_SELECTED_BG
                  : CONTROL_BG,
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
                  ? CONTROL_SELECTED_BG
                  : CONTROL_BG,
            }}
          />
        </View>
        {Platform.OS === 'ios' ? <PanoBack /> : null}
      </NavBar>
    </ActionBarView>
  );
}

const SlicesManipulator = () => {
  const slices = useSubject(numberOfSlices$);

  return (
    <View style={{ marginBottom: 30 }} pointerEvents="box-none">
      <View
        style={{
          justifyContent: 'center',
          marginBottom: 28,
          flexDirection: 'row',
        }}
      >
        <SaveButton />
        {Platform.OS === 'ios' ? (
          <React.Fragment>
            <View style={{ width: 20 }} />
          </React.Fragment>
        ) : null}

        <PostButton />
      </View>

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
      pointerEvents="box-none"
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
