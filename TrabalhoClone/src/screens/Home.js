import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import image from '../../assets/pictures/backgroundFoto2.png';
import imageGoogle from '../../assets/pictures/google.png';
import imageFacebook from '../../assets/pictures/facebook.png';

export default function Home({navigation}) {


  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={image} />
      <View style={styles.overlay}>

        <View >
          <Text style={styles.criarConta}>Crie a sua conta no</Text>
        </View>

        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NovaConta')}>
          <Text style={styles.buttonText}>Inscreva-se por Email</Text>
        </TouchableOpacity>

        <Text style={styles.ouText}>OU</Text>

        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('EmailScreen')}>
          <Image style={styles.icon} source={imageGoogle} />
          <Text style={styles.buttonText2}>Continue com Google</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('EmailScreen')}>
          <Image style={styles.icon} source={imageFacebook} />
          <Text style={styles.buttonText2}>Continue com Facebook</Text>
        </TouchableOpacity>
      </View>
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
  imagem: {
    position: 'absolute',
    width: '100%', 
    height: '100%',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ouText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    top: 130,
  },
  button: {
    backgroundColor: '#A4eA4f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 10,
    top: 130,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  button2: {
    backgroundColor: '#808080',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    top: 130,
    width: '96%',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '950',
  },

  buttonText2: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginHorizontal: 32,
    
  },

  criarConta: {
    bottom: 40,
    color: 'white',
    fontSize: 30,
    fontWeight: '900'
  },

  icon: {
    width: 15,
    height: 15,


  },


});