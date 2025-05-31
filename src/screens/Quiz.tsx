import { View, StyleSheet, Text, Pressable } from 'react-native';
import BackHeader from '../components/commons/BackHeader';
import ProgressBar from '@/components/commons/ProgressBar';
import Tts from 'assets/icons/Tts';

function Quiz() {
  return (
    <View style={styles.container}>
      <BackHeader title="퀴즈" />
      <View style={styles.status}>
        <ProgressBar text="10 / 10" />
        <Text style={styles.statusText}>10회 연속 정답</Text>
      </View>
      <View style={quizStyles.container}>
        <Text style={quizStyles.guidText}>아래 단어의 뜻을 골라주세요</Text>
        <View style={quizStyles.wordWrapper}>
          <Text style={quizStyles.jWord}>ひこう</Text>
          <Text style={quizStyles.kanji}>飛行</Text>
          <Tts />
        </View>
      </View>
      <View style={quizStyles.buttonWrapper}>
        <Pressable style={[quizStyles.button, quizStyles.buttonLeft]}>
          <Text style={quizStyles.buttonText}>비행</Text>
        </Pressable>
        <Pressable style={[quizStyles.button, quizStyles.buttonRight]}>
          <Text style={quizStyles.buttonText}>실행</Text>
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

  status: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 18,
  },
});

const quizStyles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 35,
    paddingHorizontal: 10,

    flexDirection: 'column',
    alignItems: 'center',
    gap: 60,

    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  guidText: {
    color: '#898989',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18,
  },
  wordWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  jWord: {
    color: '#898989',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  kanji: {
    color: '#313239',
    fontSize: 60,
    fontStyle: 'normal',
    fontWeight: '700',
  },

  buttonWrapper: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: '40%',
    paddingVertical: 35,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#898989',
  },
  buttonLeft: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonRight: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  buttonText: {
    color: '#faf8f4',
    fontSize: 28,
    fontWeight: 900,
  },
});

export default Quiz;
