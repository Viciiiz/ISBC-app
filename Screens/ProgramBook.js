// // import React, { useEffect, useState } from 'react';
// // import { View, StyleSheet, Dimensions } from 'react-native';

// import * as React from 'react'
// import { View } from 'react-native'
// import PDFReader from 'expo-pdf-viewer'

// const PDFViewer = () => {
//     return (
//         <PDFReader
//           source={{
//             uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
//           }}
//         />
//       )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//   },
// });

// export default PDFViewer;


import React from 'react';
import { View, Button, Linking } from 'react-native';

const PDFViewer = () => {
  const openPDFInBrowser = async () => {
    const url = 'https://example.com/sample.pdf'; // Replace with the URL to your PDF file

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

  return (
    <View>
      <Button title="Open PDF" onPress={openPDFInBrowser} />
    </View>
  );
};

export default PDFViewer;
