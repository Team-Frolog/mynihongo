import { View, Text, Image } from 'react-native';
import Tts from '../../assets/icons/Tts';
import GestureGuide from '../../assets/icons/GestureGuide';
import Animated, {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import BackHeader from '../components/commons/BackHeader';
import { styles } from '@/styles/Practice/Practice.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { wordData } from '@/data/word';

function Practice() {
  const route = useRoute<RouteProp<any>>();
  const themeName = route.params?.themeName;

  const words = wordData.filter((word) => word.theme === themeName);

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
    <View style={styles.container}>
      <BackHeader title="공항" />
      <View style={styles.wordContainer}>
        <Image
          source={require('../../assets/images/word-mock.png')}
          style={styles.image}
        />
        <View style={styles.wordWrapper}>
          <Text style={styles.jWord}>ひこう</Text>
          <Text style={styles.kanji}>飛行</Text>
          <Text style={styles.kWord}>비행</Text>
          <Tts />
        </View>
        <View style={styles.gestureGuideWrapper}>
          <Text style={styles.gestureGuide}>
            모르면 왼쪽으로,{'\n'} 안다면 오른쪽으로 넘기세요
          </Text>
          <Animated.View style={animatedStyle}>
            <GestureGuide />
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

export default Practice;
