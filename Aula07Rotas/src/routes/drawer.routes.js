import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ListaScreen from "../screens/Lista";
import ProfileScreen from "../screens/ProfileScreen";
import FormScreen from "../screens/FormScreen";



const { Navigator, Screen } = createDrawerNavigator()
export default function Drawer() {
  return (
    <Navigator>

      <Screen name="home" component={HomeScreen}/>

      <Screen name="lista" component={ListaScreen}/>

      <Screen name="profile" component={ProfileScreen}/>

      <Screen name="Formulário" component={FormScreen}/>

    </Navigator>
  )
}