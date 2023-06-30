import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, StatusBar } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Footer from '../components/Footer';


const Promo = () => {

  useEffect(() => {
    StatusBar.setHidden(true); // Hide the status bar when the page is mounted

    return () => {
      StatusBar.setHidden(false); // Show the status bar when the page is unmounted
    };
  }, []);

  const bannerData = [
    { image: require('../assets/banner.png') },
    { image: require('../assets/banner2.png') },
    { image: require('../assets/banner3.png') },
  ];
  const [activeSlide, setActiveSlide] = React.useState(0);

  // const componentDidMount = () => {
  //   StatusBar.setHidden(true); // Hide the status bar when the page is mounted
  // }

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
    <ScrollView>
        <ScrollView style={styles.container}>
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

          {/* <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Image
              source={require('../assets/banner.png')}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            <Image
              source={require('../assets/banner.png')}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            <Image
              source={require('../assets/banner.png')}
              style={styles.bannerImage}
              resizeMode="cover"
            />
          </ScrollView> */}

          <View style={styles.contentContainer}>
            <Text style={styles.title}>Innternational Summer Bible Conference 2023</Text>
            <Text style={styles.description}>
              Join us for the International Summer Bible Conference 2023, where we will explore
              the depths of the Scriptures and grow in our faith together. This conference
              features renowned speakers, engaging workshops, and opportunities for fellowship
              with believers from around the world.
            </Text>

            <Text style={styles.subTitle}>Highlights:</Text>
            <View style={styles.highlightContainer}>
              <Image
                source={require('../assets/banner.png')}
                style={styles.highlightIcon}
                resizeMode="contain"
              />
              <Text style={styles.highlightItem}>Inspirational Messages</Text>
            </View>
            <View style={styles.highlightContainer}>
              <Image
                source={require('../assets/banner.png')}
                style={styles.highlightIcon}
                resizeMode="contain"
              />
              <Text style={styles.highlightItem}>Interactive Workshops</Text>
            </View>
            <View style={styles.highlightContainer}>
              <Image
                source={require('../assets/banner.png')}
                style={styles.highlightIcon}
                resizeMode="contain"
              />
              <Text style={styles.highlightItem}>Global Fellowship</Text>
            </View>
            <View style={styles.highlightContainer}>
              <Image
                source={require('../assets/banner.png')}
                style={styles.highlightIcon}
                resizeMode="contain"
              />
              <Text style={styles.highlightItem}>Worship and Praise</Text>
            </View>

            <Text style={styles.date}>July 15-18, 2023</Text>
            <Text style={styles.location}>San Francisco, CA</Text>
            <Text style={styles.registrationInfo}>
              Register now to reserve your spot and be part of this life-changing event!
            </Text>

            <Image
              source={require('../assets/banner.png')}
              style={styles.registerButton}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
        <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: StatusBar.currentHeight
    // width: '100%',
    // margin: 0
  },
  carouselContainer: {
    marginTop: -StatusBar.currentHeight, // Remove the top padding
  },
  carouselContentContainer: {
    paddingTop: StatusBar.currentHeight, // Adjust the top padding for the carousel content
  },
  bannerImage: {
    // width: '100%',
    // height: 200,
    // marginRight: 10,
    // marginTop: 0,
    // padding: 0,
    marginTop: -1,
    padding: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
  },
  contentContainer: {
    // padding: 20,
    // paddingVertical: 10,
  },
  paginationContainer: {
    paddingTop: 0,
    paddingBottom: 15
    // paddingHorizontal: 5
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  highlightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  highlightIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    },
  highlightItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
  },
  registrationInfo: {
    fontSize: 16,
    marginBottom: 20,
  },
  registerButton: {
    width: '100%',
    height: 60,
  },
});

export default Promo;