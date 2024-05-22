import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Title from './Title';

const Home = ({ navigation }) => {
  
  const logoImg = require('./img1.png');

  return (
    <View style={styles.container}>
      <Title />
      {/* Display the image */}
      <View style={styles.bannerContainer}>
        <Image 
          source={logoImg}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#3a86ff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom:'30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
