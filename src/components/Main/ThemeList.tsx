import { FlatList } from 'react-native';
import { styles } from '@/styles/Main/ThemeList.style';
import { themeData } from '@/data/theme';
import { useUser } from '@/hooks/useUser';
import ThemeListItem from './ThemeListItem';
import { View, Text } from 'react-native';
import ChevronDownArrow from 'assets/icons/ChevronDownArrow';

function ThemeList() {
  const { userInfo } = useUser();
  const themeStatus = userInfo?.themeStatus;

  return (
    <View style={styles.container}>
      <View style={styles.filterWrapper}>
        <Text>전부 보기</Text>
        <ChevronDownArrow width={11} height={6} color="#666" />
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={themeData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const targetThemeData = themeStatus?.find(
            (theme) => theme.themeId === item.id,
          );
          const status = targetThemeData?.status;
          const words = targetThemeData?.words;

          return <ThemeListItem item={item} status={status} words={words} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ThemeList;
