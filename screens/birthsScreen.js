import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native'; 
import Facts_Births from '../components/facts_births';

const BirthsScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Births</Text>
                </View>
                <Facts_Births/>
                <Facts_Births/>
                <Facts_Births/>
            </ScrollView>
      
        </SafeAreaView>
    )
}

export default BirthsScreen; 

const styles = StyleSheet.create({
    header: {
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 12,
    },
      title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6,
    },
    container: {
        paddingVertical: 24,
    },
});