import { FlatList, Text, View } from 'react-native';
import ChevronRight from '../../../assets/icons/ChevronRightArrow';
import StudyProgressStatus from '@/components/Main/StudyProgressStatus';
import { styles } from '@/styles/Main/ThemeList.style';
import { themeData } from '@/data/theme';
import { useUserStore } from '@/stores/useUserStore';

function ThemeList() {
  const themeStatus = useUserStore((state) => state.userInfo?.themeStatus);

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

        const listItemStyle = {
          borderRightWidth: status ? 0 : 1,
          paddingRight: status ? 0 : 15,
        };

        return (
          <View style={[styles.listItem, listItemStyle]}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.titleHanza}>{item.japaneseName}</Text>
            </View>
            <View style={styles.stepStatusWrapper}>
              <Text style={styles.stepStatus}>{words ? words : 0} / 10</Text>
              <ChevronRight width={24} height={24} />
              {status && (
                <StudyProgressStatus status={status} width={59} height={100} />
              )}
            </View>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ThemeList;
