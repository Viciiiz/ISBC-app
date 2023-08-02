import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Footer from '../components/Footer';
// import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';



const ScheduleCategory = () => {

    const boxesData = [
        { text: 'General', textDetail: '(College & Adults)', color: '#888888' },
        { text: 'HBF', textDetail: '(High School Bible Fellowship)', color: '#555555' },
        { text: 'CBF', textDetail: '(Children Bible Fellowship)', color: '#333333' },
    ]
    
    // Render the clickable boxes
    const renderBoxes = () => {
        return (
          <View style={styles.boxesContainer}>
            {boxesData.map((box, index) => (
              <TouchableOpacity style={[styles.box, { backgroundColor: box.color }]} key={index} onPress={() => handleBoxPress(box.text)}>
                <Text style={styles.boxText}>{box.text}</Text>
                <Text style={styles.boxTextDetail}>{box.textDetail}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      };
    
    const navigation = useNavigation();
    
    // Handle box press event
    const handleBoxPress = (text) => {
        // Handle the box press event based on the text
        if (text == 'General') {
            navigation.navigate('Schedule')
        }
        

        console.log(`Pressed: ${text}`);
      };

    // const handleBackButtonPress = () => {
    //     navigation.goBack();
    //   };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton/>
            </View>
            {/* <ScrollView contentContainerStyle={styles.container}> */}
                <ScrollView contentContainerStyle={styles.containerButtons}>
                    {renderBoxes()}
                </ScrollView>
                
            {/* </ScrollView> */}
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
      containerButtons: {
        // flex: 1,
        // backgroundColor: '#ffffff',
        flexGrow: 1,
        // height: '100%',
        // padding: 0,
      },
      boxesContainer: {
        // flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'flex-start'
      },
      box: {
        width: '100%',
        flex: 1,
        // aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0.01,
        borderRadius: 0,
        borderWidth: 0,
        borderColor: '#d9d9d9',
        // marginVertical: 10
      },
      boxText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 8,
      },
      boxTextDetail: {
        color: '#ffffff',
        fontSize: 20,
        fontStyle: 'italic'
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 10,
        // paddingVertical: 30,
        backgroundColor: '#000'
      },
});

export default ScheduleCategory;

