import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  const [Url, setUrl] = useState("");

  useEffect(() => {
    requisicao();
  }, []);
  const requisicao = () => {
    // console.log("Função funcionou!")
    // const myPromise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // reject("Promise não resolvida!");
    //     resolve("Promise resolvida!");
    //   }, 3000);

    // });

    // myPromise.then(Response => console.log(Response))
    // myPromise.catch(erro => console.log("Função NÃO resolvida!"))

    fetch("https://api.thecatapi.com/v1/images/search")
      .then(resp => resp.json())
      .then(dados => {
      const primeiraImagem = dados[0];
      setUrl(primeiraImagem);
      })
      .catch(err => console.log(err))

  }

  return (
    <View style={styles.container}>
      
        <>
          <Image source={{ uri: Url.url }} style={styles.image} />
          <Text style={styles.idText}>ID: {Url.id}</Text>
        </>
      
      <Button 
        title='PRÓXIMA IMAGEM'
        onPress={requisicao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 600,
    height: 600,
    marginVertical: 20,
    borderWidth: 15,
    borderRadius: 15,
    borderColor: 'black',
  },
  idText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
  },
});