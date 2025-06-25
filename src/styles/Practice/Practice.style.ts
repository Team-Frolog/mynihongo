import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',

    padding: 24,
    paddingBottom: 0,

    flex: 1,
    backgroundColor: '#fff',
    gap: 38,
  },
  wordContainer: {
    height: '100%',
    paddingTop: 24,
    paddingHorizontal: 24,

    flexDirection: 'column',
    gap: 30,

    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  list: {
    gap: 5,
    borderWidth: 0,
    padding: 0,
    margin: 0,
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
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    zIndex: 100,
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
  userChoiceText: {
    color: '#898989',
    fontSize: 40,
    fontWeight: '500',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  swipeCard: {
    position: 'absolute',
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  swipeLabel: {
    position: 'absolute',
    top: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    zIndex: 1,
  },

  leftLabel: {
    left: 20,
    backgroundColor: '#FF6B6B',
    transform: [{ rotate: '-15deg' }],
  },

  rightLabel: {
    right: 20,
    backgroundColor: '#4ECDC4',
    transform: [{ rotate: '15deg' }],
  },

  swipeLabelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  progressContainer: {
    padding: 20,
    alignItems: 'center',
  },

  progressText: {
    fontSize: 16,
    color: '#666',
  },

  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  completedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ECDC4',
  },
});
