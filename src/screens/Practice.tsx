import { View, Text } from 'react-native';
import GestureGuide from '../../assets/icons/GestureGuide';
import Animated, {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import BackHeader from '../components/commons/BackHeader';
import { styles } from '@/styles/Practice/Practice.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { wordData } from '@/data/word';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SwipeCard from '@/components/Practice/SwipeCard';

function Practice() {
  const route = useRoute<RouteProp<any>>();
  const themeName = route.params?.themeName;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowGestureGuide, setIsShowGestureGuide] = useState(true);

  const words = wordData.filter((word) => word.theme === themeName);

  useEffect(() => {
    setTimeout(() => {
      setIsShowGestureGuide(false);
    }, 3000);
  }, []);

  const handleSwipeLeft = () => {
    console.log('모름 - 다시 학습');
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSwipeRight = () => {
    console.log('앎 - 학습 완료');
    setCurrentIndex((prev) => prev + 1);
  };

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
    <GestureHandlerRootView>
      <View style={styles.container}>
        <BackHeader title="공항" />

        {/* 다음 카드들을 미리 렌더링 (최대 3장) */}
        {words.slice(currentIndex, currentIndex + 3).map((word, index) => (
          <SwipeCard
            key={word.id}
            item={word}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
            index={index}
            totalCards={3}
          />
        ))}
        {isShowGestureGuide && (
          <View style={styles.gestureGuideWrapper}>
            <Text style={styles.gestureGuide}>
              모르면 왼쪽으로,{'\n'} 안다면 오른쪽으로 넘기세요
            </Text>
            <Animated.View style={animatedStyle}>
              <GestureGuide />
            </Animated.View>
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
}

export default Practice;
