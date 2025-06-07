import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    gap: 35,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 120,
    gap: 16,
  },
  contentWrapper: {
    flexDirection: 'column',

    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  wordWrapper: {
    padding: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wordText: {
    color: '#313239',
    fontSize: 36,
    fontWeight: 500,
  },
  meanWrapper: {
    position: 'relative',

    paddingVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderTopWidth: 1,
    borderColor: '#000',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    backgroundColor: '#ffdada',
  },
  meanText: {
    color: '#4f505c',
    fontSize: 20,
    fontWeight: 500,
  },
  seperator: {
    position: 'absolute',
    left: '50%',
    right: '50%',

    width: 1,
    height: 25,

    backgroundColor: '#b4b4b4',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    padding: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: '#d9d9d9',
  },
  button: {
    paddingVertical: 25,
    paddingHorizontal: 55,

    backgroundColor: '#898989',
    borderRadius: 10,
  },
  buttonText: {
    color: '#faf8f4',
    fontSize: 24,
    fontWeight: 900,
  },
});
