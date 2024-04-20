import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export const Contador = () => {
  const [contador, setContador] = useState(0);
  const ContadorIncrement = () => {
    setContador (contador + 1);
  }
  const ContadorDividir = () => {
    setContador (contador / 2);
  }


  return (
      <View>
        <Text style={styles.contador}>Contador: {contador}</Text>
        <Button title="Adicionar + 1" onPress={ContadorIncrement}/>
        <Text style={styles.contador}>Contador: {contador}</Text>
        <Button title="Dividir por 2" onPress={ContadorDividir}/>
      </View>
  );
  }

const styles = StyleSheet.create({
  contador: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 1000,
  },
}
);
