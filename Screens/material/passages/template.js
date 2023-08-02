import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../../components/Footer';
// import CustomButton from '../components/CustomButton';
import BackButton from '../../../components/BackButton';

import { isaiah, john, luke, luke2, john2, acts, acts2, revelation } from '../../../content/Passages'



const Template = ({ route }) => {

    useEffect(() => {
      StatusBar.setHidden(true); // show the status bar when the page is mounted

      return () => {
        StatusBar.setHidden(true); // hide the status bar when the page is unmounted
      };
    }, []);

    const { currentPassage } = route.params;

    let currentVar = ""

    if (currentPassage == "Isaiah 6:1-8") {
      currentVar = isaiah;
    } else if (currentPassage == "John 1:1-5 & 14") {
      currentVar = john;
    } else if (currentPassage == "Luke 5:17-26") {
      currentVar = luke;
    } else if (currentPassage == "Luke 5:27-32") {
      currentVar = luke2;
    } else if (currentPassage == "John 19:16-42") {
      currentVar = john2;
    } else if (currentPassage == "Acts 9:1-9") {
      currentVar = acts;
    } else if (currentPassage == "Acts 9:10-22") {
      currentVar = acts2;
    } else {
      currentVar = revelation;
    }  
    
    const navigation = useNavigation();

    const paragraphs = currentVar.passage.split('\n');
    const questions = currentVar.questions.split('\n');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{currentVar.title}</Text>
                {paragraphs.map((paragraph, index) => (
                    <Text style={styles.text} key={index}>
                    {paragraph}
                    </Text>
                ))}
            </View>
            <View style={styles.textContainer}>
              {
                currentVar.questions != "" ?
                <Text style={styles.textTitle}>Questions</Text> : console.log("no questions")
              }
                {questions.map((paragraph, index) => (
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
        padding: 25
      },
      textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingBottom: 10
      }
});

export default Template;

