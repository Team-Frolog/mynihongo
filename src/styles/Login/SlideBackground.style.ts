import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    overflow: 'hidden',
  },
  slideContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    width: width * 4 * 2,
    height: height,
  },
  backgroundImage: {
    width: width,
    height: height,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});
