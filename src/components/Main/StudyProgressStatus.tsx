import { Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { styles } from '@/styles/Main/StudyProgressStatus.style';

interface Props {
  width: number;
  height: number;
  color?: string;
}

function StudyProgressStatus({ width, height, color = '#B4B4B4' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>퀴즈</Text>
      <Svg width={width} height={height} viewBox="0 0 59 100" fill="none">
        <Path
          d="M0 100L35.2361 0H44C52.2843 0 59 6.71573 59 15V85C59 93.2843 52.2843 100 44 100H0Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export default StudyProgressStatus;
