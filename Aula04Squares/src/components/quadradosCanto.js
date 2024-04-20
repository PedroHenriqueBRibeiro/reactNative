import { StyleSheet, View } from 'react-native';

export default function QuadradosCanto() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, {backgroundColor:'red'}]} />
      <View style={[styles.square, {backgroundColor:'green'}]} />
      <View style={[styles.square, {backgroundColor:'blue'}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  square: {
    width: 115,
    height: 115,
  },
});
