import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import Tts from '@/components/commons/Tts';
import { styles } from '@/styles/Conversation/Conversation.style';
import {
  conversationImages,
  ConversationImageKey,
} from '../../../assets/images/public/conversation';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  npcQuestion: string;
  npcQuestionKorean: string;
  npcDialogue: string;
  npcKorean: string;
  userDialogue: string;
  userKorean: string;
  responseId: ConversationImageKey;
}

function ResponseContent({
  npcQuestion,
  npcQuestionKorean,
  npcDialogue,
  npcKorean,
  userDialogue,
  userKorean,
  responseId,
}: Props) {
  // 매핑 객체에서 이미지 가져오기
  const imageSource = conversationImages[responseId];

  return (
    <>
      <Image source={imageSource} style={styles.image} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.dialogueWrapper}>
          <View style={{ marginLeft: 48 }}>
            <View style={styles.npcTriangle} />
            <View style={[styles.npcAnswer, { width: '100%' }]}>
              <Tts color="#FF9A9A" text={npcQuestion} />
              <View style={styles.textWrapper}>
                <Text style={styles.npcAnswerText}>{npcQuestion}</Text>
                <Text style={styles.koreanText}>{npcQuestionKorean}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.answerWrapper, { width: '90%' }]}>
            <View style={[styles.answerButton]}>
              <Tts text={userDialogue} />
              <View style={styles.textWrapper}>
                <Text style={styles.answerText}>{userDialogue}</Text>
                <Text style={styles.koreanText}>{userKorean}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginLeft: 48 }}>
            <View style={styles.npcTriangle} />
            <View style={[styles.npcAnswer, { width: '100%' }]}>
              <Tts color="#FF9A9A" text={npcDialogue} />
              <View style={styles.textWrapper}>
                <Text style={styles.npcAnswerText}>{npcDialogue}</Text>
                <Text style={styles.koreanText}>{npcKorean}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginLeft: 48 }}>
            <View style={styles.npcTriangle} />
            <View style={[styles.npcAnswer, { width: '100%' }]}>
              <Tts color="#FF9A9A" text={npcDialogue} />
              <View style={styles.textWrapper}>
                <Text style={styles.npcAnswerText}>{npcDialogue}</Text>
                <Text style={styles.koreanText}>{npcKorean}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.00)', '#FFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.scrollable}
      ></LinearGradient>
    </>
  );
}

export default ResponseContent;
