import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function ReselectPano() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: insets.top + 10,
        right: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
      }}
      onPress={() => {
        navigation.goBack();
        // selectImage(null)
      }}
    >
      <MaterialCommunityIcons name="panorama" size={28} color="#fff" />
    </TouchableOpacity>
  );
}
