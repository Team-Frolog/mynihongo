import { View, Image, Text } from 'react-native';
import BackHeader from '@/components/commons/BackHeader';
import Tts from 'assets/icons/Tts';
import { styles } from '@/styles/Conversation/Conversation.style';
import PressButton from '@/components/commons/PressButton';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMemo } from 'react';
import { conversationData } from '@/data/conversation';

function Conversation() {
  const route = useRoute<RouteProp<any>>();
  const themeId = route.params?.themeId;
  console.log(themeId);

  const conversations = useMemo(() => {
    return conversationData.find((data) => data.id.split('_')[0] === themeId);
  }, [themeId]);

  console.log(conversations);

  return (
    <View style={styles.container}>
      <BackHeader title="실전" />
      <View style={styles.realContainer}>
        <View>
          <Image source={require('assets/images/real-mock.png')} />
          <View>
            <View style={styles.npcTriangle} />
            <View style={styles.npcAnswer}>
              <Tts color="#FF9A9A" />
              <View style={styles.textWrapper}>
                <Text style={styles.npcAnswerText}>
                  飛行時間はいつからなの？
                </Text>
                <Text style={styles.koreanText}>커피와 케이크 주세요.</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.answerWrapper}>
          <Text style={styles.answerGuide}>
            질문에 원하는 대답을 선택해주세요
          </Text>
          <PressButton extraStyles={[styles.answerButton]} onPress={() => {}}>
            <Tts />
            <View style={styles.textWrapper}>
              <Text style={styles.answerText}>延着になった...</Text>
              <Text style={styles.koreanText}>커피와 케이크 주세요.</Text>
            </View>
          </PressButton>
          <PressButton extraStyles={[styles.answerButton]} onPress={() => {}}>
            <Tts />
            <View style={styles.textWrapper}>
              <Text style={styles.answerText}>1時間後だよ</Text>
              <Text style={styles.koreanText}>커피와 케이크 주세요.</Text>
            </View>
          </PressButton>
        </View>
      </View>
    </View>
  );
}

export default Conversation;
