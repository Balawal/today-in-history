import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

//Screens
import HomeScreen from "../screens/homeScreen";
import BirthsScreen from "../screens/birthsScreen";
import DeathsScreen from "../screens/deathsScreen";
import SettingsScreen from "../screens/settingsScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#cc9900',     //009933
                    position: 'absolute',
                    marginHorizontal: 0,
                    height: 80,
                    borderRadius: 40,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Births') {
                        iconName = 'calendar';
                    } else if (route.name === 'Deaths') {
                        iconName = 'skull-outline';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            {route.name === 'Home' ? (
                                <AntDesign name={iconName} size={size} color={focused ? 'black' : 'white'} />
                            ) : route.name === 'Births' ? (
                                <AntDesign name={iconName} size={size} color={focused ? 'black' : 'white'} />
                            ) : route.name === 'Deaths' ? (
                                <Ionicons name={iconName} size={size} color={focused ? 'black' : 'white'} />
                            ) : (
                                <Feather name={iconName} size={size} color={focused ? 'black' : 'white'} />
                            )}
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Births" component={BirthsScreen} />
            <Tab.Screen name="Deaths" component={DeathsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;