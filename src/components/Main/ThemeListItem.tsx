import React from 'react';
import { Text, View, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import ChevronRight from '../../../assets/icons/ChevronRightArrow';
import StudyProgressStatus from '@/components/Main/StudyProgressStatus';
import { styles } from '@/styles/Main/ThemeList.style';
import { Theme } from '@/data/theme';
import { ThemeStatus } from '@/types/user';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface Props {
  item: Theme;
  status?: ThemeStatus;
  words?: number;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function ThemeListItem({ item, status, words }: Props) {
  const navigation = useNavigation<NavigationProp<any>>();

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

  const listItemStyle = {
    borderRightWidth: status ? 0 : 1,
    paddingRight: status ? 0 : 15,
  };

  return (
    <AnimatedPressable
      style={[styles.listItem, listItemStyle, animatedStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => {
        navigation.navigate('Practice', { themeName: item.name });
      }}
    >
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.titleHanza}>{item.japaneseName}</Text>
      </View>
      <View style={styles.stepStatusWrapper}>
        <Text style={styles.stepStatus}>{words ? words : 0} / 10</Text>
        <ChevronRight width={24} height={24} />
        {status && (
          <StudyProgressStatus status={status} width={59} height={100} />
        )}
      </View>
    </AnimatedPressable>
  );
}

export default ThemeListItem;
