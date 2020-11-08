import React from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSubject } from '../lib/useSubject';
import {
  topOffset$,
  bottomOffset$,
  leftOffset$,
  rightOffset$,
} from '../lib/CropSettings';
import EdgeInput, { Edge } from './TrimEdgeInput';

export default function TrimControl() {
  const topOffset = useSubject(topOffset$);
  const bottomOffset = useSubject(bottomOffset$);
  const leftOffset = useSubject(leftOffset$);
  const rightOffset = useSubject(rightOffset$);

  const offsetArr = [topOffset, bottomOffset, leftOffset, rightOffset];

  const onChange = (edge: Edge) => (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const offset$ = [topOffset$, bottomOffset$, leftOffset$, rightOffset$][
      edge
    ];

    offset$.next(Number(e.nativeEvent.text));
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      pointerEvents="box-none"
      enabled={Platform.OS === 'ios'}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20,
        }}
        pointerEvents="box-none"
      >
        <EdgeInput
          value={offsetArr[Edge.Top]}
          edge={Edge.Top}
          onChange={onChange}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: '2%',
          }}
          pointerEvents="box-none"
        >
          <EdgeInput
            value={offsetArr[Edge.Left]}
            edge={Edge.Left}
            onChange={onChange}
          />
          <EdgeInput
            value={offsetArr[Edge.Right]}
            edge={Edge.Right}
            onChange={onChange}
          />
        </View>
        <EdgeInput
          value={offsetArr[Edge.Bottom]}
          edge={Edge.Bottom}
          onChange={onChange}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
