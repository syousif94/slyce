import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import {
  submitting$,
  submissionError$,
  submissionCompleted$,
} from '../lib/SubmitPano';
import { useSubject } from '../lib/useSubject';
import { cancelUpload } from '../lib/SubmitPano';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export default function PostProgress() {
  const navigation = useNavigation();
  const submitting = useSubject(submitting$);
  const error = useSubject(submissionError$);
  const completed = useSubject(submissionCompleted$);
  if (!submitting) {
    return null;
  }

  let statusText = 'Uploading';

  if (error) {
    statusText = 'Uh Oh..';
  } else if (completed) {
    statusText = 'Upload Complete!';
  }

  const notUploading = error || completed;
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          marginTop: '90%',
        }}
      >
        {notUploading ? null : (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{ marginBottom: 20 }}
          />
        )}
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: '#fff',
            marginBottom: 20,
          }}
        >
          {statusText}
        </Text>
        {error ? (
          <React.Fragment>
            <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center' }}>
              {error}
            </Text>
            <LargeButton>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: '700',
                }}
              >
                Retry
              </Text>
            </LargeButton>
            <SmallButton
              onPress={() => {
                cancelUpload();
              }}
            >
              <Text style={{ marginHorizontal: 10, color: '#fff' }}>
                Cancel
              </Text>
            </SmallButton>
          </React.Fragment>
        ) : null}
        {completed ? (
          <LargeButton
            onPress={() => {
              navigation.dispatch(StackActions.popToTop());
            }}
          >
            <Text
              style={{
                marginHorizontal: 20,
                color: '#fff',
                fontSize: 17,
                fontWeight: '700',
              }}
            >
              Back to Previous
            </Text>
          </LargeButton>
        ) : null}
        {notUploading ? null : (
          <SmallButton
            onPress={() => {
              cancelUpload();
            }}
          >
            <Text style={{ marginHorizontal: 10, color: '#fff' }}>Cancel</Text>
          </SmallButton>
        )}
      </View>
    </View>
  );
}

interface ButtonProps {
  children?: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

function SmallButton({ children, style, onPress }: ButtonProps) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(100,100,100,0.5)',
        height: 32,
        borderRadius: 16,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}

function LargeButton({ children, style, onPress }: ButtonProps) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(100,100,100,0.5)',
        height: 44,
        borderRadius: 22,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}
