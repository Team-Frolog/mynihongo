import React, { useEffect } from 'react';
import { ImageBackground, View, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import { styles } from '@/styles/Login/SlideBackground.style';

const { width } = Dimensions.get('window');

interface Props {
  children: React.ReactNode;
}

const backgroundImages = [
  require('../../../assets/images/login-background.png'),
  require('../../../assets/images/login-background2.png'),
  require('../../../assets/images/login-background3.png'),
  require('../../../assets/images/login-background4.png'),
];

function AutoSlideBackground({ children }: Props) {
  const translateX = useSharedValue(0);

  useEffect(() => {
    const startAnimation = () => {
      translateX.value = withRepeat(
        withTiming(-width * backgroundImages.length, {
          duration: backgroundImages.length * 5000,
          easing: Easing.linear,
        }),
        -1,
        false,
      );
    };

    startAnimation();
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slideContainer, animatedStyle]}>
        {[...backgroundImages, ...backgroundImages].map((image, index) => (
          <ImageBackground
            key={index}
            source={image}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        ))}
      </Animated.View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

export default AutoSlideBackground;
