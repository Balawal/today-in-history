import React, { useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Switch, } from 'react-native'; 
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
    {
        header: 'Preferences',
        items: [
          { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
          { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
        ],
      },
      {
        header: 'Help',
        items: [
          { id: 'bug', icon: 'flag', label: 'Report Bug', type: 'link' },
          { id: 'contact', icon: 'mail', label: 'Contact Me', type: 'link' },
        ],
      },
];


const SettingsScreen = () => {
    const [form, setForm] = useState({
        language: 'English',
        darkMode: true,
      });
      return (
        <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
            <View style={styles.header}>
              <Text style={styles.title}>Settings</Text>
            </View>
    
            {SECTIONS.map(({ header, items }) => (
              <View style={styles.section} key={header}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>{header}</Text>
                </View>
                <View style={styles.sectionBody}>
                  {items.map(({ id, label, icon, type, value }, index) => {
                    return (
                      <View
                        key={id}
                        style={[
                          styles.rowWrapper,
                          index === 0 && { borderTopWidth: 0 },
                        ]}>
                        <TouchableOpacity
                          onPress={() => {
                          }}>
                          <View style={styles.row}>
                            <FeatherIcon
                              color="#616161"
                              name={icon}
                              style={styles.rowIcon}
                              size={22}
                            />
    
                            <Text style={styles.rowLabel}>{label}</Text>
    
                            <View style={styles.rowSpacer} />
    
                            {type === 'select' && (
                              <Text style={styles.rowValue}>{form[id]}</Text>
                            )}
    
                            {type === 'toggle' && (
                              <Switch
                              
                              />
                            )}
    
                            {(type === 'select' || type === 'link') && (
                              <FeatherIcon
                                color="#ababab"
                                name="chevron-right"
                                size={22}
                              />
                            )}
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>
            ))}
          
        </SafeAreaView>
      );
}

export default SettingsScreen; 

const styles = StyleSheet.create({
    container: {
      paddingVertical: 24,
    },
    section: {
      paddingTop: 12,
    },
    sectionHeader: {
      paddingHorizontal: 24,
      paddingVertical: 8,
    },
    sectionHeaderText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#a7a7a7',
      textTransform: 'uppercase',
      letterSpacing: 1.2,
    },
    sectionBody: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#e3e3e3',
    },
    header: {
      paddingLeft: 24,
      paddingRight: 24,
      marginBottom: 12,
      marginTop: 20,
    },
    title: {
      fontSize: 29,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      color: '#929292',
    },
    profile: {
      padding: 16,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#e3e3e3',
    },
    profileAvatar: {
      width: 60,
      height: 60,
      borderRadius: 9999,
    },
    profileName: {
      marginTop: 12,
      fontSize: 20,
      fontWeight: '600',
      color: '#090909',
    },
    profileEmail: {
      marginTop: 6,
      fontSize: 16,
      fontWeight: '400',
      color: '#848484',
    },
    profileAction: {
      marginTop: 12,
      paddingVertical: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#007bff',
      borderRadius: 12,
    },
    profileActionText: {
      marginRight: 8,
      fontSize: 15,
      fontWeight: '600',
      color: '#fff',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingRight: 24,
      height: 50,
    },
    rowWrapper: {
      paddingLeft: 24,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderColor: '#e3e3e3',
    },
    rowIcon: {
      marginRight: 12,
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '500',
      color: '#000',
    },
    rowValue: {
      fontSize: 17,
      color: '#616161',
      marginRight: 4,
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
  });