import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ActivityIndicator, View, Image, StyleSheet} from 'react-native';
import Tabs from './navigation/tabs';
import EventsLinkScreen from './links/eventsLink';
import BirthsLinkScreen from './links/birthsLink';
import DeathsLinkScreen from './links/deathsLink';
import EventCardScreen from './cards/eventCardScreen';
import BirthCardScreen from './cards/birthCardScreen';
import DeathCardScreen from './cards/deathCardScreen';
import ChatbotScreen from './components/chatBot';

const Stack = createStackNavigator();

const CustomHeaderBackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginLeft: 15 }}>
    <FontAwesome name="angle-left" size={40} color="black" />
  </TouchableOpacity>
);

const SplashScreen = () => (
  <View style={styles.container}>
    <Image source={require('./assets/icons/splash.png')} style={styles.image} />
    <ActivityIndicator size="large" color="#000000" style={styles.activityIndicator} />
  </View>
);

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  if (!isReady) {
    return <SplashScreen />;
  }

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
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
        <Stack.Screen
          name="ChatbotScreen"
          component={ChatbotScreen}
          options={({ navigation }) => ({ 
            title: 'Chatbot',
            headerLeft: () => <CustomHeaderBackButton onPress={() => navigation.goBack()} color="white" />,
            headerStyle: {
              backgroundColor: '#003366', // Navy blue background for ChatbotScreen
              elevation: 4, // Add shadow for Android
              shadowColor: '#000', // Shadow color for iOS
              shadowOffset: { width: 0, height: 2 }, // Shadow offset
              shadowOpacity: 0.1, // Shadow opacity
              shadowRadius: 4, // Shadow blur radius
            },
            headerTitleStyle: {
              color: '#FFFFFF', // Set the title color to white
              fontWeight: 'bold', // Make the title bold
            },
            headerTitleAlign: 'center', // Center the title
            headerShown: true, // Ensure header is shown
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  activityIndicator: {
    marginTop: 20,
  },
});

export default App;