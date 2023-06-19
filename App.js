import React, { useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navigation/tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;

