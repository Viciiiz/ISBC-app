import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, StatusBar } from 'react-native';

import Footer from '../../components/Footer';

const ThursdayFull = () => {
  useEffect(() => {
    StatusBar.setHidden(true); // Hide the status bar when the page is mounted

    return () => {
      StatusBar.setHidden(false); // Show the status bar when the page is unmounted
    };
  }, []);

  const boxesData = [
    { duration: 5, textTitle: 'Registration', textDetail: "", textDetailTwo: "", time: '4:45pm', backgroundColor: '#fff', separation: 'yes', transition: 'no' },
    { duration: 1.75, textTitle: 'Dinner', textDetail: "", textDetailTwo: "", time: '6:30pm', backgroundColor: '#fff', separation: 'yes', transition: 'no' },
    { duration: 1, textTitle: 'Transition', textDetail: "", textDetailTwo: "", time: '7:00pm', backgroundColor: '#fff', separation: 'yes', transition: 'yes' },
    { duration: 4, textTitle: 'The Whole Earth is Full of His Glory', textDetail: "(Isaiah 6:1-8)", textDetailTwo: "David Chang (Canada)", time: '9:00pm', backgroundColor: '#fff', separation: 'no', transition: 'no' },
    { duration: 4, textTitle: '"We Have Seen His Glory!"', textDetail: "(Life Testimonies)", textDetailTwo: "", time: '9:00pm', backgroundColor: '#fff', separation: 'yes', transition: 'no' },
    { duration: 1.75, textTitle: 'Group Bible Study Orientation', textDetail: "", textDetailTwo: "", time: '9:30pm', backgroundColor: '#fff', separation: 'yes', transition: 'no' },
  ]

  const calculateHeight = (duration) => {
    return duration * 50;
  };

  const scheduleRender = () => {
    return (
      <View>
        {boxesData.map((box, index) => (
          <View style={box.transition == 'no' ? styles.singleContainer : null}>
            <View style={[styles.elementContainer, { backgroundColor: box.backgroundColor }, {height: calculateHeight(box.duration)}]} key={index} >
                <Text style={box.transition == 'no' ? styles.elementTitle : styles.elementTitleTransition}>{box.textTitle}</Text>
                {box.textDetail !== "" ? (
                  <Text style={styles.elementDetail}>{box.textDetail}</Text>
                ) : null}
                {box.textDetailTwo !== "" ? (
                  <Text style={styles.elementDetail}>{box.textDetailTwo}</Text>
                ) : null}
                
            </View>
            {box.separation == "yes" ? (
                <View style={styles.separationContainer}>
                  <Text style={styles.time}>{box.time}</Text>
                  <View style={styles.line}/>
                </View>
              ) : null}
            
          </View>
        ))}
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        
        <Text style={styles.title}>Thursday</Text>
      </View>
      <View style={styles.scheduleContainer}>
        {/* <View style={[styles.elementContainer, { height: 300 }]}>
          <Text style={styles.element}>Registration</Text>
        </View>
        <View style={styles.separationContainer}>
          <Text style={styles.time}>4:45pm</Text>
          <View style={styles.line}/>
        </View> */}
        {scheduleRender()}
      </View>
       <Footer />
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    
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
    color: '#1165c6',
    textAlign: 'center',
    marginHorizontal: 50
  },
  elementTitleTransition: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#1165c6',
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
    borderBottomColor: '#1165c6',
    borderBottomWidth: 3
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
    color: '#fff',
    textAlign: 'center',
    // backgroundColor: '#5300EB'
  },
});

export default ThursdayFull;