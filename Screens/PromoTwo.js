// Import necessary dependencies
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PromoTwo = () => {
  // Define the clickable boxes data
  const boxesData = [
    { icon: 'ios-calendar', text: 'Schedule', color: '#777777' },
    { icon: 'ios-person', text: 'Speakers', color: '#333333' },
    { icon: 'ios-pin', text: 'Location', color: '#000000' },
    { icon: 'ios-calendar', text: 'Schedule', color: '#777777' },
    { icon: 'ios-person', text: 'Speakers', color: '#333333' },
    { icon: 'ios-pin', text: 'Location', color: '#000000' },
    { icon: 'ios-calendar', text: 'Schedule', color: '#777777' },
    { icon: 'ios-person', text: 'Speakers', color: '#333333' },
    { icon: 'ios-pin', text: 'Location', color: '#000000' },
    { icon: 'ios-calendar', text: 'Schedule', color: '#777777' },
    { icon: 'ios-person', text: 'Speakers', color: '#333333' },
    { icon: 'ios-pin', text: 'Location', color: '#000000' },
    { icon: 'ios-calendar', text: 'Schedule', color: '#777777' },
    { icon: 'ios-person', text: 'Speakers', color: '#333333' },
    { icon: 'ios-pin', text: 'Location', color: '#000000' },
    { icon: 'ios-calendar', text: 'Schedule', color: '#777777' },
    { icon: 'ios-person', text: 'Speakers', color: '#333333' },
    { icon: 'ios-pin', text: 'Location', color: '#000000' },
    
    
    // Add more boxes here as needed
  ];

  // Render the clickable boxes
  const renderBoxes = () => {
    return (
      <View style={styles.boxesContainer}>
        {boxesData.map((box, index) => (
          <TouchableOpacity style={[styles.box, { backgroundColor: box.color }]} key={index} onPress={() => handleBoxPress(box.text)}>
            <Ionicons name={box.icon} size={32} color="#ffffff" />
            <Text style={styles.boxText}>{box.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
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

      {renderBoxes()}
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
    // marginBottom: 16,
    // marginBottom: -8,
  },
  box: {
    width: '50%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0.01,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#d9d9d9',
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
  },
});

export default PromoTwo;
