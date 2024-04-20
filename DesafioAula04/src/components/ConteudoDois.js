import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ConteudoDois() {
  return (

      <View style={styles.conteudo}>
        <View style={styles.espacoRow}>
          <View style={[styles.quadrado, styles.espacoLinha]} />
          <View style={[styles.quadrado, styles.espacoLinha]} />
          <View style={styles.quadrado} />
        </View>
        <View style={styles.espacoRow}>
          <View style={[styles.quadrado, styles.espacoLinha]} />
          <View style={[styles.quadrado, styles.espacoLinha]} />
          <View style={styles.quadrado} />
        </View>
        <View style={styles.linhaAzul} />
      </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  quadrado: {
    width: 75,
    height: 75,
    backgroundColor: 'orange',
  },
  espacoRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  linhaAzul: {
    backgroundColor: 'blue',
    height: 60,
    alignSelf: 'stretch',
    marginTop: '70px'
  },
  espacoLinha: {
    marginRight: 30,
  },
});
