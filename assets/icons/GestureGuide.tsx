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
    <Svg width="95" height="103" viewBox="0 0 95 103" fill="none">
      <Path
        d="M27.1172 27.6954L3.99998 27.6954M3.99998 27.6954L14.3629 41.3286M3.99998 27.6954L14.3629 14.0622"
        stroke={direction === 'left' ? '#E26C3E' : '#C5C5C5'}
        strokeWidth={direction === 'left' ? '7' : '5'}
        strokeLinecap="round"
      />
      <Path
        d="M68.6099 27.6557L91.7271 27.6557M91.7271 27.6557L81.3642 14.0225M91.7271 27.6557L81.3642 41.2889"
        stroke={direction === 'right' ? '#76A452' : '#C5C5C5'}
        strokeWidth={direction === 'right' ? '7' : '5'}
        strokeLinecap="round"
      />
      <Mask
        id="mask0_828_2714"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="23"
        y="0"
        width="55"
        height="46"
      >
        <Path
          d="M27.6209 45.7924L48.2851 21.0692L68.9493 45.7924C69.9333 44.4394 71.9752 41.6596 72.2704 41.3644C72.6394 40.9954 76.6984 30.6633 77.4364 29.9252C78.1744 29.1872 71.9014 11.4751 71.1634 9.99905C70.4254 8.52303 60.0932 0.404976 58.9862 0.0359718C57.8792 -0.333032 35.739 2.24999 35.001 2.619C34.4106 2.9142 26.8829 9.38407 23.1929 12.5821L27.6209 45.7924Z"
          fill="#D9D9D9"
        />
      </Mask>
      <G mask="url(#mask0_828_2714)">
        <Circle
          cx="47.9982"
          cy="27.0553"
          r="18.2462"
          stroke={direction === 'center' ? '#C5C5C5' : circleColor}
          strokeWidth={direction === 'center' ? '5' : '7'}
        />
      </G>
      <Path
        d="M41.1704 27.3884V62.288C41.1704 64.4335 38.9837 65.8855 37.0063 65.0529L24.2771 59.6932C23.058 59.1005 18.6762 57.915 16.6228 61.4715C14.5695 65.028 17.1977 68.1893 18.0532 68.8808L40.1582 88.4352C40.8019 89.0046 41.1704 89.8228 41.1704 90.6822V97.0002C41.1704 98.657 42.5136 100 44.1704 100H75.6599C76.7317 100 77.7221 99.4284 78.258 98.5002L83.552 89.3307C92.7989 67.2804 79.6991 57.6186 71.9934 55.544L57.6322 53.2764C56.174 53.0462 55.1 51.7894 55.1 50.3131V27.3884C54.9025 25.8078 53.2032 21.4609 47.987 21.4609C42.7709 21.4609 41.2692 25.8078 41.1704 27.3884Z"
        stroke="#C5C5C5"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default GestureGuideIcon;
