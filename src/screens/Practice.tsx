import { View } from 'react-native';
import GestureGuide from '@/components/Practice/GestureGuide';
import { useEffect, useState } from 'react';
import BackHeader from '../components/commons/BackHeader';
import { styles } from '@/styles/Practice/Practice.style';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { wordData } from '@/data/word';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SwipeCard from '@/components/Practice/SwipeCard';
import { useWord } from '@/hooks/useWord';
import { useUser } from '@/hooks/useUser';
import SafeAreaScreen from '@/components/commons/SafeAreaScreen';

function Practice() {
  const route = useRoute<RouteProp<any>>();
  const themeId = route.params?.themeId;
  const themeName = route.params?.themeName;

  const navigation = useNavigation<NavigationProp<any>>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);
  const [isShowGestureGuide, setIsShowGestureGuide] = useState(true);

  const { updateWordToLearned } = useWord();
  const { userInfo } = useUser();

  const currentThemeWords =
    userInfo?.themeStatus.find((theme) => theme.themeId === themeId)?.words ||
    [];

  const isLearnning = currentThemeWords.length !== 0;

  const words = isLearnning
    ? wordData
        .filter((word) => word.themeId === themeId)
        .filter((word) => !currentThemeWords.includes(word.id))
    : wordData.filter((word) => word.themeId === themeId);

  useEffect(() => {
    setTimeout(() => {
      setIsShowGestureGuide(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (learnedCount === words.length) {
      navigation.navigate('Quiz', { themeId });
    }
  }, [learnedCount]);

  // 모름
  const handleSwipeLeft = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // 앎
  const handleSwipeRight = () => {
    updateWordToLearned({ wordId: words[currentIndex].id, themeId });
    setCurrentIndex((prev) => prev + 1);
    setLearnedCount((prev) => prev + 1);
  };

  return (
    <SafeAreaScreen>
      <GestureHandlerRootView>
        <View style={styles.container}>
          <BackHeader title={themeName} />

          {/* 다음 카드들을 미리 렌더링 (최대 3장) */}
          {words.slice(currentIndex, currentIndex + 3).map((word, index) => (
            <SwipeCard
              key={word.id}
              item={word}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              index={index}
              totalCards={3}
            />
          ))}
          {isShowGestureGuide && <GestureGuide />}
        </View>
      </GestureHandlerRootView>
    </SafeAreaScreen>
  );
}

export default Practice;
