import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backgroundImage: {
    width: width,
    height: height,
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // 반투명 오버레이
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    paddingTop: 50, // 상태바 영역 고려
  },
  title: {
    transform: [{ translateY: -100 }],
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  contentWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  descriptionWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  description: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FAF8F4',
    textAlign: 'center',
  },
  subDescription: {
    fontSize: 16,
    color: '#FAF8F4',
    fontWeight: '500',
  },
});
