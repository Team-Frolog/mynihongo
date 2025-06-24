import React from 'react';
import { View, Image, Text } from 'react-native';
import Tts from 'assets/icons/Tts';
import { styles } from '@/styles/Conversation/Conversation.style';

interface Props {
  npcDialogue: string;
  npcKorean: string;
  userDialogue: string;
  userKorean: string;
}

function ResponseContent({
  npcDialogue,
  npcKorean,
  userDialogue,
  userKorean,
}: Props) {
  return (
    <>
      <View>
        <Image source={require('assets/images/real-mock.png')} />
        <View>
          <View style={styles.npcTriangle} />
          <View style={styles.npcAnswer}>
            <Tts color="#FF9A9A" />
            <View style={styles.textWrapper}>
              <Text style={styles.npcAnswerText}>{npcDialogue}</Text>
              <Text style={styles.koreanText}>{npcKorean}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.answerWrapper, { bottom: '20%' }]}>
        <View style={[styles.answerButton]}>
          <Tts />
          <View style={styles.textWrapper}>
            <Text style={styles.answerText}>{userDialogue}</Text>
            <Text style={styles.koreanText}>{userKorean}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default ResponseContent;
