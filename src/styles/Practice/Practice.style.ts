import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,

    flex: 1,
    backgroundColor: '#fff',
    gap: 38,
  },
  wordContainer: {
    height: '100%',
    paddingTop: 24,
    paddingHorizontal: 24,

    flexDirection: 'column',
    gap: 40,

    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    height: 240,
  },
  wordWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  jWord: {
    color: '#898989',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  kanji: {
    color: '#313239',
    fontSize: 60,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  kWord: {
    color: '#898989',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  gestureGuideWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
  gestureGuide: {
    color: '#898989',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
  },
});
