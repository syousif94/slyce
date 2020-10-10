import { BehaviorSubject } from 'rxjs';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

export interface IImageSource {
  height: number;
  width: number;
  uri: string;
}

export const selectedImage$ = new BehaviorSubject<IImageSource | null>(null);

export async function getLibraryPermissions() {
  if (Platform.OS !== 'web') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      throw new Error('Permission Required');
    }
  }
}

export async function selectImage(asset: IImageSource | null) {
  selectedImage$.next(asset);
}

export async function openPicker() {
  try {
    await getLibraryPermissions();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      selectedImage$.next(result);
    }
  } catch (E) {
    console.log(E);
  }
}
