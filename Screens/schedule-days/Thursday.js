import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, StatusBar } from 'react-native';

import Footer from '../../components/Footer';

const Thursday = () => {
  useEffect(() => {
    StatusBar.setHidden(true); // Hide the status bar when the page is mounted

    return () => {
      StatusBar.setHidden(false); // Show the status bar when the page is unmounted
    };
  }, []);

  const calculateAspectRatio = (width, height) => {
    return width / height;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       {/* <Text style={styles.title}>Program</Text> */}

      {/* <View style={styles.imageContainer}> */}
        <Image
          source={require('../../assets/thursday-full.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        {/* <Image
          source={require('../assets/thursday-1.jpg')}
          style={[styles.image, { aspectRatio: calculateAspectRatio(750, 2000) }]}
          resizeMode="contain"
        />
  */}
      {/* </View> */}

       <Footer />
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // marginVertical: 0,
  },
  image: {
    // width: Dimensions.get('window').width,
    width: '100%'
    // height: undefined,
    // aspectRatio: 16 / 9,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Thursday;