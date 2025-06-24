import { View, Text } from 'react-native';
import PressButton from '@/components/commons/PressButton';
import Tts from 'assets/icons/Tts';
import { styles } from '@/styles/Conversation/Conversation.style';

interface Props {
  japanese: string | string[];
  onPress?: () => void;
}

function AnswerButton({ japanese, onPress }: Props) {
  return (
    <PressButton extraStyles={[styles.answerButton]} onPress={onPress}>
      <Tts />
      <View style={styles.textWrapper}>
        <Text style={styles.answerText}>{japanese}</Text>
      </View>
    </PressButton>
  );
}

export default AnswerButton;
