import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NewTasks from '../screens/NewTasks';
import AllTasks from '../screens/AllTasks';

const {Navigator, Screen} = createBottomTabNavigator()

export default function Routes() {
  return (
    <Navigator>
      <Screen name="alltasks" component={AllTasks}/>
      <Screen name="newtask" component={NewTasks}/>
    </Navigator>
  )
}