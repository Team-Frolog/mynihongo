import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Main from './src/screens/Main';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Practice from './src/screens/Practice';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="auto" />
        <Practice />
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
