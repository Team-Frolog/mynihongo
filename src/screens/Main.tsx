import React from 'react';
import { Text, View } from 'react-native';
import ThemeList from '@/components/Main/ThemeList';
import ProgressBar from '@/components/commons/ProgressBar';
import { styles } from '@/styles/Main/Main.style';
import { useUser } from '@/hooks/useUser';
import SafeAreaScreen from '@/components/commons/SafeAreaScreen';

function Main() {
  const { userInfo } = useUser();

  if (!userInfo) return null;

  const progress = userInfo.themeStatus.reduce((acc, cur) => {
    return acc + cur.words.length;
  }, 0);
  const status = Math.round((progress / 500) * 100);

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Text style={styles.title}>MYnihongo</Text>
        <View style={styles.status}>
          <ProgressBar
            text={`${progress} / 500 [${status}%]`}
            status={status}
          />
          <Text style={styles.statusText}>
            {userInfo.visitedDate.totalVisited}번째 방문!
          </Text>
        </View>
        <ThemeList />
      </View>
    </SafeAreaScreen>
  );
}

export default Main;
