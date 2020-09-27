import React from 'react';
import { selectedImage$ } from '../lib/SelectedImage';
import { useSubject } from '../lib/useSubject';
import SliceBar from './SliceBar';

export default function ActionBar() {
  const selectedImage = useSubject(selectedImage$);
  if (!selectedImage) {
    return null;
  }
  return <SliceBar />;
}
