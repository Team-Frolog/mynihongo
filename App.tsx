import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User } from 'firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { signInWithGoogle } from './src/utils/googleAuth';

GoogleSignin.configure({
  webClientId:
    '949524228403-3ltlchcotpfrh9efhbstgm45b4t15dco.apps.googleusercontent.com',
  iosClientId:
    '949524228403-l4pu5jft22afamenqll0boo8q3i22l02.apps.googleusercontent.com',
});

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInWithGoogle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
