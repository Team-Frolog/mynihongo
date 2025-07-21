import React from 'react';
import { View, Image, Text } from 'react-native';
import Tts from '@/components/commons/Tts';
import { styles } from '@/styles/Conversation/Conversation.style';
import AnswerButton from '@/components/Conversation/AnswerButton';
import {
  conversationImages,
  ConversationImageKey,
} from '../../../assets/images/public/conversation';

interface Props {
  npcDialogue: string;
  userChoice: string[];
  choiceId: ConversationImageKey;
  onPress: (index: number) => void;
}

function ChoiceContent({ npcDialogue, userChoice, choiceId, onPress }: Props) {
  // 매핑 객체에서 이미지 가져오기
  console.log('choiceId', choiceId);
  const imageSource = conversationImages[choiceId];

  return (
    <>
      <View>
        <Image source={imageSource} style={styles.image} />
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
      <View
        style={[
          styles.answerWrapper,
          { position: 'absolute', bottom: '13%', left: 0, right: 0 },
        ]}
      >
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
