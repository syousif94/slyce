import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ImageEditor from './components/ImageEditor';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import createSharedElementStackNavigator from 'react-navigation-shared-element/build/createSharedElementStackNavigator';
import HomeScreen from './components/HomeScreen';
import ImagePreview from './components/ImagePreview';
import Updater from './components/Updater';

enableScreens();

export type RootStackParamList = {
  Slyce: undefined;
  'Editor - Slyce': { id: string };
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();
const Modal = createSharedElementStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Slyce" component={HomeScreen} />
      <Stack.Screen
        name="Editor - Slyce"
        component={ImageEditor}
        sharedElements={(route, otherRoute, showing) => {
          const { id } = route.params;
          return [id];
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Modal.Navigator mode="modal" headerMode="none">
            <Modal.Screen name="Main" component={MainStack} />
            <MainStack />
            <Modal.Screen component={ImagePreview} name="Preview" />
          </Modal.Navigator>
        </NavigationContainer>
        <Updater />
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
