import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
  interpolate,
  Extrapolation,
  useAnimatedReaction,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { styles } from '@/styles/Practice/Practice.style';
import { QuizDirection } from '@/types/quiz';
import Tts from '@/components/commons/Tts';

const { width: screenWidth } = Dimensions.get('window');
const SWIPE_THRESHOLD = screenWidth * 0.3;

interface Props {
  item: any;
  index: number;
  totalCards: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSetDirection: (direction: QuizDirection) => void;
}

function SwipeCard({
  item,
  index,
  totalCards,
  onSwipeLeft,
  onSwipeRight,
  onSetDirection,
}: Props) {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const currentDirection = useSharedValue<QuizDirection>('center');

  // 새로운 Gesture API 사용
  const panGesture = Gesture.Pan()
    .onStart(() => {
      scale.value = withSpring(1.05);
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      const shouldSwipeLeft = event.translationX < -SWIPE_THRESHOLD;
      const shouldSwipeRight = event.translationX > SWIPE_THRESHOLD;

      if (shouldSwipeLeft) {
        translateX.value = withTiming(-screenWidth * 1.5);
        runOnJS(onSwipeLeft)();
        runOnJS(onSetDirection)('center');
      } else if (shouldSwipeRight) {
        translateX.value = withTiming(screenWidth * 1.5);
        runOnJS(onSwipeRight)();
        runOnJS(onSetDirection)('center');
      } else {
        translateX.value = withSpring(0);
        runOnJS(onSetDirection)('center');
      }
      scale.value = withSpring(1);
    });

  const cardStyle = useAnimatedStyle(() => {
    const rotation = interpolate(
      translateX.value,
      [-screenWidth / 2, 0, screenWidth / 2],
      [-15, 0, 15],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      Math.abs(translateX.value),
      [0, SWIPE_THRESHOLD],
      [1, 0.8],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        { translateX: translateX.value },
        { rotate: `${rotation}deg` },
        { scale: scale.value },
      ],
      opacity,
      zIndex: totalCards - index,
    };
  });

  useAnimatedReaction(
    () => {
      if (translateX.value < -SWIPE_THRESHOLD / 2) {
        return 'left';
      } else if (translateX.value > SWIPE_THRESHOLD / 2) {
        return 'right';
      } else {
        return 'center';
      }
    },
    (newDirection) => {
      if (currentDirection.value !== newDirection) {
        currentDirection.value = newDirection;
        runOnJS(onSetDirection)(newDirection);
      }
    },
  );

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.wordContainer, cardStyle]}>
        {/* 카드 내용 */}
        <Image
          source={require('../../../assets/images/public/word/word-mock.png')}
          style={styles.image}
        />
        <View style={styles.wordWrapper}>
          <Text style={styles.jWord}>{item.hiragana}</Text>
          <Text style={styles.kanji}>{item.kanji}</Text>
          <Text style={styles.kWord}>{item.meaning}</Text>
          <Tts text={item.hiragana} />
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

export default SwipeCard;
