import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Facts_Births = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
      {props.image && (
        <Image source={{ uri: props.urlToImage }} style={styles.image} />
      )}
      <View style={styles.textContainer}>
        {props.year && <Text style={styles.year}>{props.year}</Text>}
        <Text style={styles.description}>{props.description}</Text>
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

export default Facts_Births;