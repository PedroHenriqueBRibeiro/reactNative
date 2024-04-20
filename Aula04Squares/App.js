import { StyleSheet, Text, View } from 'react-native';
import QuadradoVertical from './src/components/quadradoVertical';
import QuadradosSeparados from './src/components/quadradosSeparados';
import QuadradosCanto from './src/components/quadradosCanto';
import QuadradosMeio from './src/components/quadradosMeio';
import QuadradoHorizontal from './src/components/quadradoHorizontal';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <QuadradoVertical></QuadradoVertical> */}
      {/* <QuadradosSeparados></QuadradosSeparados> */}
      {/* <QuadradosCanto></QuadradosCanto> */}
      <QuadradosMeio></QuadradosMeio>
      {/* <QuadradoHorizontal></QuadradoHorizontal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});