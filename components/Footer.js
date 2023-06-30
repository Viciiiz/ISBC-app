import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  // Function to handle opening external links
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.heading}>WEBSITES</Text>
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

            <Text style={styles.heading}>SOCIAL MEDIA</Text>
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

                <TouchableOpacity
                style={styles.socialLink}
                onPress={() => handleLinkPress('https://www.youtube.com/')}
                >
                <AntDesign name="youtube" size={24} color="#e4405f" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>© 2023 University Bible Fellowship. All Rights Reserved.</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    // paddingVertical: 10,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
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
    // justifyContent: 'center',
    marginBottom: 30,
    marginTop: 5
  },
  socialLink: {
    marginHorizontal: 10,
  },
  footerText: {
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  footerTextContainer: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    width: '100%',
  },
});

export default Footer;
