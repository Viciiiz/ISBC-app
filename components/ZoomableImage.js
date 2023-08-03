import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const ZoomableImage = ({ imagePath }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        maximumZoomScale={4}
        minimumZoomScale={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bouncesZoom
      >
        <Image source={imagePath} style={styles.image} resizeMode="contain" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width, // Set width to the device's width
    height: Dimensions.get('window').height, // Set height to the device's height
  },
});

export default ZoomableImage;
