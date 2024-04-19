import React, { useState}  from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const defaultImage = 'https://nathangiglierano.com/images/world%20map2.jpg';

const Facts_Deaths = ({ image, year, description, link, navigation }) => {
  const handlePress = () => {
    navigation.navigate('DeathCardScreen', { image, year, description, link});
  };

  const renderImage = image ? (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  ) : (
    <View style={styles.imageContainer}>
      <Image source={{ uri: defaultImage }} style={styles.image} />
    </View>
  );

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {renderImage}
        <View style={styles.textContainer}>
          <Text style={styles.year}>{year}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    padding: 10,
  },
  year: {
    fontSize: 25,
    fontWeight: '600',
  },
  description: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 5,
  },
  learnMore: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default Facts_Deaths;