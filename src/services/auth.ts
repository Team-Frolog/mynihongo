import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth } from '../../firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useUserStore } from '@/stores/useUserStore';

export const signIn = async () => {
  try {
    const setUser = useUserStore((state) => state.setUser);

    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    const credential = GoogleAuthProvider.credential(userInfo.data?.idToken);
    const result = await signInWithCredential(auth, credential);

    const user = result.user;

    setUser(user);

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
