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
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>WEBSITES</Text>
            </View>
            
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

            {/* <View style={styles.headingContainer}>
                <Text style={styles.heading}>SOCIAL MEDIA</Text>
            </View> */}
            <View style={styles.socialContainer}>
                <TouchableOpacity
                style={styles.socialLink}
                onPress={() => handleLinkPress('https://www.facebook.com/universitybiblefellowship')}
                >
                <FontAwesome name="facebook" size={26} color="#3b5998" />
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.socialLink}
                onPress={() => handleLinkPress('https://twitter.com/ubfworldmission')}
                >
                <AntDesign name="twitter" size={26} color="#00acee" />
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.socialLink}
                onPress={() => handleLinkPress('https://www.instagram.com/universitybiblefellowship/')}
                >
                <AntDesign name="instagram" size={26} color="#e4405f" />
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.socialLink}
                onPress={() => handleLinkPress('https://www.youtube.com/@UBFTV')}
                >
                <AntDesign name="youtube" size={26} color="#e4405f" />
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
    paddingTop: 80,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linksContainer: {
    marginBottom: 10,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    margin: 0,
    padding: 0
  },
  linkText: {
    color: '#00f',
    // fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 5
  },
  socialLink: {
    marginHorizontal: 10,
    paddingTop: 10
  },
  footerText: {
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    fontSize: 15
  },
  footerTextContainer: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    width: '100%',
  },
});

export default Footer;
