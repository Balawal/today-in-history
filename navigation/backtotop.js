import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const BackToTop = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>↑</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 90,
    right: 10,
    backgroundColor: '#000000',
    borderRadius: 90,
    padding: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default BackToTop;