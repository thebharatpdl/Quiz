import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Quizleer</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
