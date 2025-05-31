import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

function ChevronLeftArrow() {
  return (
    <View style={{ position: 'absolute', left: 0 }}>
      <Svg width="12" height="20" viewBox="0 0 12 20" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.53714 19.5928L0.292152 10.6788C-0.097384 10.3036 -0.097384 9.69738 0.292152 9.32117L9.53714 0.407154C10.0995 -0.135718 11.0144 -0.135718 11.5777 0.407154C12.14 0.950026 12.14 1.8311 11.5777 2.37397L3.66913 10.0005L11.5777 17.6251C12.14 18.1689 12.14 19.05 11.5777 19.5928C11.0144 20.1357 10.0995 20.1357 9.53714 19.5928"
          fill="#727384"
        />
      </Svg>
    </View>
  );
}

export default ChevronLeftArrow;
