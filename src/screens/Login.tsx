import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { signIn } from '@/services/auth';
import { styles } from '@/styles/Login/Login.style';
import PressButton from '@/components/commons/PressButton';
import GoogleLoginIcon from '../../assets/icons/GoogleLoginIcon';
import SlideBackground from '@/components/Login/SlideBackground';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
});

function Login() {
  return (
    <SlideBackground>
      <StatusBar style="light" translucent />

      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>MYnihongo</Text>
          <View style={styles.contentWrapper}>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>
                배우고 바로 쓰는{'\n'}
                일본어 공부
              </Text>
              <Text style={styles.subDescription}>
                하루 10분으로 일본어 마스터!
              </Text>
            </View>
            <PressButton onPress={signIn}>
              <GoogleLoginIcon />
            </PressButton>
          </View>
        </View>
      </View>
    </SlideBackground>
  );
}

export default Login;
