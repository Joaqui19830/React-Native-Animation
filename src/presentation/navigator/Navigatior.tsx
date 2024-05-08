import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AlertScreen} from '../screens/alerts/AlertScreen';
import {Animation101Screen} from '../screens/animations/Animation101Screen';
import {Animation102Screen} from '../screens/animations/Animation102Screen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {TextInputScreen} from '../screens/inputs/TextInputScreen';
import {SwitchScreen} from '../screens/switches/SwitchScreen';
import {CustomSectionListScreen} from '../screens/ui/CustomSectionListScreen';
import {InfiniteScrollScreen} from '../screens/ui/InfiniteScrollScreen';
import {ModalScreen} from '../screens/ui/ModalScreen';
import {PullToRefreshScreen} from '../screens/ui/PullToRefreshScreen';

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
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};
