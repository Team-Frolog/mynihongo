import { View, Text } from 'react-native';
import { styles } from '@/styles/commons/ProgressBar.style';

interface Props {
  text: string;
}

function ProgressBar({ text }: Props) {
  return (
    <View style={styles.progressbar}>
      <View style={styles.progressbarInner}></View>
      <Text style={styles.progressbarText}>{text}</Text>
    </View>
  );
}

export default ProgressBar;
