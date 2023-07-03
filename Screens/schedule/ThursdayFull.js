import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../components/Footer';

const ThursdayFull = () => {
  useEffect(() => {
    StatusBar.setHidden(true); // Hide the status bar when the page is mounted

    return () => {
      StatusBar.setHidden(false); // Show the status bar when the page is unmounted
    };
  }, []);

  const boxesData = [
    { duration: 5, textTitle: 'Registration', textDetail: "", textDetailTwo: "", time: '4:45pm', backgroundColor: '#fff', separation: 'yes', transition: 'no', done: 'yes' },
    { duration: 1.75, textTitle: 'Dinner', textDetail: "", textDetailTwo: "", time: '6:30pm', backgroundColor: '#fff', separation: 'yes', transition: 'no', done: 'yes' },
    { duration: 1, textTitle: 'Transition', textDetail: "", textDetailTwo: "", time: '7:00pm', backgroundColor: '#fff', separation: 'yes', transition: 'yes', done: 'no' },
    { duration: 3, textTitle: 'The Whole Earth is Full of His Glory', textDetail: "(Isaiah 6:1-8)", textDetailTwo: "David Chang (Canada)", time: '9:00pm', backgroundColor: '#fff', separation: 'no', transition: 'no', done: 'no' },
    { duration: 4, textTitle: '"We Have Seen His Glory!"', textDetail: "(Life Testimonies)", textDetailTwo: "", time: '9:00pm', backgroundColor: '#fff', separation: 'yes', transition: 'no', done: 'no' },
    { duration: 1.75, textTitle: 'Group Bible Study Orientation', textDetail: "", textDetailTwo: "", time: '9:30pm', backgroundColor: '#fff', separation: 'yes', transition: 'no', done: 'no' },
  ]

  const calculateHeight = (duration) => {
    return duration * 50;
  };

  const scheduleRender = () => {
    return (
      <View>
        {boxesData.map((box, index) => (
          <View style={box.transition == 'no' ? styles.singleContainer : null} key={index} >
            <View style={[styles.elementContainer, { backgroundColor: box.backgroundColor }, {height: calculateHeight(box.duration)}]}>
                <Text style={[
                  box.transition === 'no' ? styles.elementTitle : styles.elementTitleTransition,
                  { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }
                ]}>{box.textTitle}</Text>
                {box.textDetail !== "" ? (
                  <Text style={[styles.elementDetail,
                    { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}>{box.textDetail}</Text>
                ) : null}
                {box.textDetailTwo !== "" ? (
                  <Text style={[styles.elementDetail,
                    { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}>{box.textDetailTwo}</Text>
                ) : null}
                
            </View>
            {box.separation == "yes" ? (
                <View style={styles.separationContainer}>
                  <Text style={[styles.time,
                  { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}>{box.time}</Text>
                  <View style={[styles.line,
                  { borderBottomColor: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}/>
                </View>
              ) : null}
            
          </View>
        ))}
      </View>
    );
  }

  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <View style={styles.titleContainer}>
        
        <Text style={styles.title}>Thursday</Text>
      </View> */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
          <Ionicons style={styles.backButtonIcon} name='ios-arrow-back-circle-outline' size={20} color="#ffffff" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Thursday</Text>
      </View>
      <View style={styles.scheduleContainer}>
        {scheduleRender()}
      </View>
       <Footer />
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#5300EB',
    // alignItems: 'center',
    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 10,
    // paddingVertical: 30,
    backgroundColor: '#5300EB'
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    borderColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 15,
    // padding: 10
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
  },
  backButtonIcon: {
    paddingLeft: 10
  },
  singleContainer: {
    padding: 5
  },
  titleContainer: {
    backgroundColor: '#5300EB',
  },
  scheduleContainer: {
    margin: 20,
    backgroundColor: '#fff'
  },
  elementContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  elementTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    // color: '#1165c6',
    textAlign: 'center',
    marginHorizontal: 50
  },
  elementTitleTransition: {
    fontSize: 20,
    // fontWeight: '',
    // color: '#1165c6',
    textAlign: 'center',
    marginHorizontal: 50
  },
  elementDetail: {
    fontSize: 20,
    color: '#1165c6',
  },
  separationContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start'
  },
  time: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#1165c6',
    padding: 0,
    marginTop: -20
  },
  line: {
    // borderBottomColor: '#1165c6',
    borderBottomWidth: 3
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    // margin: 20,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
    // paddingTop: 10
    // backgroundColor: '#5300EB'
  },
});

export default ThursdayFull;