import { StyleSheet, View } from 'react-native';

export default function QuadradosSeparados() {
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  quadrado: {
    width: 100,
    height: 100,
  },

});

