import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

export default function EmptyPanoView() {
  return (
    <View>
      <PanoShimmer />
      <PanoShimmer />
      <PanoShimmer />
    </View>
  );
}

function PanoShimmer() {
  const window = useWindowDimensions();
  return (
    <View>
      <ShimmerPlaceholder
        height={80}
        width={window.width - 20}
        style={{ marginLeft: 10 }}
        shimmerColors={['#222', '#333', '#222']}
      />
      <ShimmerPlaceholder
        height={20}
        width={80}
        shimmerColors={['#222', '#333', '#222']}
        style={{ marginLeft: 10, marginTop: 20 }}
      />

      <ShimmerPlaceholder
        height={15}
        width={150}
        shimmerColors={['#222', '#333', '#222']}
        style={{ marginLeft: 10, marginTop: 5 }}
      />

      <ShimmerPlaceholder
        height={15}
        width={150}
        shimmerColors={['#222', '#333', '#222']}
        style={{ marginLeft: 10, marginTop: 5 }}
      />
      <Text>Austin, TX</Text>
      <Text>Austin, TX</Text>
      <Text>Austin, TX</Text>
    </View>
  );
}
