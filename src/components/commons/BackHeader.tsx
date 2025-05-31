import { View, Text, StyleSheet } from 'react-native';
import ChevronLeftArrow from 'assets/icons/ChevronLeftArrow';

interface Props {
  title: string;
}

function BackHeader({ title }: Props) {
  return (
    <View style={styles.header}>
      <ChevronLeftArrow />
      <Text style={styles.headerTitle}>{title}</Text>
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
