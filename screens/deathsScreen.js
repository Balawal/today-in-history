import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Animated } from 'react-native'; 
import Facts_Deaths from '../components/facts_deaths';
import BackToTop from '../navigation/backtotop';

const DeathsScreen = () => {
  const [events, setEvents] = useState([]);
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  const getDeaths = async () => {
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
  
    try {
      const response = await axios.get(`https://history.muffinlabs.com/date`);
      const data = response.data;
      if (data.data && data.data.Deaths) {
        const updatedDeaths = await Promise.all(
          data.data.Deaths.map(async (death) => {
            const deathResponse = await axios.get(death.links[0].link);
            const eventHtml = deathResponse.data;
            const regex = /<meta property="og:image" content="(.*?)">/;
            const matches = regex.exec(eventHtml);
            if (matches && matches[1]) {
              return {
                ...death,
                image: matches[1],
              };
            }
            return death;
          })
        );
        setEvents(updatedDeaths);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDeaths();
  }, []);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };


  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <Animated.FlatList
        ref={flatListRef}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Deaths</Text>
            <View style={styles.spacer} />
            <Text style={styles.title}>{formattedDate}</Text>
          </View>
        }
        data={events}
        renderItem={({ item }) => (
          <Facts_Deaths
            image={item.image}
            year={item.year}
            description={item.text}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
      {<BackToTop scrollViewRef={flatListRef} onPress={scrollToTop} />}
    </SafeAreaView>
  );
}

export default DeathsScreen; 

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