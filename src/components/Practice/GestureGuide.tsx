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

function GestureGuide() {
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withRepeat(
      withSequence(
        withTiming(-20, { duration: 700, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 700, easing: Easing.inOut(Easing.ease) }),
        withTiming(20, { duration: 700, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 700, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
    );
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  return (
    <View style={styles.gestureGuideWrapper}>
      <Text style={styles.gestureGuide}>
        모르면 왼쪽으로,{'\n'} 안다면 오른쪽으로 넘기세요
      </Text>
      <Animated.View style={animatedStyle}>
        <GestureGuide />
      </Animated.View>
    </View>
  );
}

export default GestureGuide;
