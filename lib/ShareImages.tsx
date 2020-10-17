import * as Linking from 'expo-linking';

export async function openInstagram() {
  try {
    await Linking.openURL('instagram://');
  } catch (err) {
    alert(err);
  }
}
