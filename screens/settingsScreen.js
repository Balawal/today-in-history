import React, { useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Switch, Linking } from 'react-native'; 
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
    language: 'English', // Initialize language label based on current language
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
                      if (id === 'bug') {
                        Linking.openURL('mailto:bchaudry818@gmail.com?subject=Bug%20Report');
                      } else if (id === 'contact') {
                        Linking.openURL('mailto:bchaudry818@gmail.com?subject=Contact%20You');
                      } 
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
                          // Implement dark mode toggle if needed
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