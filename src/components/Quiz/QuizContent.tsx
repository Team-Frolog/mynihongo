import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/styles/Quiz/Quiz.style';
import Tts from 'assets/icons/Tts';
import PressButton from '@/components/commons/PressButton';
import { Word } from '@/data/word';

interface Props {
  words: Word[];
  currentIndex: number;
  handleAnswer: (answer: string) => void;
}

function QuizContent({ words, currentIndex, handleAnswer }: Props) {
  const handleGenerateRandomAnswer = (answers: [string, string][]) => {
    return Math.random() < 0.5 ? answers : answers.reverse();
  };

  return (
    <>
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
    </>
  );
}

export default QuizContent;
