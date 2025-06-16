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
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Tts from '../../../assets/icons/Tts';
import { styles } from '@/styles/Practice/Practice.style';

const { width: screenWidth } = Dimensions.get('window');
const SWIPE_THRESHOLD = screenWidth * 0.3;

interface Props {
  item: any;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  index: number;
  totalCards: number;
}

function SwipeCard({
  item,
  onSwipeLeft,
  onSwipeRight,
  index,
  totalCards,
}: Props) {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

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
      } else if (shouldSwipeRight) {
        translateX.value = withTiming(screenWidth * 1.5);
        runOnJS(onSwipeRight)();
      } else {
        translateX.value = withSpring(0);
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

  const leftLabelStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [-SWIPE_THRESHOLD, -SWIPE_THRESHOLD / 2, 0],
      [1, 1, 0],
      Extrapolation.CLAMP,
    );
    return { opacity };
  });

  const rightLabelStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, SWIPE_THRESHOLD / 2, SWIPE_THRESHOLD],
      [0, 1, 1],
      Extrapolation.CLAMP,
    );
    return { opacity };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.wordContainer, cardStyle]}>
        <Animated.View
          style={[styles.swipeLabel, styles.leftLabel, leftLabelStyle]}
        >
          <Text style={styles.swipeLabelText}>모름</Text>
        </Animated.View>

        <Animated.View
          style={[styles.swipeLabel, styles.rightLabel, rightLabelStyle]}
        >
          <Text style={styles.swipeLabelText}>앎</Text>
        </Animated.View>

        {/* 카드 내용 */}
        <Image
          source={require('../../../assets/images/word-mock.png')}
          style={styles.image}
        />
        <View style={styles.wordWrapper}>
          <Text style={styles.jWord}>{item.hiragana}</Text>
          <Text style={styles.kanji}>{item.kanji}</Text>
          <Text style={styles.kWord}>{item.meaning}</Text>
          <Tts />
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

export default SwipeCard;
