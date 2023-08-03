
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ZoomableImage from '../components/ZoomableImage';
import BackButton from '../components/BackButton';


const CampusMap = () => {
  const imagePath = require('../assets/campus-map.jpg'); 

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
            <BackButton/>
      </View>
      <ZoomableImage imagePath={imagePath} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    // paddingVertical: 30,
    backgroundColor: '#000'
  },
});

export default CampusMap;
