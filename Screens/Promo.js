// Import necessary dependencies
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Promo = () => {
  // Define the clickable boxes data
  const boxesData = [
    { icon: 'ios-calendar', text: 'Schedule' },
    { icon: 'ios-person', text: 'Speakers' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    { icon: 'ios-pin', text: 'Location' },
    // Add more boxes here as needed
  ];

  // Render the clickable boxes
  const renderBoxes = () => {
    return boxesData.map((box, index) => (
      <TouchableOpacity style={styles.box} key={index} onPress={() => handleBoxPress(box.text)}>
        <Ionicons name={box.icon} size={32} color="#ffffff" />
        <Text style={styles.boxText}>{box.text}</Text>
      </TouchableOpacity>
    ));
  };

  // Handle box press event
  const handleBoxPress = (text) => {
    // Handle the box press event based on the text
    console.log(`Pressed: ${text}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* <Text style={styles.title}>His Glory 2023</Text> */}

      <View style={styles.boxesContainer}>{renderBoxes()}</View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '32%',
    aspectRatio: 1,
    backgroundColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  boxText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  logo: {
    width: '100%',
    height: 120,
    marginBottom: 20
  },
});

export default Promo;
