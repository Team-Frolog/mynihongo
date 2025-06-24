import BackHeader from '@/components/commons/BackHeader';
import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from '@/styles/Complete/Complete.style';
import { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { themeData } from '@/data/theme';
import { wordData } from '@/data/word';
import ListItem from '@/components/Complete/ListItem';
import PressButton from '@/components/commons/PressButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';

function Complete() {
  const route = useRoute<RouteProp<any, 'Complete'>>();
  const themeId = route.params?.themeId;
  const navigation = useNavigation<NavigationProp<any>>();

  const theme = useMemo(() => {
    return themeData.find((theme) => theme.id === themeId)!;
  }, [themeId]);

  const words = useMemo(() => {
    return wordData.filter((word) => word.themeId === themeId);
  }, [themeId]);

  const themeName = theme.name;

  const handlePressButton = (type: 'quiz' | 'conversation') => {
    if (type === 'quiz') {
      navigation.navigate('Quiz', { themeId });
    } else {
      navigation.navigate('Conversation', { themeId });
    }
  };

  return (
    <View style={styles.container}>
      <BackHeader title={themeName} />
      <FlatList
        contentContainerStyle={styles.list}
        data={words}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ListItem item={item} />}
      />
      <View style={styles.buttonWrapper}>
        <PressButton
          extraStyles={styles.button}
          onPress={() => handlePressButton('quiz')}
        >
          <Text style={styles.buttonText}>퀴즈</Text>
        </PressButton>
        <PressButton
          extraStyles={styles.button}
          onPress={() => handlePressButton('conversation')}
        >
          <Text style={styles.buttonText}>실전</Text>
        </PressButton>
      </View>
    </View>
  );
}

export default Complete;
