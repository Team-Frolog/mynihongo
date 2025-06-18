import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  progressbar: {
    position: 'relative',
    width: '60%',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#313239',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressbarInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: '#ffdada',
    borderRadius: 7,
  },
  progressbarText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    zIndex: 1,
  },
});
