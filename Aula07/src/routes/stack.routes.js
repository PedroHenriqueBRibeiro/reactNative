import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ListaScreen from "../screens/Lista";

const {Navigator, Screen} = createStackNavigator();

export default function Stack() {
  return (
    <Navigator>
      <Screen name='home' component={HomeScreen} options={{title: "Página Inicial", headerTintColor: "blue", headerShown: true}}/>
      <Screen name='profile' component={ProfileScreen}/>
      <Screen name='lista' component={ListaScreen} />
    </Navigator>

  )
}