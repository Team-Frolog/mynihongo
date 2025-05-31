import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import BackHeader from '@/components/commons/BackHeader';
import Tts from 'assets/icons/Tts';

function Real() {
  return (
    <View style={styles.container}>
      <BackHeader title="실전" />
      <View style={realStyles.container}>
        <View>
          <Image source={require('assets/images/real-mock.png')} />
          <View>
            <View style={realStyles.npcTriangle} />
            <View style={realStyles.npcAnswer}>
              <Tts color="#FF9A9A" />
              <View style={realStyles.npcAnswerTextWrapper}>
                <Text style={realStyles.npcAnswerKanjiHiragana}>
                  あんぎょうしご
                </Text>
                <Text style={realStyles.npcAnswerText}>
                  飛行時間はいつからなの？
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={realStyles.answerWrapper}>
          <Text style={realStyles.answerGuide}>
            질문에 원하는 대답을 선택해주세요
          </Text>
          <Pressable style={realStyles.answerButton}>
            <Tts />
            <View style={realStyles.answerTextWrapper}>
              <Text style={realStyles.npcAnswerKanjiHiragana}>
                あんぎょうしご
              </Text>
              <Text style={realStyles.answerText}>延着になった...</Text>
            </View>
          </Pressable>
          <Pressable style={realStyles.answerButton}>
            <Tts />
            <View style={realStyles.answerTextWrapper}>
              <Text style={realStyles.npcAnswerKanjiHiragana}>
                あんぎょうしご
              </Text>
              <Text style={realStyles.answerText}>1時間後だよ</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    gap: 35,
    backgroundColor: '#fff',
  },
});

const realStyles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 24,
    paddingHorizontal: 24,

    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  npcTriangle: {
    width: 0,
    height: 0,
    marginLeft: 35,

    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopColor: 'transparent',
    borderBottomColor: '#FFDADA',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  npcAnswer: {
    width: '113%',
    paddingVertical: 24,
    paddingLeft: 24,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,

    backgroundColor: '#FFDADA',
    borderRadius: 20,
  },
  npcAnswerTextWrapper: {
    flexDirection: 'column',
    transform: [{ translateY: -8 }],
  },
  npcAnswerText: {
    color: '#4f505c',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 18,
  },
  npcAnswerKanjiHiragana: {
    color: '#898989',
    fontSize: 8,
    fontWeight: 500,
    lineHeight: 18,
  },

  answerWrapper: {
    position: 'absolute',
    bottom: '10%',
    left: 0,
    right: 0,

    flexDirection: 'column',
    gap: 18,
  },
  answerGuide: {
    color: '#898989',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18,
    textAlign: 'center',
  },
  answerButton: {
    width: '111%',
    paddingVertical: 18,
    paddingLeft: 24,

    transform: [{ translateX: -24 }],

    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,

    backgroundColor: '#d2d2d2',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  answerTextWrapper: {
    flexDirection: 'column',
    transform: [{ translateY: -8 }],
  },
  answerText: {
    color: '#313239',
    fontSize: 20,
    fontWeight: 500,
  },
});

export default Real;
