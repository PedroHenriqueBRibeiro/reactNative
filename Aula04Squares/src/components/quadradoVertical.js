import { StyleSheet, View } from 'react-native';

export default function QuadradoVertical() {
  return (
    <View style={styles.container}>
      <View style={styles.ladoEsquerdo}></View>
      <View style={styles.meio}></View>
      <View style={styles.ladoDireito}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  ladoDireito: {
    flex: 1,
    backgroundColor: 'white',
  },
  meio: {
    width: 115, 
    backgroundColor: 'lightblue',
  },
})