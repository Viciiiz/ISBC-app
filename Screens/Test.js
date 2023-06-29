// Import necessary dependencies
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Test = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>His Glory 2023</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome</Text>
        <Text style={styles.sectionContent}>
          Welcome to the His Glory 2023 website. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Schedule</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat augue a sollicitudin.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Speakers</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat augue a sollicitudin.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat augue a sollicitudin.
        </Text>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  logo: {
    width: '100%',
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Test;
