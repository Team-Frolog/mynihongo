import { View, Text } from 'react-native';
import { styles } from '@/styles/commons/ProgressBar.style';

interface Props {
  text: string;
  status: number;
}

function ProgressBar({ text, status }: Props) {
  return (
    <View style={styles.progressbar}>
      <View style={[styles.progressbarInner, { width: `${status}%` }]}></View>
      <Text style={styles.progressbarText}>{text}</Text>
    </View>
  );
}

export default ProgressBar;
