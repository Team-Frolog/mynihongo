import { View, Text, StyleSheet } from 'react-native';
import ChevronLeftArrow from 'assets/icons/ChevronLeftArrow';

function BackHeader() {
  return (
    <View style={styles.header}>
      <ChevronLeftArrow />
      <Text style={styles.headerTitle}>공항</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginHorizontal: 'auto',

    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 40,
  },
});

export default BackHeader;
