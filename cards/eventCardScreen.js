import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const defaultImage = 'https://nathangiglierano.com/images/world%20map2.jpg';
const windowHeight = Dimensions.get('window').height;

const EventCardScreen = ({ route, navigation }) => {
  const { image, year, description, link } = route.params;

  const handleLearnMore = () => {
    if (link) {
      navigation.navigate('EventsLinkScreen', { url: link });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: image || defaultImage }} style={[styles.image, { height: windowHeight * 0.4 }]} />
      <View style={styles.content}>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.description}>{description}</Text>
        {link && (
          <TouchableOpacity onPress={handleLearnMore} style={styles.learnMoreButton}>
            <Feather name="arrow-right" size={20} color="white" style={styles.learnMoreIcon} />
            <Text style={styles.learnMoreText}>Find out more</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  year: {
    fontSize: 35,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 5,
  },
  learnMoreButton: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  learnMoreIcon: {
    marginRight: 10,
  },
  learnMoreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EventCardScreen;