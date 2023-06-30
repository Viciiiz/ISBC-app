// Import necessary dependencies
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Footer from '../components/Footer';

const PromoTwo = () => {


  useEffect(() => {
    StatusBar.setHidden(true); // Hide the status bar when the page is mounted

    return () => {
        StatusBar.setHidden(false); // Show the status bar when the page is unmounted
    };
  }, []);

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

  const bannerData = [
    { image: require('../assets/banner.png') },
    { image: require('../assets/banner2.png') },
    { image: require('../assets/banner3.png') },
  ];
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderBannerItem = ({ item }) => {
    return (
      <Image
        source={item.image}
        style={styles.bannerImage}
        // resizeMode="cover"
        resizeMode="contain"
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      /> */}
      <View style={styles.carouselContainer}>
            <Carousel
              data={bannerData}
              renderItem={renderBannerItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              onSnapToItem={(index) => setActiveSlide(index)}
              contentContainerStyle={styles.carouselContentContainer}
            />
            <Pagination
              dotsLength={bannerData.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
      </View>
      {/* <Text style={styles.title}>His Glory 2023</Text> */}
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
  carouselContainer: {
    marginTop: -StatusBar.currentHeight, // Remove the top padding
  },
  carouselContentContainer: {
    paddingTop: StatusBar.currentHeight, // Adjust the top padding for the carousel content
  },
  containerButtons: {
    // flex: 1,
    // backgroundColor: '#ffffff',
    padding: 16,
  },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 24,
//     textAlign: 'center',
//   },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
    // justifyContent: 'space-between',
    // marginBottom: 16,
    // marginBottom: -8,
  },
  paginationContainer: {
    paddingVertical: 0,
    // paddingHorizontal: 5
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  bannerImage: {
    // width: '100%',
    // height: 200,
    // marginRight: 10,
    // marginTop: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
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
    height: 100,
    marginBottom: 0
  },
});

export default PromoTwo;
