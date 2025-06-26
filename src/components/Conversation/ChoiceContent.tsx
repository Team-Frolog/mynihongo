import React from 'react';
import { View, Image, Text } from 'react-native';
import Tts from '@/components/commons/Tts';
import { styles } from '@/styles/Conversation/Conversation.style';
import AnswerButton from '@/components/Conversation/AnswerButton';

interface Props {
  npcDialogue: string;
  userChoice: string[];
  onPress: (index: number) => void;
}

function ChoiceContent({ npcDialogue, userChoice, onPress }: Props) {
  return (
    <>
      <View>
        <Image source={require('assets/images/real-mock.png')} />
        <View>
          <View style={styles.npcTriangle} />
          <View style={styles.npcAnswer}>
            <Tts color="#FF9A9A" text={npcDialogue} />
            <View style={styles.textWrapper}>
              <Text style={styles.npcAnswerText}>{npcDialogue}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.answerWrapper}>
        <Text style={styles.answerGuide}>
          질문에 원하는 대답을 선택해주세요
        </Text>
        {userChoice.map((choice, index) => (
          <AnswerButton
            japanese={choice}
            key={index}
            onPress={() => onPress(index)}
          />
        ))}
      </View>
    </>
  );
}

export default ChoiceContent;
