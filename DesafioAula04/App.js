import { StyleSheet, Text, View } from 'react-native';
import Conteudo from './src/components/Conteudo';
import ConteudoDois from './src/components/ConteudoDois';

export default function App() {
  return (
    <View style={styles.container}>
      <Conteudo></Conteudo>
      <ConteudoDois></ConteudoDois>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // // alignItems: 'center',
    // // justifyContent: 'center',
  },
});
