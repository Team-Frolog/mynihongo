import { View, Image, Text, Pressable } from 'react-native';
import BackHeader from '@/components/commons/BackHeader';
import Tts from 'assets/icons/Tts';
import { styles } from '@/styles/Real/Real.style';

function Conversation() {
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
              <View style={styles.npcAnswerTextWrapper}>
                <Text style={styles.npcAnswerKanjiHiragana}>
                  あんぎょうしご
                </Text>
                <Text style={styles.npcAnswerText}>
                  飛行時間はいつからなの？
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.answerWrapper}>
          <Text style={styles.answerGuide}>
            질문에 원하는 대답을 선택해주세요
          </Text>
          <Pressable style={styles.answerButton}>
            <Tts />
            <View style={styles.answerTextWrapper}>
              <Text style={styles.npcAnswerKanjiHiragana}>あんぎょうしご</Text>
              <Text style={styles.answerText}>延着になった...</Text>
            </View>
          </Pressable>
          <Pressable style={styles.answerButton}>
            <Tts />
            <View style={styles.answerTextWrapper}>
              <Text style={styles.npcAnswerKanjiHiragana}>あんぎょうしご</Text>
              <Text style={styles.answerText}>1時間後だよ</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Conversation;
