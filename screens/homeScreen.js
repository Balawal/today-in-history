import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import Facts from '../components/facts';
import BackToTop from '../navigation/backtotop';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  const scrollViewRef = useRef();

  const getEvents = async () => {
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
  
    try {
      const response = await axios.get(`https://history.muffinlabs.com/date`);
      const data = response.data;
      if (data.data && data.data.Events) {
        const updatedEvents = await Promise.all(
          data.data.Events.map(async (event) => {
            const eventResponse = await axios.get(event.links[0].link);
            const eventHtml = eventResponse.data;
            const regex = /<meta property="og:image" content="(.*?)">/;
            const matches = regex.exec(eventHtml);
            if (matches && matches[1]) {
              return {
                ...event,
                image: matches[1],
              };
            }
            return event;
          })
        );
        setEvents(updatedEvents);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const scrollListener = scrollViewRef.current.addEventListener('scroll', handleScroll);
    return () => {
      scrollViewRef.current.removeEventListener('scroll', scrollListener);
    };
  }, []);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView ref={scrollViewRef}contentContainerStyle={styles.container}>
          <View style={styles.header}>
              <Text style={styles.title}>Today</Text>
              <View style={styles.spacer} />
              <Text style={styles.title}>{formattedDate}</Text>
          </View>
          <FlatList
            data={events}
            renderItem={({ item }) => (
              <Facts
                image={item.image}
                year={item.year}
                description={item.text}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <BackToTop scrollViewRef={scrollViewRef}/>
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