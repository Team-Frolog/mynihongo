import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Main from './src/screens/Main';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Practice from './src/screens/Practice';
import Quiz from './src/screens/Quiz';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="auto" />
        <Quiz />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
