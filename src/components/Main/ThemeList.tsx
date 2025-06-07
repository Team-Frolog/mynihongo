import { FlatList, Text, View } from 'react-native';
import ChevronRight from '../../../assets/icons/ChevronRightArrow';
import StudyProgressStatus from '@/components/Main/StudyProgressStatus';
import { styles } from '@/styles/Main/ThemeList.style';

const theme = [
  { title: '공항', hanza: '空港' },
  { title: '공항', hanza: '空港' },
  { title: '공항', hanza: '空港' },
  { title: '공항', hanza: '空港' },
  { title: '공항', hanza: '空港' },
  { title: '공항', hanza: '空港' },
];

function ThemeList() {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={theme}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.titleHanza}>{item.hanza}</Text>
          </View>
          <View style={styles.stepStatusWrapper}>
            <Text style={styles.stepStatus}>0 / 10</Text>
            <ChevronRight width={24} height={24} />
            <StudyProgressStatus width={59} height={100} />
          </View>
        </View>
      )}
      keyExtractor={(item, index) => item.title + index}
    />
  );
}

export default ThemeList;
