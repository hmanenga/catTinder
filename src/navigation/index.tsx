import HomeScreen from '../screens/HomeScreen/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MatchesScreen from '../screens/MatchesScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="MatchesScreen"
          component={MatchesScreen}
          options={{title: 'New Matches'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
