import * as Google from 'expo-auth-session/providers/google';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { User } from 'firebase/auth';
import Constants from 'expo-constants';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      '949524228403-3ltlchcotpfrh9efhbstgm45b4t15dco.apps.googleusercontent.com',
    iosClientId:
      '949524228403-l4pu5jft22afamenqll0boo8q3i22l02.apps.googleusercontent.com',
    androidClientId:
      '949524228403-i2p8s1f8q11652uets7amevakcom7af3.apps.googleusercontent.com',
    redirectUri: 'http://localhost:8081',
  });

  useEffect(() => {
    const handleGoogleSignIn = async () => {
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        const res = await signInWithCredential(auth, credential);
        console.log(res);
        setUser(res.user);
      }
    };

    handleGoogleSignIn();
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
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
