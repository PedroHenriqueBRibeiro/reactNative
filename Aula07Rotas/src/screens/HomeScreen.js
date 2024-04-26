import {View, Text, Button, StyleSheet} from 'react-native'


export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HomeScreen</Text>
      <Button title='Ir para perfil' onPress={() => navigation.navigate('profile')}/>
      <Button title='Ir para lista' onPress={() => navigation.navigate('lista')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },


  texto: {
    fontSize: 50,
    fontWeight: 'bold',
  },
})