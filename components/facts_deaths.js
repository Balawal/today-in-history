import React from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';


const Facts_Deaths = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.cardContainer}>
        {/* image */}
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/e/e1/Alexander_the_Great_mosaic.jpg",
          }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          {/* date */}
          <Text style={styles.date}>323 BC</Text>

          {/* description */}
          <Text style={styles.description}>Alexander the Great</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  cardContainer: {
    borderRadius: 20,
    //overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    padding: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 1,
  },
  description: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },
});

export default Facts_Deaths;