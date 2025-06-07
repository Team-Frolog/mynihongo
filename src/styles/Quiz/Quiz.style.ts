import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    gap: 35,
    backgroundColor: '#fff',
  },
  status: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 18,
  },
  quizContainer: {
    height: '100%',
    paddingTop: 35,
    paddingHorizontal: 10,

    flexDirection: 'column',
    alignItems: 'center',
    gap: 60,

    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  guideText: {
    color: '#898989',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18,
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
  buttonWrapper: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
    paddingVertical: 35,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#898989',
  },
  buttonLeft: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonRight: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  buttonText: {
    color: '#faf8f4',
    fontSize: 28,
    fontWeight: 900,
  },
});
