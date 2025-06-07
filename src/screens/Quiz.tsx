import { View, Text, Pressable } from 'react-native';
import BackHeader from '../components/commons/BackHeader';
import ProgressBar from '@/components/commons/ProgressBar';
import Tts from 'assets/icons/Tts';
import { styles } from '@/styles/Quiz/Quiz.style';

function Quiz() {
  return (
    <View style={styles.container}>
      <BackHeader title="퀴즈" />
      <View style={styles.status}>
        <ProgressBar text="10 / 10" />
        <Text style={styles.statusText}>10회 연속 정답</Text>
      </View>
      <View style={styles.quizContainer}>
        <Text style={styles.guideText}>아래 단어의 뜻을 골라주세요</Text>
        <View style={styles.wordWrapper}>
          <Text style={styles.jWord}>ひこう</Text>
          <Text style={styles.kanji}>飛行</Text>
          <Tts />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable style={[styles.button, styles.buttonLeft]}>
          <Text style={styles.buttonText}>비행</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.buttonRight]}>
          <Text style={styles.buttonText}>실행</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Quiz;
