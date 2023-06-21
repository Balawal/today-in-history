import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BackToTop = ({ scrollViewRef }) => {
  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={scrollToTop}>
      <Text style={styles.buttonText}>Go Back to Top</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BackToTop;