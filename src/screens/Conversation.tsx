import React from 'react';
import { View } from 'react-native';
import BackHeader from '@/components/commons/BackHeader';
import { styles } from '@/styles/Conversation/Conversation.style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { conversationData } from '@/data/conversation';
import ResponseContent from '@/components/Conversation/ResponseContent';
import ChoiceContent from '@/components/Conversation/ChoiceContent';

function Conversation() {
  const route = useRoute<RouteProp<any>>();
  const themeId = route.params?.themeId;

  const conversation = useMemo(() => {
    return conversationData.find((data) => data.id.split('_')[0] === themeId)!;
  }, [themeId]);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  const handleClickAnswer = (index: number) => {
    setIsSelected(true);
    setSelectedAnswer(index);
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
    <View style={styles.container}>
      <BackHeader title="실전" />
      <View style={styles.realContainer}>
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
      </View>
    </View>
  );
}

export default Conversation;
