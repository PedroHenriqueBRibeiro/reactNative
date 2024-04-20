import { StyleSheet, View } from 'react-native';

export default function QuadradosMeio() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrado,{backgroundColor: 'red'}]}></View>
      <View style={[styles.quadrado, {backgroundColor: 'green'}]}></View>
      <View style={[styles.quadrado, {backgroundColor: 'blue'}]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',

  },
  quadrado: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },

});