import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native'; 
import Facts_Births from '../components/facts_births';
import BackToTop from '../navigation/backtotop';
import { useNavigation } from '@react-navigation/native';

const BirthsScreen = () => {
  const [events, setEvents] = useState([]);
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigation = useNavigation();

  const getBirths = async () => {
    try {
      const response = await axios.get(`https://history.muffinlabs.com/date`);
      const data = response.data;
      if (data.data && data.data.Births) {
        const updatedBirths = await Promise.all(
          data.data.Births.map(async (birth) => {
            const birthResponse = await axios.get(birth.links[0].link);
            const eventHtml = birthResponse.data;
            const regex = /<meta property="og:image" content="(.*?)">/;
            const matches = regex.exec(eventHtml);
            if (matches && matches[1]) {
              return {
                ...birth,
                image: matches[1],
              };
            }
            return birth;
          })
        );
        setEvents(updatedBirths);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBirths();
  }, []);

  useEffect(() => {
    // Add listener to scrollY for scroll event
    const scrollListener = scrollY.addListener(({ value }) => {
      // Check if the user has scrolled down
      setShowBackToTop(value > 0);
    });

    return () => {
      // Remove the listener when component unmounts
      scrollY.removeListener(scrollListener);
    };
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
            <Text style={styles.title}>Births</Text>
            <View style={styles.spacer} />
            <Text style={styles.title}>{formattedDate}</Text>
          </View>
        }
        data={events}
        renderItem={({ item }) => (
          <Facts_Births
            image={item.image}
            year={item.year}
            description={item.text}
            link={item.links?.[0]?.link}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
      {showBackToTop && <BackToTop onPress={scrollToTop} />}
    </SafeAreaView>
  );
}

export default BirthsScreen; 

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