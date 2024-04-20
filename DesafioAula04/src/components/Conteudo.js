import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Conteudo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.conteudo}>
        <View style={styles.quadrado} />
        <View style={styles.retangulo} />
        <View style={styles.coluna}>
          <View style={[styles.retanguloMaiorUm, styles.flex]} />
          <View style={[styles.retanguloMaiorDois, styles.flex]} />
        </View>
        <View style={styles.linhaAzul} />
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'aqua',
    paddingTop: 20,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadrado: {
    width: 75,
    height: 75,
    backgroundColor: 'orange',
  },
  retangulo: {
    marginTop: 20,
    width: 150,
    height: 30,
    backgroundColor: 'orange',
  },
  retanguloMaiorUm: {
    marginTop: 40,
    width: 200,
    height: 60,
    backgroundColor: 'purple',
  },
  retanguloMaiorDois: {
    marginTop: 40,
    width: 200,
    height: 60,
    backgroundColor: 'blue',
  },
  coluna: {
    flexDirection: 'row',
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  linhaAzul: {
    backgroundColor: 'aqua',
    height: 10,
    alignSelf: 'stretch',
  },
  grid: {
    marginTop: 20,
  },
});
