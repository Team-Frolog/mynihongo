import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { styles } from '@/styles/Practice/Practice.style';
import GestureGuideIcon from '../../../assets/icons/GestureGuide';
import { QuizDirection } from '@/types/quiz';

interface Props {
  direction: QuizDirection;
}

function GestureGuide({ direction = 'center' }: Props) {
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withRepeat(
      withSequence(
        withTiming(-20, { duration: 700, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 700, easing: Easing.inOut(Easing.ease) }),
        withTiming(20, { duration: 700, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 700, easing: Easing.inOut(Easing.ease) }),
      ),
      2,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.gestureGuideWrapper}>
      {direction === 'center' && (
        <Text style={styles.gestureGuide}>
          모르면 왼쪽으로,{'\n'} 안다면 오른쪽으로 넘기세요
        </Text>
      )}
      {direction !== 'center' && (
        <Text style={styles.userChoiceText}>
          {direction === 'right' ? '알아요' : '몰라요'}
        </Text>
      )}
      <Animated.View style={animatedStyle}>
        <GestureGuideIcon direction={direction} />
      </Animated.View>
    </View>
  );
}

export default GestureGuide;
