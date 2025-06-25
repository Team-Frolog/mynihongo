import React from 'react';
import { View, Text } from 'react-native';
import BackHeader from '@/components/commons/BackHeader';
import { styles } from '@/styles/Conversation/Conversation.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { conversationData } from '@/data/conversation';
import ResponseContent from '@/components/Conversation/ResponseContent';
import ChoiceContent from '@/components/Conversation/ChoiceContent';
import ButtonHeader from '@/components/commons/ButtonHeader';
import { styles as headerButtonStyles } from '@/styles/commons/HeaderButton.style';
import { useWord } from '@/hooks/useWord';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import SafeAreaScreen from '@/components/commons/SafeAreaScreen';

function Conversation() {
  const route = useRoute<RouteProp<any>>();
  const themeId = route.params?.themeId;

  const conversation = useMemo(() => {
    return conversationData.find((data) => data.id.split('_')[0] === themeId)!;
  }, [themeId]);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  const { updateThemeStatus } = useWord();

  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const handleClickAnswer = (index: number) => {
    opacity.value = withTiming(0, {
      duration: 250,
      easing: Easing.out(Easing.quad),
    });
    translateY.value = withTiming(-15, {
      duration: 250,
      easing: Easing.out(Easing.quad),
    });

    setTimeout(() => {
      setIsSelected(true);
      setSelectedAnswer(index);

      translateY.value = withSequence(
        withTiming(25, { duration: 0 }),
        withTiming(0, {
          duration: 400,
          easing: Easing.out(Easing.back(1.1)),
        }),
      );
      opacity.value = withTiming(1, {
        duration: 400,
        easing: Easing.out(Easing.quad),
      });
    }, 250);
  };

  // const convertJapanese = (japanese: string) => {
  //   if (!japanese.includes('。')) return japanese;

  //   return japanese
  //     .split('。')
  //     .filter((text) => text.trim())
  //     .map((text, index) => {
  //       return index === 0 ? `${text}。` : `${text}。`;
  //     });
  // };

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        {isSelected ? (
          <ButtonHeader
            title="실전"
            onPress={() => {
              updateThemeStatus({
                themeId: themeId,
                status: 'completed',
              });
            }}
          >
            <Text style={headerButtonStyles.textButton}>종료</Text>
          </ButtonHeader>
        ) : (
          <BackHeader title="실전" />
        )}
        <Animated.View style={[styles.realContainer, animatedStyle]}>
          {isSelected ? (
            <ResponseContent
              npcDialogue={conversation?.response[selectedAnswer].japanese}
              npcKorean={conversation?.response[selectedAnswer].korean}
              userDialogue={conversation?.userChoice[selectedAnswer].japanese}
              userKorean={conversation?.userChoice[selectedAnswer].korean}
            />
          ) : (
            <ChoiceContent
              npcDialogue={conversation?.question.japanese}
              userChoice={conversation?.userChoice.map(
                (choice) => choice.japanese,
              )}
              onPress={handleClickAnswer}
            />
          )}
        </Animated.View>
      </View>
    </SafeAreaScreen>
  );
}

export default Conversation;
