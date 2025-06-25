import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/commons/SafeArea.style';

function SafeAreaScreen({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {children}
    </SafeAreaView>
  );
}

export default SafeAreaScreen;
