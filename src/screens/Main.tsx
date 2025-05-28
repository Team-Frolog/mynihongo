import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeList from '@/components/ThemeList';

function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MYnihongo</Text>
      <View style={styles.status}>
        <View style={styles.progressbar}>
          <View style={styles.progressbarInner}></View>
          <Text style={styles.progressbarText}>22 / 500 [44%]</Text>
        </View>
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
  progressbar: {
    position: 'relative',

    width: '60%',
    height: 24,
    padding: 3,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#313239',
    borderRadius: 8,
  },
  progressbarInner: {
    position: 'absolute',
    top: 0,
    left: 0,

    height: 22,
    width: '44%',

    backgroundColor: '#ffdada',
    borderRadius: 8,
  },
  progressbarText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 18,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 18,
  },
});

export default Main;
