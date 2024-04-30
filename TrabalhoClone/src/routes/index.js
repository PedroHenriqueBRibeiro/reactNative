import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home';

const {Navigator, Screen} = createStackNavigator();
export default function Rotas() {
  return(
    <Navigator>
      <Screen name='home' component={Home}/>
    </Navigator>
  );
}