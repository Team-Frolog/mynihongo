import { View, Text, TouchableOpacity } from 'react-native';
import ChevronLeftArrow from 'assets/icons/ChevronLeftArrow';
import { styles } from '@/styles/commons/BackHeader.style';
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
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <ChevronLeftArrow />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default BackHeader;
