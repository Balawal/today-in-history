import React from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';


const Facts = (props) => {
  return (
    <View style={styles.container}>
      {props.image && (
        <Image source={{ uri: props.image }} style={styles.image} />
      )}
      <View style={styles.textContainer}>
        {props.year && <Text style={styles.year}>{props.year}</Text>}
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
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
  cardContainer: {
    borderRadius: 20,
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
  date: {
    fontSize: 50,
    fontWeight: '600',
    marginTop: 1,
  },
  description: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 5,
  },
});


export default Facts;