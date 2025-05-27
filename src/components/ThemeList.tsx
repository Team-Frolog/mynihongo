import { FlatList, StyleSheet, Text, View } from 'react-native';
import ChevronRight from '../../assets/icons/ChevronRightArrow';
import StudyProgressStatus from '@/components/Main/StudyProgressStatus';

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

const styles = StyleSheet.create({
  list: {
    width: '100%',

    flexDirection: 'column',
    gap: 16,
  },
  listItem: {
    width: '100%',
    height: 100,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',

    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#313239',
    borderRadius: 15,

    backgroundColor: '#fff',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  titleHanza: {
    fontSize: 24,
    fontWeight: 700,
    color: '#C0C0C0',
  },
  stepStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepStatus: {
    color: '#313239',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 18,
  },
});

export default ThemeList;
