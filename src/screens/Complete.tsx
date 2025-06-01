import BackHeader from '@/components/commons/BackHeader';
import ChevronDownArrow from '../../assets/icons/ChevronDownArrow';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    gap: 35,
    backgroundColor: '#fff',
  },

  list: {
    paddingBottom: 120,
    gap: 16,
  },

  contentWrapper: {
    flexDirection: 'column',

    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  wordWrapper: {
    padding: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wordText: {
    color: '#313239',
    fontSize: 36,
    fontWeight: 500,
  },
  meanWrapper: {
    position: 'relative',

    paddingVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderTopWidth: 1,
    borderColor: '#000',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    backgroundColor: '#ffdada',
  },
  meanText: {
    color: '#4f505c',
    fontSize: 20,
    fontWeight: 500,
  },
  seperator: {
    position: 'absolute',
    left: '50%',
    right: '50%',

    width: 1,
    height: 25,

    backgroundColor: '#b4b4b4',
  },

  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    padding: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: '#d9d9d9',
  },
  button: {
    paddingVertical: 25,
    paddingHorizontal: 55,

    backgroundColor: '#898989',
    borderRadius: 10,
  },
  buttonText: {
    color: '#faf8f4',
    fontSize: 24,
    fontWeight: 900,
  },
});

export default Complete;
