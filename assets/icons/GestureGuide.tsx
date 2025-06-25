import React from 'react';
import { Svg, Path, Circle, G, Mask } from 'react-native-svg';
import { QuizDirection } from '@/types/quiz';

interface Props {
  direction: QuizDirection;
}

function GestureGuideIcon({ direction }: Props) {
  let circleColor = '#C5C5C5';

  if (direction === 'right') circleColor = '#76A452';
  else if (direction === 'left') circleColor = '#E26C3E';

  return (
    <Svg width="127" height="138" viewBox="0 0 127 138" fill="none">
      <Path
        d="M35.3237 37.527L3.99992 37.527M3.99992 37.527L18.0416 56M3.99992 37.527L18.0416 19.054"
        stroke={direction === 'left' ? '#E26C3E' : '#C5C5C5'}
        strokeWidth={direction === 'left' ? '7' : '5'}
        strokeLinecap="round"
      />
      <Path
        d="M91.5464 37.473L122.87 37.473M122.87 37.473L108.828 19M122.87 37.473L108.828 55.946"
        stroke={direction === 'right' ? '#76A452' : '#C5C5C5'}
        strokeWidth={direction === 'right' ? '7' : '5'}
        strokeLinecap="round"
      />
      <Mask
        id="mask0_827_2721"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="30"
        y="0"
        width="74"
        height="63"
      >
        <Path
          d="M36.0029 62.0487L64.0029 28.5487L92.0029 62.0487C93.3363 60.2154 96.1029 56.4487 96.5029 56.0487C97.0029 55.5487 102.503 41.5487 103.503 40.5487C104.503 39.5487 96.0029 15.5487 95.0029 13.5487C94.0029 11.5487 80.0029 0.548742 78.5029 0.0487418C77.0029 -0.451258 47.0029 3.04874 46.0029 3.54874C45.2029 3.94874 35.0029 12.7154 30.0029 17.0487L36.0029 62.0487Z"
          fill="#D9D9D9"
        />
      </Mask>
      <G mask="url(#mask0_827_2721)">
        <Circle
          cx="63.614"
          cy="36.6599"
          r="25.6111"
          stroke={direction === 'center' ? '#C5C5C5' : circleColor}
          strokeWidth={direction === 'center' ? '5' : '7'}
        />
      </G>
      <Path
        d="M103.444 135.5L111.791 121.043C124.32 91.1645 106.57 78.0727 96.129 75.2616L75.7706 72.0472C74.3125 71.8169 73.2385 70.5601 73.2385 69.0839V37.1108C72.9708 34.969 70.6684 29.0791 63.6004 29.0791C56.5325 29.0791 54.4978 34.969 54.3639 37.1108V86.0037C54.3639 88.1492 52.1772 89.6012 50.1998 88.7686L31.4734 80.8839C29.8216 80.0807 23.8842 78.4743 21.102 83.2934C18.3197 88.1124 21.8808 92.396 23.0401 93.3331L53.3516 120.147C53.9953 120.717 54.3639 121.535 54.3639 122.394V135.5"
        stroke="#C5C5C5"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default GestureGuideIcon;
