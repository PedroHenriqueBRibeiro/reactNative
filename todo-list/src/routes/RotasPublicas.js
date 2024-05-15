import { createStackNavigator } from "@react-navigation/stack";


const {Navigator, Screen} = createStackNavigator()
const RotasPublicas = () => {
  return (
    <Navigator>
      <Screen name='login' component={login}/>
    </Navigator>
  )

}

export default RotasPublicas;