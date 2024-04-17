import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';


const defaultImage = 'https://alameda.edu/wp-content/uploads/2021/07/History.png';

const Facts_Deaths = ({ image, year, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <ImageComponent image={image} />
        <View style={styles.textContainer}>
          <Text style={styles.year}>{year}</Text>
          <Text style={styles.description} numberOfLines={expanded ? undefined : 2}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Memoized Image component
const ImageComponent = React.memo(({ image }) => {
  const renderImage = image ? (
    <Image source={{ uri: image }} style={styles.image} />
  ) : (
    <Image source={{ uri: defaultImage }} style={styles.image} />
  );

  return renderImage;
});

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

export default Facts_Deaths;