import { ReactNode } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface Props {
  children: ReactNode;
  extraStyles: StyleProp<ViewStyle>;
  onPress: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function PressButton({ children, extraStyles, onPress }: Props) {
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
    >
      {children}
    </AnimatedPressable>
  );
}

export default PressButton;
