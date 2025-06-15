import { FlatList } from 'react-native';
import { styles } from '@/styles/Main/ThemeList.style';
import { themeData } from '@/data/theme';
import { useUser } from '@/hooks/useUser';
import ThemeListItem from './ThemeListItem';

function ThemeList() {
  const { userInfo } = useUser();
  const themeStatus = userInfo?.themeStatus;

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={themeData}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        const targetThemeData = themeStatus?.find(
          (theme) => theme.themeName === item.id,
        )!;

        const status = targetThemeData?.status;
        const words = targetThemeData?.words;

        return <ThemeListItem item={item} status={status} words={words} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ThemeList;
