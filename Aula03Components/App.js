import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ItemLista from './src/components/ItemLista';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>Teste components</Text>
      <ItemLista item = 'Produto 01'/>
      <ItemLista item = 'Produto 02'/>
      <ItemLista item = 'Produto 03'/>
      <ItemLista item = 'Produto 01'/>
      <ItemLista item = 'Produto 02'/>
      <ItemLista item = 'Produto 03'/>
      <ItemLista item = 'Produto 01'/>
      <ItemLista item = 'Produto 02'/>
      <ItemLista item = 'Produto 03'/>
      <ItemLista item = 'Produto 01'/>
      <ItemLista item = 'Produto 02'/>
      <ItemLista item = 'Produto 03'/>
      <ItemLista item = 'Produto 01'/>
      <ItemLista item = 'Produto 02'/>
      <ItemLista item = 'Produto 03'/>
      <StatusBar style="auto" />
      </ScrollView>
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