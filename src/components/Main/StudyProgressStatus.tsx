import { Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { styles } from '@/styles/Main/StudyProgressStatus.style';
import { ThemeStatus } from '@/types/user';

interface Props {
  width: number;
  height: number;
  status?: ThemeStatus;
}

function StudyProgressStatus({ width, height, status }: Props) {
  let color = '';
  let text = '';

  switch (status) {
    case 'quiz':
      color = '#B4B4B4';
      text = '퀴즈';
      break;
    case 'conversation':
      color = '#898989';
      text = '실전 ';
      break;
    default:
      color = '#3B3B3B';
      text = '완료';
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{text}</Text>
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
