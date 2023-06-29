import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Promo = () => {

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
      <Carousel
        data={bannerData}
        renderItem={renderBannerItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={bannerData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

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
        <Text style={styles.title}>International Summer Bible Conference 2023</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // width: '100%',
    // margin: 0
  },
  bannerImage: {
    // width: '100%',
    // height: 200,
    // marginRight: 10,
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
  },
  contentContainer: {
    // padding: 20,
    // paddingVertical: 10,
  },
  paginationContainer: {
    paddingVertical: 10,
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