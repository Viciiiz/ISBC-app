import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../../components/Footer';
// import CustomButton from '../components/CustomButton';
import BackButton from '../../../components/BackButton';

import { isaiah } from '../../../content/Passages'



const Template = () => {

    
    const navigation = useNavigation();

    const paragraphs = isaiah.passage.split('\n');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{isaiah.title}</Text>
                {paragraphs.map((paragraph, index) => (
                    <Text style={styles.text} key={index}>
                    {paragraph}
                    </Text>
                ))}
            </View>
            {/* <Footer/> */}
        </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#ffffff',
        flexGrow: 1,
        // padding: 16,
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 8,
        // paddingVertical: 30,
        backgroundColor: '#000'
      },
      text: {
        fontSize: 25,
        marginBottom: 10,
        // textAlign: 'center',
      },
      textContainer: {
        padding: 15
      },
      textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingBottom: 10
      }
});

export default Template;

