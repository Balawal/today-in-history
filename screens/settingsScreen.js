import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Switch, Linking } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Font from 'expo-font';

// Define your font loading function
async function loadFonts() {
  await Font.loadAsync({
    Feather: require('react-native-vector-icons/Fonts/Feather.ttf'),
  });
}

const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
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
  const [fontsLoaded, setFontsLoaded] = useState(false); // State to track font loading
  const [form, setForm] = useState({
    language: 'English', // Initialize language label based on current language
    darkMode: true,
  });

  useEffect(() => {
    async function loadAsync() {
      await loadFonts(); // Load fonts asynchronously
      setFontsLoaded(true); // Set the flag to indicate fonts are loaded
    }
    loadAsync();
  }, []);

  if (!fontsLoaded) {
    return <LoadingIndicator />; // Render a loading indicator while fonts are being loaded
  }

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
                      style={styles.row}
                      onPress={() => {
                        if (id === 'bug') {
                          Linking.openURL('mailto:bchaudry818@gmail.com?subject=Bug%20Report');
                        } else if (id === 'contact') {
                          Linking.openURL('mailto:bchaudry818@gmail.com?subject=Contact%20You');
                        }
                      }}>
                      <FeatherIcon
                        color="#616161"
                        name={icon}
                        style={styles.rowIcon}
                        size={22}
                      />
                      <View style={styles.rowContent}>
                        <Text style={styles.rowLabel}>{label}</Text>
                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}
                      </View>
                      <FeatherIcon
                        color="#ababab"
                        name="chevron-right"
                        size={22}
                      />
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

const LoadingIndicator = () => (
  <View style={styles.loadingIndicatorContainer}>
    <Text>Loading...</Text>
  </View>
);

export default SettingsScreen;

const styles = StyleSheet.create({
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
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  rowIcon: {
    marginRight: 12,
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 12,
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
  loadingIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});