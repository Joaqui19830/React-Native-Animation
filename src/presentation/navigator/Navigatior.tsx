import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Animation101Screen} from '../screens/animations/Animation101Screen';
import {HomeScreen} from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    // Aca con el sceenOptions quitamos el header
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
    </Stack.Navigator>
  );
};
