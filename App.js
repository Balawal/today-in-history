import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import EventsLinkScreen from './links/eventsLink';
import BirthsLinkScreen from './links/birthsLink';
import DeathsLinkScreen from './links/deathsLink';
import EventCardScreen from './cards/eventCardScreen';
import BirthCardScreen from './cards/birthCardScreen';
import DeathCardScreen from './cards/deathCardScreen';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Back"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventsLinkScreen"
          component={EventsLinkScreen}
          options={{ headerTitle: 'Browser' }}
        />
        <Stack.Screen
          name="BirthsLinkScreen"
          component={BirthsLinkScreen}
          options={{ headerTitle: 'Browser' }}
        />
        <Stack.Screen
          name="DeathsLinkScreen"
          component={DeathsLinkScreen}
          options={{ headerTitle: 'Browser' }}
        />
        <Stack.Screen
          name="EventCardScreen"
          component={EventCardScreen}
          options={{ headerTitle: 'stuff' }}
        />
        <Stack.Screen
          name="BirthCardScreen"
          component={BirthCardScreen}
          options={{ headerTitle: 'stuff' }}
        />
        <Stack.Screen
          name="DeathCardScreen"
          component={DeathCardScreen}
          options={{ headerTitle: 'stuff' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

