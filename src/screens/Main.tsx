import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeList from '@/components/Main/ThemeList';
import ProgressBar from '@/components/commons/ProgressBar';

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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 24,

    flex: 1,
    gap: 33,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#313239',
    fontSize: 36,
    fontWeight: 700,
  },
  status: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 18,
  },
});

export default Main;
