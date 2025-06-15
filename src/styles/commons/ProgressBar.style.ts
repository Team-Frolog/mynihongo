import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  progressbar: {
    position: 'relative',

    width: '60%',
    height: 24,
    padding: 3,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#313239',
    borderRadius: 8,
  },
  progressbarInner: {
    position: 'absolute',
    top: 0,
    left: 0,

    height: 22,

    backgroundColor: '#ffdada',
    borderRadius: 8,
  },
  progressbarText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 18,
  },
});
