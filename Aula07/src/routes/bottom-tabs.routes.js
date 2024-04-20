import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ListaScreen from '../screens/Lista'
import ProfileScreen from '../screens/ProfileScreen'
import { FontAwesome } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator()

export default function Tab() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{tabBarIcon: ({size, color}) => (<FontAwesome name="home" size={30} color="black"/>)
      }} 
      />
      <Screen 
        name="lista"
        component={ListaScreen}
        options={{tabBarIcon: ({size, color}) => (<FontAwesome name="th-list" size={30} color="black"/>)
      }} 
        
      />
      <Screen 
        name="profile" 
        component={ProfileScreen}
        options={{tabBarIcon: ({size, color}) => (<FontAwesome name="user" size={30} color="black"/>)
      }} 
        
      />
    </Navigator>
  )
}