import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-community/async-storage';

export async function getAddress(
  coordinates: Promise<MediaLibrary.Location | undefined>
): Promise<string> {
  const coords = await coordinates;

  if (!coords) {
    return '';
  }

  let text = '';

  try {
    const key = `@address/${coords.latitude}${coords.longitude}`;

    const value = await AsyncStorage.getItem(key);

    if (value !== null && value.length) {
      return value;
    }

    const placemarks = await Location.reverseGeocodeAsync(coords);

    placemarks.find((placemark) => {
      if (placemark.city && placemark.country) {
        text = `${placemark.city}, ${placemark.country}`;
        return true;
      } else if (placemark.name) {
        text = placemark.name;
        return true;
      }
    });

    await AsyncStorage.setItem(key, text);
  } catch (error) {}

  return text;
}
