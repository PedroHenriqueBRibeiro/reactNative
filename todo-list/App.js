import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>TODO LIST</Text>
    //   <Button
    //     title="POST - StoreTask"
    //     onPress={() => storeTask({
    //       title: "Estudar React Native",
    //       description: "React Navigation, Async, Contexto...",
    //       priority: "alta",
    //     })}
    //     />
    //     <Text> </Text>
    //   <Button
    //     title="GET - getAllTasks"
    //     onPress={() => getAllTasks({
    //     })}
    //     />
    // </View>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
