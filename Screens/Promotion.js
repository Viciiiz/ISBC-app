import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Promotion = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/banner.png')}
        style={styles.bannerImage}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>International Summer Bible Conference 2023</Text>
        <Text style={styles.description}>
          Join us for the International Summer Bible Conference 2023, where we will explore
          the depths of the Scriptures and grow in our faith together. This conference
          features renowned speakers, engaging workshops, and opportunities for fellowship
          with believers from around the world.
        </Text>

        <Text style={styles.subTitle}>Highlights:</Text>
        <Text style={styles.highlightItem}>- Inspirational Messages</Text>
        <Text style={styles.highlightItem}>- Interactive Workshops</Text>
        <Text style={styles.highlightItem}>- Global Fellowship</Text>
        <Text style={styles.highlightItem}>- Worship and Praise</Text>

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
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 20,
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

export default Promotion;
