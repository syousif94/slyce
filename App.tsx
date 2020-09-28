import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ImagePreview from './components/ImagePreview';
import PanoList from './components/PanoList';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import createSharedElementStackNavigator from 'react-navigation-shared-element/build/createSharedElementStackNavigator';

enableScreens();

export type RootStackParamList = {
  Main: undefined;
  Splitter: { id: string };
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={PanoList} />
            <Stack.Screen
              name="Splitter"
              component={ImagePreview}
              sharedElements={(route, otherRoute, showing) => {
                const { id } = route.params;
                return [id];
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
