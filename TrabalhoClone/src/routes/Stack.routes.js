import {createStackNavigator} from '@react-navigation/stack'
import Home from "../screens/Home";

const {Navigator, Screen} = createStackNavigator();
export default function Stack() {
  return(
    <Navigator >
      <Screen name='Home' component={Home}
      options={{
        headerShown: false,
      }}/>
      
    </Navigator>
  )
}