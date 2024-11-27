import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const logoImg = require('./img1.png');

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Result</Text>
      </View>
      <Text style={styles.scoreText}>Your Score: {score}</Text>
      <View style={styles.bannerContainer}>
        {/* <Image 
          source={logoImg}
          style={styles.banner}
          resizeMode="contain"
        /> */}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 21,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    marginVertical:100,
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    backgroundColor: '#3a86ff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
