import React from 'react';
import { Svg, Path, Circle } from 'react-native-svg';
import { QuizDirection } from '@/types/quiz';

interface Props {
  direction: QuizDirection;
}

function GestureGuideIcon({ direction }: Props) {
  let circleColor = '#C5C5C5';

  if (direction === 'right') circleColor = '#76A452';
  else if (direction === 'left') circleColor = '#E26C3E';

  return (
    <Svg width="126" height="91" viewBox="0 0 126 91" fill="none">
      <Circle
        cx="63.4317"
        cy="28.1111"
        r="25.6111"
        stroke={circleColor}
        strokeWidth="5"
      />
      <Path
        d="M62.8447 23.0598C55.37 30.4584 44.55 41.1338 37.3193 48.1746C35.1564 50.2806 37.2004 55.4188 40.2193 55.4188H90.2777C92.8983 55.4188 94.2592 52.2947 92.4744 50.3757L67.1522 23.1496C65.9985 21.9092 64.0486 21.8681 62.8447 23.0598Z"
        fill="white"
      />
      <Path
        d="M54.3605 28.1113V77.0042C54.3605 79.1497 52.1737 80.6017 50.1963 79.7691L31.47 71.8843C29.8182 71.0812 23.8808 69.4748 21.0985 74.2939C18.3163 79.1129 21.8774 83.3965 23.0367 84.3335L53.3482 111.148C53.9919 111.717 54.3605 112.535 54.3605 113.395V123.5C54.3605 125.157 55.7037 126.5 57.3605 126.5H101.709C102.78 126.5 103.771 125.928 104.307 125L111.787 112.043C124.317 82.165 106.567 69.0732 96.1256 66.2621L75.7672 63.0476C74.3091 62.8174 73.2351 61.5606 73.2351 60.0844V28.1113C72.9674 25.9695 70.665 20.0796 63.597 20.0796C56.5291 20.0796 54.4944 25.9695 54.3605 28.1113Z"
        fill="white"
        stroke="#C5C5C5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <Path
        d="M91.5425 28.1112H122.866M122.866 28.1112L108.825 9.63818M122.866 28.1112L108.825 46.5842"
        stroke={direction === 'right' ? '#76A452' : '#C5C5C5'}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <Path
        d="M35.3206 28.111L3.99675 28.111M3.99675 28.111L18.0385 46.584M3.99675 28.111L18.0385 9.63795"
        stroke={direction === 'left' ? '#E26C3E' : '#C5C5C5'}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default GestureGuideIcon;
