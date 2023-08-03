
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ZoomableImage from '../components/ZoomableImage';

const InterestGroupMap = () => {
  const imagePath = require('../assets/ig-map.jpg'); 

  return (
    <View style={styles.container}>
      <ZoomableImage imagePath={imagePath} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InterestGroupMap;
