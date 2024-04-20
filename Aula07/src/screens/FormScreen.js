import {useState} from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'

export default function FormScreen() {
 
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setcelular] = useState("")

  const handleForm = () => {

      const contato = {
        nome: nome,
        email: email,
        celular: celular
      }
    console.log('Enviado!', contato);
  }

  return (
    <View>
      <Text>FORM SCREEN</Text>

      <TextInput
      placeholder='Digite seu nome'
      onChangeText={text => setNome(text)}
      value={nome}
      style={{ borderColor:'blue', borderWidth:1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
      placeholder='Digite seu e-mail'
      onChangeText={text => setEmail(text)}
      value={email}
      style={{ borderColor:'blue', borderWidth:1, padding: 10, marginBottom: 10 }}
      keyboardType='email-address'
      />

      <TextInput
      placeholder='Telefone'
      onChangeText={text => setcelular(text)}
      value={celular}
      style={{ borderColor:'blue', borderWidth:1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Enviar" onPress={handleForm} />
    </View>
  )
}