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
import Conversation from '@/screens/Conversation';
import Complete from '@/screens/Complete';
import * as SplashScreen from 'expo-splash-screen';
import { useVisitedDate } from '@/hooks/useVisitedDate';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { createUser, isLoggedIn } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const { updateVisited } = useVisitedDate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        createUser(user.uid);
        updateVisited(user.uid);
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
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              animation: 'slide_from_left',
            }}
          />
          <Stack.Screen name="Practice" component={Practice} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Conversation" component={Conversation} />
          <Stack.Screen name="Complete" component={Complete} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}

export default AppNavigator;
