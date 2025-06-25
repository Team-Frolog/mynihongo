import React from 'react';
import { View, Text, Modal } from 'react-native';
import BackHeader from '../components/commons/BackHeader';
import ProgressBar from '@/components/commons/ProgressBar';
import { styles } from '@/styles/Quiz/Quiz.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useState, useEffect, useMemo } from 'react';
import { styles as overlayStyles } from '@/styles/Quiz/Overlay.style';
import CorrectAnswerImage from '../../assets/images/CorrectAnswerImage';
import WrongAnswerImage from '../../assets/images/WrongAnswerImage';
import QuizContent from '@/components/Quiz/QuizContent';
import { wordData } from '@/data/word';
import { useWord } from '@/hooks/useWord';
import SafeAreaScreen from '@/components/commons/SafeAreaScreen';

function Quiz() {
  const route = useRoute<RouteProp<any>>();
  const themeId = route.params?.themeId;
  const words = useMemo(
    () => wordData.filter((word) => word.themeId === themeId),
    [themeId],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlayState, setOverLayState] = useState<'correct' | 'wrong' | null>(
    null,
  );
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const { updateThemeStatus } = useWord();

  useEffect(() => {
    if (overlayState) {
      const timer = setTimeout(() => {
        setOverLayState(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [overlayState]);

  useEffect(() => {
    if (currentIndex === words.length - 1) {
      return updateThemeStatus({ themeId, status: 'conversation' });
    }
  }, [currentIndex]);

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
    <SafeAreaScreen>
      <View style={styles.container}>
        <BackHeader title="퀴즈" />
        <View style={styles.status}>
          <ProgressBar
            text={`${correctCount} / ${words.length}`}
            status={(correctCount / words.length) * 100}
          />
          <Text style={styles.statusText}>{streak}회 연속 정답</Text>
        </View>
        <QuizContent
          words={words}
          currentIndex={currentIndex}
          handleAnswer={handleAnswer}
        />
      </View>
      <Modal visible={overlayState !== null} transparent animationType="fade">
        <View style={overlayStyles.container}>
          {overlayState === 'correct' && <CorrectAnswerImage />}
          {overlayState === 'wrong' && <WrongAnswerImage />}
        </View>
      </Modal>
    </SafeAreaScreen>
  );
}

export default Quiz;
