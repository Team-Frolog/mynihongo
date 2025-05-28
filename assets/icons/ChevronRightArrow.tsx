import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  color?: string;
}

export default function ChevronRight({
  width,
  height,
  color = '#313239',
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        fill={color}
      />
    </Svg>
  );
}
