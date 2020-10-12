import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function PanoBack() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
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
