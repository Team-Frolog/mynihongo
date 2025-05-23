// import statusCodes along with GoogleSignin
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export const signInWithGoogle = async () => {
  try {
    // 구글 서비스 확인
    await GoogleSignin.hasPlayServices();

    // 구글 로그인
    const userInfo = await GoogleSignin.signIn();

    // Firebase 인증
    const credential = GoogleAuthProvider.credential(userInfo.data?.idToken);
    const result = await signInWithCredential(auth, credential);

    console.log('로그인 성공:', result.user);
    return result.user;
  } catch (error) {
    console.error('로그인 오류:', error);
    throw error;
  }
};
