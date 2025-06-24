import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/commons/Header.style';

interface Props {
  title: string;
  children: React.ReactNode;
  onPress: () => void;
}

function ButtonHeader({ title, children, onPress }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
}

export default ButtonHeader;
