import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  status: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    zIndex: 1,
    textAlign: 'center',

    color: '#faf8f4',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 18,
  },
});
