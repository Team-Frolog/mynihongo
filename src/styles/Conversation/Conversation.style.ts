import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    gap: 35,
    backgroundColor: '#fff',
  },
  realContainer: {
    height: '100%',
    paddingTop: 24,
    paddingHorizontal: 24,

    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  npcTriangle: {
    width: 0,
    height: 0,
    marginLeft: 35,

    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopColor: 'transparent',
    borderBottomColor: '#FFDADA',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  textWrapper: {
    flexDirection: 'column',
    gap: 5,
    flex: 1,
    flexShrink: 1,
  },
  koreanText: {
    color: '#4F505C',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 18,
    flexWrap: 'wrap',
  },
  npcAnswer: {
    width: '113%',
    paddingVertical: 24,
    paddingLeft: 24,
    paddingRight: 24,

    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,

    backgroundColor: '#FFDADA',
    borderRadius: 20,
  },
  npcAnswerText: {
    color: '#4f505c',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 18,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  answerWrapper: {
    position: 'absolute',
    bottom: '10%',
    left: 0,
    right: 0,

    flexDirection: 'column',
    gap: 18,
  },
  answerGuide: {
    color: '#898989',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18,
    textAlign: 'center',
  },
  answerButton: {
    width: '111%',
    paddingVertical: 18,
    paddingLeft: 24,
    paddingRight: 24,
    marginLeft: -24,

    flexDirection: 'row',
    gap: 15,

    backgroundColor: '#d2d2d2',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  answerText: {
    color: '#313239',
    fontSize: 20,
    fontWeight: 500,
  },
});
