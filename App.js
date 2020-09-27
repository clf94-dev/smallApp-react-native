// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TextScreen from './screens/TextScreen';
import ListScreen from './screens/ListScreen';
import ButtonsDemo from './screens/ButtonsDemo';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ColorButton" component={ButtonsDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
