import { Platform } from 'react-native';
import { BehaviorSubject } from 'rxjs';

export enum PreviewMode {
  Full,
  Slices,
}

export const previewMode$ = new BehaviorSubject(PreviewMode.Full);
