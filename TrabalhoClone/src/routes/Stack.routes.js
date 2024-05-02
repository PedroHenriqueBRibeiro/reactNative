import {createStackNavigator} from '@react-navigation/stack'
import Home from "../screens/Home";
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import NovaConta from '../screens/NovaConta';
import Game from '../screens/Game';

const {Navigator, Screen} = createStackNavigator();
export default function Stack() {
  return(
    <Navigator >
      <Screen name='Home' component={Home}
      options={{
        headerShown: false,
      }}/>
      <Screen name='EmailScreen' component={EmailScreen}
      options={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}/>
      <Screen
        name="Password"
        component={PasswordScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="NovaConta"
        component={NovaConta}
        options={{ headerShown: false }}
      />
      <Screen
        name="Game"
        component={Game}
     
      />
     

    </Navigator>
  )
}