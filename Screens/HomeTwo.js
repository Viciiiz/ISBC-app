// Import necessary dependencies
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, StatusBar, Linking } from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// import Carousel, { Pagination } from 'react-native-snap-carousel';

import Footer from '../components/Footer';
import Header from '../components/Header';

const HomeTwo = () => {

  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setHidden(true); // Hide the status bar when the page is mounted

    return () => {
        StatusBar.setHidden(false); // Show the status bar when the page is unmounted
    };
  }, []);

  // open program book pdf in browser
  const openPDFInBrowser = async () => {
    const url = 'https://drive.google.com/file/d/1L45XOO87PWc2WGf7O6wudBAq5EWR_iHc/view?usp=sharing'; 

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.warn("Don't know how to open this URL:", url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  // Define the clickable boxes data
  const boxesData = [
    { icon: 'calendar', text: 'Schedule & Program', color: '#777777' },
    { icon: 'desktop', text: 'Website', color: '#333333' },
    { icon: 'book', text: 'Program Book', color: '#ff3f3f' },
    { icon: 'map', text: 'Campus Map', color: '#000000' },
    { icon: 'newspaper', text: 'Bible Study Material', color: '#000000' },
    // { icon: 'ios-calendar', text: 'Schedule', color: '#777777' },
    { icon: 'people', text: 'Interest Group', color: '#777777' },
    { icon: 'list', text: 'Poll', color: '#333333' },
    { icon: 'information', text: 'Help', color: '#000000' },
    { icon: 'chatbox', text: 'Requests & Feedback', color: '#777777' },
    { icon: 'person', text: 'Profile', color: '#333333' },
    // { icon: 'ios-alert', text: 'Live News', color: '#333333' },
    
    // Add more boxes here as needed
  ];
  

  // Render the clickable boxes
  const renderBoxes = () => {
    return (
      <View style={styles.boxesContainer}>
        {boxesData.map((box, index) => (
          <TouchableOpacity style={[styles.box, { backgroundColor: box.color }]} key={index} onPress={() => handleBoxPress(box.text)}>
            <Ionicons name={box.icon} size={40} color="#ffffff" />
            <Text style={styles.boxText}>{box.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Handle box press event
  const handleBoxPress = (text) => {
    // Handle the box press event based on the text
    if(text == "Website") {
        Linking.openURL("https://isbc.ubf.org");
    } else if(text == "Schedule & Program") {
        navigation.navigate('ScheduleCategory')
    // } else if(text == "Profile") {
    //     navigation.navigate('Profile')
    } else if(text == "Bible Study Material") {
        navigation.navigate('Passages')
    } else if(text == "Program Book") {
        openPDFInBrowser()
    } else if(text == "Campus Map") {
        navigation.navigate('Campus-Map')
    } else if(text == "Interest Group") {
      navigation.navigate('IG-Menu')
    } 
    console.log(`Pressed: ${text}`);
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.containerButtons}>
        {renderBoxes()}
      </ScrollView>
      <Footer/>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    // padding: 16,
  },
  containerButtons: {
    // flex: 1,
    // backgroundColor: '#ffffff',
    padding: 0,
  },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  paginationContainer: {
    paddingVertical: 0,
    // paddingHorizontal: 5
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
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default HomeTwo;
