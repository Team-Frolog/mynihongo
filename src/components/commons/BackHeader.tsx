import { View, Text, TouchableOpacity } from 'react-native';
import ChevronLeftArrow from 'assets/icons/ChevronLeftArrow';
import { styles } from '@/styles/commons/Header.style';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}

function BackHeader({ title }: Props) {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleGoBack = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <ChevronLeftArrow />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default BackHeader;
