import { StyleSheet, View } from 'react-native';

export default function QuadradoHorizontal() {
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
    flexDirection: 'inline',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ladoDireito: {
    flex: 1,
    backgroundColor: 'white',
  },
  meio: {
    height: 115, 
    backgroundColor: 'lightblue',
  },
})