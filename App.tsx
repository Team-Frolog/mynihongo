import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { signIn } from '@/services/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebaseConfig';
import { useUserStore } from '@/stores/useUserStore';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
});

export default function App() {
  const setUser = useUserStore((state) => state.setUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {isLoggedIn ? (
        <Text>Logged in</Text>
      ) : (
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )}
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
