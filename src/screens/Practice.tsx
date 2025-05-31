import { View, Text, StyleSheet, Image } from 'react-native';
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

function Practice() {
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
      <View style={wordStyles.container}>
        <Image
          source={require('../../assets/images/word-mock.png')}
          style={wordStyles.image}
        />
        <View style={wordStyles.wordWrapper}>
          <Text style={wordStyles.jWord}>ひこう</Text>
          <Text style={wordStyles.kanji}>飛行</Text>
          <Text style={wordStyles.kWord}>비행</Text>
          <Tts />
        </View>
        <View style={wordStyles.gestureGuideWrapper}>
          <Text style={wordStyles.gestureGuide}>
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

const styles = StyleSheet.create({
  container: {
    padding: 24,

    flex: 1,
    backgroundColor: '#fff',
    gap: 38,
  },
});

const wordStyles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 24,
    paddingHorizontal: 24,

    flexDirection: 'column',
    gap: 40,

    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    height: 240,
  },

  wordWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  jWord: {
    color: '#898989',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  kanji: {
    color: '#313239',
    fontSize: 60,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  kWord: {
    color: '#898989',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
  },

  gestureGuideWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
  gestureGuide: {
    color: '#898989',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Practice;
