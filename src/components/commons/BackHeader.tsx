import { View, Text } from 'react-native';
import ChevronLeftArrow from 'assets/icons/ChevronLeftArrow';
import { styles } from '@/styles/commons/BackHeader.style';

interface Props {
  title: string;
}

function BackHeader({ title }: Props) {
  return (
    <View style={styles.header}>
      <ChevronLeftArrow />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default BackHeader;
