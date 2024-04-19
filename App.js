import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Tabs from './navigation/tabs';
import EventsLinkScreen from './links/eventsLink';
import BirthsLinkScreen from './links/birthsLink';
import DeathsLinkScreen from './links/deathsLink';
import EventCardScreen from './cards/eventCardScreen';
import BirthCardScreen from './cards/birthCardScreen';
import DeathCardScreen from './cards/deathCardScreen';

const Stack = createStackNavigator();

const CustomHeaderBackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginLeft: 15 }}>
    <FontAwesome name="angle-left" size={40} color="black" />
  </TouchableOpacity>
);

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f0f0f0', // Example background color
          },
          headerTitleStyle: {
            fontWeight: 'bold', // Example font weight
          },
          headerTitleAlign: 'center', // Center the header title
        }}
      >
        <Stack.Screen
          name="Back"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventsLinkScreen"
          component={EventsLinkScreen}
          options={({ navigation }) => ({ 
            title: 'Browser',
            headerLeft: () => <CustomHeaderBackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name="BirthsLinkScreen"
          component={BirthsLinkScreen}
          options={({ navigation }) => ({ 
            title: 'Browser',
            headerLeft: () => <CustomHeaderBackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name="DeathsLinkScreen"
          component={DeathsLinkScreen}
          options={({ navigation }) => ({ 
            title: 'Browser',
            headerLeft: () => <CustomHeaderBackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name="EventCardScreen"
          component={EventCardScreen}
          options={({ navigation }) => ({ 
            title: 'Details',
            headerLeft: () => <CustomHeaderBackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name="BirthCardScreen"
          component={BirthCardScreen}
          options={({ navigation }) => ({ 
            title: 'Details',
            headerLeft: () => <CustomHeaderBackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name="DeathCardScreen"
          component={DeathCardScreen}
          options={({ navigation }) => ({ 
            title: 'Details',
            headerLeft: () => <CustomHeaderBackButton onPress={() => navigation.goBack()} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

