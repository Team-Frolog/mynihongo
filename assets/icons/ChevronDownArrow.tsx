import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

function ChevronDownArrow({
  width = 20,
  height = 12,
  color = '#B4B4B4',
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5928 2.46286L10.6788 11.7078C10.3036 12.0974 9.69738 12.0974 9.32117 11.7078L0.407153 2.46286C-0.135718 1.90053 -0.135718 0.985625 0.407153 0.422297C0.950025 -0.140033 1.8311 -0.140033 2.37397 0.422296L10.0005 8.33087L17.6251 0.422296C18.1689 -0.140034 19.05 -0.140034 19.5928 0.422296C20.1357 0.985624 20.1357 1.90053 19.5928 2.46286"
        fill={color}
      />
    </Svg>
  );
}

export default ChevronDownArrow;
