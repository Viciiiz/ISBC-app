import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageZoomViewer from 'react-native-image-zoom-viewer';

const ZoomImage = ({ imagePath }) => {
  
  const imageUrls = [
    {
      url: imagePath,
    },
  ];

  return (
    <View style={styles.container}>
      <ImageZoomViewer imageUrls={imageUrls} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ZoomImage;
