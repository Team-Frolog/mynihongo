import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    width: '100%',

    flexDirection: 'column',
    gap: 16,
  },
  listItem: {
    width: '100%',
    height: 100,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',

    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#313239',
    borderRadius: 15,

    backgroundColor: '#fff',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  titleHanza: {
    fontSize: 24,
    fontWeight: 700,
    color: '#C0C0C0',
  },
  stepStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepStatus: {
    color: '#313239',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 18,
  },
});
