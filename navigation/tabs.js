import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from "react-native";
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
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: "red",
            headerShown: false,
            tabBarShowLabel : false,
            tabBarStyle: {
                backgroundColor: '#ffc300', 
                position: 'absolute',
                marginHorizontal: 0,
                height: 80,
                borderRadius: 40,
            }
        }}
        >
            
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: () => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <AntDesign name="home" size={27} color="black" />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Births" 
                component={BirthsScreen} 
                options={{
                    tabBarIcon: () => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <AntDesign name="calendar" size={27} color="black" />
                        </View>
                    ),
                }} 
            
            />
            
            <Tab.Screen
                name="Deaths" 
                component={DeathsScreen} 
                options={{
                    tabBarIcon: () => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Ionicons name="skull-outline" size={27} color="black" />
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarIcon: () => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Feather name="settings" size={27} color="black" />
                        </View>
                    ),
                }}
            />

            
        </Tab.Navigator>
    );
}

export default Tabs;
