import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import imageLogin from '../../assets/pictures/backGroundLogin.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (email.trim() !== '') {
      navigation.navigate('Password');
    } else {
      alert('Por favor, preencha o campo de email.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={imageLogin} />
      <View style={styles.overlay}>
        <Text style={styles.title}>Qual é o seu email?</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.textButton} onPress={handleContinue}>
            <Text style={styles.textButton}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    marginBottom: 400,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  buttonContainer: {
    width: '82%',
    backgroundColor: '#A4eA4f',
    borderRadius: 10,
    marginVertical: 10,
    top: 0,
    borderWidth: 3,
    borderColor: '#A4FF11',
  },
  imagem: {
    position: 'absolute',
    width: '100%', 
    height: '100%',
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    paddingVertical: 5,
    paddingHorizontal: 40,
    
  }
});
