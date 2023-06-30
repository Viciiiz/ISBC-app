import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  // Function to handle opening external links
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Websites:</Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleLinkPress('https://isbc2023.ubf.org/')}
        >
          <Text style={styles.linkText}>isbc.ubf.org</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleLinkPress('https://ubf.org/')}
        >
          <Text style={styles.linkText}>ubf.org</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.heading}>Social Media:</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialLink}
          onPress={() => handleLinkPress('https://www.facebook.com/')}
        >
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialLink}
          onPress={() => handleLinkPress('https://www.twitter.com/')}
        >
          <AntDesign name="twitter" size={24} color="#00acee" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialLink}
          onPress={() => handleLinkPress('https://www.instagram.com/')}
        >
          <AntDesign name="instagram" size={24} color="#e4405f" />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>© 2023 University Bible Fellowship. All Rights Reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linksContainer: {
    marginBottom: 10,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  link: {
    marginBottom: 5,
  },
  linkText: {
    color: '#000',
    // fontWeight: 'bold',
    // textDecorationLine: 'underline',
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  socialLink: {
    marginHorizontal: 10,
  },
  footerText: {
    color: '#777',
    textAlign: 'center',
  },
});

export default Footer;
