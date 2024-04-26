import { View, Text, Image, ScrollView } from 'react-native';
import { gatinhos} from '../data/gatinhos'

export default function ListaScreen( {navigation} ) {
  
  return (
    <ScrollView>
      <Text>Gatinhos</Text>
      {gatinhos.map(item => {
        return (
          <View key={item.id}>
            <Image width={200} height={200} source={{uri: item.url}} />
            <Text>{item.url}</Text>
          </View>
        )
      })}
    </ScrollView>
  )

}
