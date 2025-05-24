import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth } from '../../firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    const credential = GoogleAuthProvider.credential(userInfo.data?.idToken);
    await signInWithCredential(auth, credential);
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
