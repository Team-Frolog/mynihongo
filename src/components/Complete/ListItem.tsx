import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/Complete/Complete.style';
import ChevronUpArrow from 'assets/icons/ChevronUpArrow';
import ChevronDownArrow from 'assets/icons/ChevronDownArrow';
import Tts from '@/components/commons/Tts';
import { useState } from 'react';
import { Word } from '@/data/word';

interface Props {
  item: Word;
}

function ListItem({ item }: Props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.wordWrapper}>
        {isShow ? (
          <TouchableOpacity onPress={() => setIsShow(false)}>
            <ChevronUpArrow />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsShow(true)}>
            <ChevronDownArrow />
          </TouchableOpacity>
        )}
        <Text style={styles.wordText}>{item.kanji}</Text>
        <Tts text={item.hiragana} />
      </View>
      {isShow && (
        <View style={styles.meanWrapper}>
          <Text style={styles.meanText}>{item.meaning}</Text>
          <View style={styles.seperator}></View>
          <Text style={styles.meanText}>{item.hiragana}</Text>
        </View>
      )}
    </View>
  );
}

export default ListItem;
