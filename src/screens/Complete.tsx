import BackHeader from '@/components/commons/BackHeader';
import ChevronDownArrow from '../../assets/icons/ChevronDownArrow';
import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from '@/styles/Complete/Complete.style';
import Tts from 'assets/icons/Tts';

const list = [
  {
    id: 1,
    word: '空港',
    mean: '공항',
    mean2: 'ひこう',
  },
  {
    id: 2,
    word: '空港',
    mean: '공항',
    mean2: 'ひこう',
  },
  {
    id: 3,
    word: '空港',
    mean: '공항',
    mean2: 'ひこう',
  },
  {
    id: 4,
    word: '空港',
    mean: '공항',
    mean2: 'ひこう',
  },
  {
    id: 5,
    word: '空港',
    mean: '공항',
    mean2: 'ひこう',
  },
  {
    id: 6,
    word: '空港',
    mean: '공항',
    mean2: 'ひこう',
  },
];

function Complete() {
  return (
    <View style={styles.container}>
      <BackHeader title="공항" />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.contentWrapper}>
            <View style={styles.wordWrapper}>
              <ChevronDownArrow />
              <Text style={styles.wordText}>{item.word}</Text>
              <Tts />
            </View>
            <View style={styles.meanWrapper}>
              <Text style={styles.meanText}>{item.mean}</Text>
              <View style={styles.seperator}></View>
              <Text style={styles.meanText}>{item.mean2}</Text>
            </View>
          </View>
        )}
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
