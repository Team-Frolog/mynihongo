import { ReactNode } from 'react';
import { Pressable, StyleProp, ViewStyle, PressableProps } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface Props extends Omit<PressableProps, 'style'> {
  children: ReactNode;
  extraStyles?: StyleProp<ViewStyle>;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function PressButton({ children, extraStyles, onPress, ...props }: Props) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedPressable
      style={[animatedStyle, extraStyles]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      {...props}
    >
      {children}
    </AnimatedPressable>
  );
}

export default PressButton;
