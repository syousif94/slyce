import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function ReselectPano() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: insets.top + 10,
        left: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 9,
        paddingRight: 11,
      }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Feather name="chevron-left" size={28} color="#fff" />
    </TouchableOpacity>
  );
}
