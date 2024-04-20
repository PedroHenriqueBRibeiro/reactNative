import { StyleSheet, Text, View } from 'react-native';
import { Contador } from './src/components/Contador';
import { Estado } from './src/components/Estado';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Estado></Estado> */}
        <Contador></Contador>
   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
