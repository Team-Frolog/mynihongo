import React from 'react';
import { Text, View } from 'react-native';
import ThemeList from '@/components/Main/ThemeList';
import ProgressBar from '@/components/commons/ProgressBar';
import { styles } from '@/styles/Main/Main.style';

function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MYnihongo</Text>
      <View style={styles.status}>
        <ProgressBar text="22 / 500 [44%]" />
        <Text style={styles.statusText}>1번째 방문!</Text>
      </View>
      <ThemeList />
    </View>
  );
}

export default Main;
