import React from 'react';
import { Svg, Path } from 'react-native-svg';

function ChevronUpArrow() {
  return (
    <Svg width="20" height="12" viewBox="0 0 20 12" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.407154 9.53713L9.32117 0.292151C9.6964 -0.0973844 10.3026 -0.0973844 10.6788 0.292151L19.5928 9.53714C20.1357 10.0995 20.1357 11.0144 19.5928 11.5777C19.05 12.14 18.1689 12.14 17.626 11.5777L9.99951 3.66913L2.37494 11.5777C1.8311 12.14 0.950025 12.14 0.407154 11.5777C-0.135718 11.0144 -0.135718 10.0995 0.407154 9.53713Z"
        fill="#B4B4B4"
      />
    </Svg>
  );
}

export default ChevronUpArrow;
