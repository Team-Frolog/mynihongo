import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,

    flex: 1,
    gap: 33,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#313239',
    fontSize: 36,
    fontWeight: 700,
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
});
