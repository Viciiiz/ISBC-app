// import React, { useState } from 'react';
// import { View, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuAnimation = new Animated.Value(0);

//   const toggleMenu = () => {
//     if (isMenuOpen) {
//       Animated.timing(menuAnimation, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: false,
//       }).start(() => setIsMenuOpen(false));
//     } else {
//       setIsMenuOpen(true);
//       Animated.timing(menuAnimation, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     }
//   };

//   const menuTranslateX = menuAnimation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [200, 0],
//   });

//   return (
//     <View style={styles.header}>
//       <TouchableOpacity onPress={toggleMenu}>
//         <Image source={require('../assets/logo.png')} style={styles.logo} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={toggleMenu}>
//         <Ionicons name="menu-outline" size={28} color="black" />
//       </TouchableOpacity>
//       {isMenuOpen && (
//         <Animated.View style={[styles.menu, { transform: [{ translateX: menuTranslateX }] }]}>
//           {/* Your menu content */}
//         </Animated.View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     height: 64,
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 32,
//     height: 32,
//   },
//   menu: {
//     position: 'absolute',
//     top: 64,
//     right: 0,
//     width: 200,
//     height: '100%',
//     backgroundColor: '#fff',
//   },
// });

// export default Header;

import React, { useRef } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.2;

const Header = () => {
  const scrollViewRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo2.png')} 
        style={[styles.logo, { width: imageWidth }]} 
        resizeMode="contain"/>
        <Ionicons name="menu-outline" size={28} color="black" />
      </View>

      {/* <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        scrollEventThrottle={16}
        onScroll={() => {}}
        showsVerticalScrollIndicator={false}
      > */}
        {/* Your page content
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // height: 64,
    backgroundColor: 'transparent'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'transparent',
    height: 64,
  },
  logo: {
    // width: '50%',
    // height: 60,
    aspectRatio: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 64,
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default Header;
