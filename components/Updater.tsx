import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
  AppState,
  AppStateStatus,
} from 'react-native';
import * as Updates from 'expo-updates';

export default function Updater() {
  const appState = useRef(AppState.currentState);
  const opacity = useRef(new Animated.Value(0));
  const translateY = useRef(new Animated.Value(0));
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fadeIn = () => {
      Animated.parallel([
        Animated.timing(
          opacity.current,
          { duration: 300, toValue: 1 },
          { useNativeDriver: true }
        ),
        Animated.timing(
          translateY.current,
          { duration: 300, toValue: -20 },
          { useNativeDriver: true }
        ),
      ]).start();
    };

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        checkForUpdate();
      }
      appState.current = nextAppState;
    };

    const checkForUpdate = async () => {
      const updateAvailable = await needsUpdate();

      if (updateAvailable) {
        setUpdate(true);
        fadeIn();
      }
    };

    const onMount = async () => {
      await checkForUpdate();
      AppState.addEventListener('change', handleAppStateChange);
    };

    onMount();

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const pointerEvents = update ? 'auto' : 'none';
  return (
    <View style={styles.container} pointerEvents="box-none">
      <Animated.View
        style={[
          styles.btnBG,
          {
            opacity: opacity.current,
            transform: [{ translateY: translateY.current }],
          },
        ]}
        pointerEvents={pointerEvents}
      >
        <TouchableOpacity
          onPress={() => {
            Updates.reloadAsync();
          }}
          style={styles.btn}
        >
          <Text style={styles.text}>Update Available</Text>
          <Text style={styles.subText}>Tap to apply</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const DEV = process.env.NODE_ENV === 'development';

async function needsUpdate() {
  if (DEV) {
    return false;
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    // });
    // return true;
  }
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      return true;
    }
  } catch (e) {
    alert(e.message);
  }
  return false;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  btnBG: {
    height: 52,
    width: 190,
    borderRadius: 26,
    backgroundColor: '#157AFC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  subText: {
    marginTop: 2,
    fontSize: 12,
    color: '#fff',
  },
});
