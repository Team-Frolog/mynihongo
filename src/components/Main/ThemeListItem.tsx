import React from 'react';
import { Text, View } from 'react-native';
import ChevronRight from '../../../assets/icons/ChevronRightArrow';
import StudyProgressStatus from '@/components/Main/StudyProgressStatus';
import { styles } from '@/styles/Main/ThemeList.style';
import { Theme } from '@/data/theme';
import { ThemeStatus } from '@/types/user';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import PressButton from '@/components/commons/PressButton';

interface Props {
  item: Theme;
  status?: ThemeStatus;
  words?: string[];
}

function ThemeListItem({ item, status = 'learning', words }: Props) {
  const navigation = useNavigation<NavigationProp<any>>();

  const listItemStyle = {
    borderRightWidth: status === 'learning' ? 1 : 0,
    paddingRight: status === 'learning' ? 15 : 0,
  };

  const handlePressItem = () => {
    let destination = 'Practice';
    if (status === 'learning') destination = 'Practice';
    if (status === 'quiz') destination = 'Quiz';

    navigation.navigate(destination, {
      themeName: item.name,
      themeId: item.id,
    });
  };

  return (
    <PressButton
      extraStyles={[styles.listItem, listItemStyle]}
      onPress={handlePressItem}
    >
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.titleHanza}>{item.japaneseName}</Text>
      </View>
      <View style={styles.stepStatusWrapper}>
        <Text style={styles.stepStatus}>{words ? words.length : 0} / 10</Text>
        <ChevronRight width={24} height={24} />
        {status !== 'learning' && (
          <StudyProgressStatus status={status} width={59} height={100} />
        )}
      </View>
    </PressButton>
  );
}

export default ThemeListItem;
