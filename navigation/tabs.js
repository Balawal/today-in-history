import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from "react-native";


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
            headerShown: false,
            tabBarShowLabel : false,
            tabBarStyle: {
                backgroundColor: 'white', 
                position: 'absolute',
                marginHorizontal: 0,
                height: 80,
                borderRadius: 30,
            }
        }}
        >
            
            <Tab.Screen 
                name="What Happened Today" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <ImageBackground
                    source={require('../assets/icons/home.png')}
                    resizeMode="contain"
                    style={{width: 30, height: 30, tintColor: focused ? '#e32f45' : '#748c94'}}
                >
                    
                </ImageBackground>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Births" 
                component={BirthsScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <ImageBackground
                    source={require('../assets/icons/births.png')}
                    resizeMode="contain"
                    style={{width: 30, height: 30, tintColor: focused ? '#e32f45' : '#748c94'}}
                >
                    
                </ImageBackground>
                        </View>
                    ),
                }} 
            
            />
            
            <Tab.Screen
                name="Deaths" 
                component={DeathsScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <ImageBackground
                    source={require('../assets/icons/deaths.png')}
                    resizeMode="contain"
                    style={{width: 30, height: 30, tintColor: focused ? '#e32f45' : '#748c94'}}
                >
                    
                </ImageBackground>
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <ImageBackground
                    source={require('../assets/icons/settings.png')}
                    resizeMode="contain"
                    style={{width: 30, height: 30, tintColor: focused ? '#e32f45' : '#748c94'}}
                >
                    
                </ImageBackground>
                        </View>
                    ),
                }}
            />

            
        </Tab.Navigator>
    );
}

export default Tabs;
