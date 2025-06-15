import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUser } from '@/hooks/useUser';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebaseConfig';
import Login from '@/screens/Login';
import Main from '@/screens/Main';
import Practice from '@/screens/Practice';
import Quiz from '@/screens/Quiz';
import Real from '@/screens/Real';
import Complete from '@/screens/Complete';
import * as SplashScreen from 'expo-splash-screen';
import { useVisitedDate } from '@/hooks/useVisitedDate';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { createUser, isLoggedIn } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const { updateVisitedDate } = useVisitedDate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        createUser(user.uid);
        updateVisitedDate(user.uid);
      } else {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Practice" component={Practice} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Real" component={Real} />
          <Stack.Screen name="Complete" component={Complete} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}

export default AppNavigator;
