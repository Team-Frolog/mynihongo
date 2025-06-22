import React from 'react';
import { View, Text, Modal } from 'react-native';
import BackHeader from '../components/commons/BackHeader';
import ProgressBar from '@/components/commons/ProgressBar';
import Tts from 'assets/icons/Tts';
import { styles } from '@/styles/Quiz/Quiz.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { wordData } from '@/data/word';
import { useState, useEffect, useMemo } from 'react';
import { styles as overlayStyles } from '@/styles/Quiz/Overlay.style';
import CorrectAnswerImage from '../../assets/images/CorrectAnswerImage';
import WrongAnswerImage from '../../assets/images/WrongAnswerImage';
import PressButton from '@/components/commons/PressButton';

function Quiz() {
  const route = useRoute<RouteProp<any>>();
  const themeId = route.params?.themeId;
  const words = useMemo(
    () => wordData.filter((word) => word.themeId === themeId),
    [],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlayState, setOverLayState] = useState<'correct' | 'wrong' | null>(
    null,
  );
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (overlayState) {
      const timer = setTimeout(() => {
        setOverLayState(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [overlayState]);

  const handleGenerateRandomAnswer = (answers: [string, string][]) => {
    return Math.random() < 0.5 ? answers : answers.reverse();
  };

  const handleAnswer = (answer: string) => {
    if (answer === 'correct') {
      setOverLayState('correct');
      setCorrectCount((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setOverLayState('wrong');
      setStreak(0);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      <View style={styles.container}>
        <BackHeader title="퀴즈" />
        <View style={styles.status}>
          <ProgressBar
            text={`${correctCount} / ${words.length}`}
            status={(correctCount / words.length) * 100}
          />
          <Text style={styles.statusText}>{streak}회 연속 정답</Text>
        </View>
        <View style={styles.quizContainer}>
          <Text style={styles.guideText}>아래 단어의 뜻을 골라주세요</Text>
          <View style={styles.wordWrapper}>
            <Text style={styles.jWord}>{words[currentIndex].hiragana}</Text>
            <Text style={styles.kanji}>{words[currentIndex].kanji}</Text>
            <Tts />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          {handleGenerateRandomAnswer(
            Object.entries(words[currentIndex].choices),
          ).map(([key, value], index) => {
            return (
              <PressButton
                key={key}
                extraStyles={[
                  styles.button,
                  index % 2 === 0 ? styles.buttonLeft : styles.buttonRight,
                ]}
                onPress={() => handleAnswer(key)}
              >
                <Text style={styles.buttonText}>{value}</Text>
              </PressButton>
            );
          })}
        </View>
      </View>
      <Modal visible={overlayState !== null} transparent animationType="fade">
        <View style={overlayStyles.container}>
          {overlayState === 'correct' && <CorrectAnswerImage />}
          {overlayState === 'wrong' && <WrongAnswerImage />}
        </View>
      </Modal>
    </>
  );
}

export default Quiz;
