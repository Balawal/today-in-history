import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import HomeScreen from './screens/homeScreen';
import EventsLinkScreen from './links/eventsLink';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

