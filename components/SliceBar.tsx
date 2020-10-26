import React, { ReactNode, useState } from 'react';
import { Platform, Text, View, ViewStyle } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ActionBarView from './ActionBarView';
import { useSubject } from '../lib/useSubject';
import { decrementSlices, incrementSlices } from '../lib/CropSettings';
import {
  numberOfSlices$,
  getRatio,
  topOffset$,
  bottomOffset$,
  rightOffset$,
  leftOffset$,
} from '../lib/CropSettings';
import Control, { CONTROL_BG } from './Control';
import PanoBack from './PanoBack';
import PlusMinusControl from './PlusMinusControl';
import TrimControl from './TrimControl';
import PanoExpand from './PanoExpand';
import sliceImage from '../lib/SliceImage';
import { CONTROL_SELECTED_BG } from './Control';
import { selectedImage$ } from '../lib/SelectedImage';

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

function NextButton() {
  const selectedImage = useSubject(selectedImage$);

  const topOffset = useSubject(topOffset$);
  const bottomOffset = useSubject(bottomOffset$);
  const leftOffset = useSubject(leftOffset$);
  const rightOffset = useSubject(rightOffset$);
  const slices = useSubject(numberOfSlices$);
  const ratio = getRatio(
    selectedImage!,
    slices,
    topOffset,
    bottomOffset,
    leftOffset,
    rightOffset
  );

  const invalidRatio = ratio > 1.91 || ratio < 0.8;

  return (
    <View style={{ alignItems: 'center', marginBottom: 35 }}>
      <Control
        touchableStyle={{
          ...ToggleControlStyle,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
        onPress={() => {
          sliceImage();
        }}
      >
        <MaterialIcons name="photo-camera" size={20} color="#fff" />
        <Text
          style={{
            color: invalidRatio ? 'red' : 'yellow',
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
