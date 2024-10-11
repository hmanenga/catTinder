import {View, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MatchesScreen from './src/screens/MatchesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MatchesScreen"
         component={MatchesScreen} options={{title: 'New Matches'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
