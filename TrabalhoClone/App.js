import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Rotas from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}

