import BackHeader from '@/components/commons/BackHeader';
import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from '@/styles/Complete/Complete.style';
import { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { themeData } from '@/data/theme';
import { wordData } from '@/data/word';
import ListItem from '@/components/Complete/ListItem';

function Complete() {
  const route = useRoute<RouteProp<any, 'Complete'>>();
  const themeId = route.params?.themeId;

  const theme = useMemo(() => {
    return themeData.find((theme) => theme.id === themeId)!;
  }, [themeId]);

  const words = useMemo(() => {
    return wordData.filter((word) => word.themeId === themeId);
  }, [themeId]);

  const themeName = theme.name;

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
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>퀴즈</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>실전</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Complete;
