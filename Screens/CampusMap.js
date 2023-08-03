// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import ZoomImage from '../components/ZoomImage';

// const CampusMap = () => {
//   const imagePath = require('../assets/campusMap.png'); 

//   return (
//     <View style={styles.container}>
//       <ZoomImage imagePath={imagePath} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default CampusMap;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ZoomableImage from '../components/ZoomableImage';

const CampusMap = () => {
  const imagePath = require('../assets/campus-map.jpg'); 

  return (
    <View style={styles.container}>
      <ZoomableImage imagePath={imagePath} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CampusMap;
