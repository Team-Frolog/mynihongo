import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  filterWrapper: {
    width: 100,
    paddingLeft: 12,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  filterText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 18,
  },
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  titleHanza: {
    fontSize: 16,
    fontWeight: 500,
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
