import { Text, View } from 'react-native';


export default function ItemLista(props) {
  return (
    <View>
      <Text>{props.item}</Text>
    </View>
  );
}