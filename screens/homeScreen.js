import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import Facts from '../components/facts';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;

  const getEvents = async () => {
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    try {
      const response = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`
      );
      const data = response.data;
      if (data.events) {
        setEvents(data.events);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
              <Text style={styles.title}>Today</Text>
              <View style={styles.spacer} />
              <Text style={styles.title}>{formattedDate}</Text>
          </View>
          <FlatList
            data={events}
            renderItem={({ item }) => (
              <Facts
                image={item.thumbnail?.source}
                year={item.year}
                description={item.text}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
      paddingLeft: 24,
      paddingRight: 24,
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
  },
    title: {
      fontSize: 29,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 6,
  },
  container: {
      paddingVertical: 24,
  },
  spacer: {
    flex: 1,
  },
});