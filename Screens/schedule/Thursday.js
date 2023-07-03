import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../components/Footer';

const Thursday = () => {
  useEffect(() => {
    StatusBar.setHidden(false); // show the status bar when the page is mounted

    return () => {
      StatusBar.setHidden(true); // hide the status bar when the page is unmounted
    };
  }, []);

  const boxesData = [
    { duration: 7, header: '', textTitle: 'Registration', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '4:45pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 1.75, header: '', textTitle: 'Dinner', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '6:30pm', backgroundColor: '#fff', separation: 'yes', meal: 'yes', transition: 'no', done: 'no' },
    { duration: 0.5, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '7:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'no' },
    { duration: 3, header: '', textTitle: 'The Whole Earth is Full of His Glory', textDetail: "(Isaiah 6:1-8)", textDetailTwo: "David Chang (Canada)", titleLink: '', detailLink: '', detailTwoLink: '', time: '9:00pm', backgroundColor: '#fff', separation: 'no', meal: 'no', transition: 'no', done: 'no' },
    { duration: 4, header: '', textTitle: '"We Have Seen His Glory!"', textDetail: "(Life Testimonies)", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '9:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 1.75, header: '', textTitle: 'Group Bible Study Orientation', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '9:30pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
  ]

  const calculateHeight = (duration) => {
    return duration * 50;
  };

  const handlePress = (link) => {
    // navigation.navigate(screen);
  };

  const scheduleRender = () => {
    return (
      <View>
        {boxesData.map((box, index) => (
          <View style={box.transition == 'no' ? styles.singleContainer : null} key={index} >
            <View style={[styles.elementContainer, { backgroundColor: box.backgroundColor }, {height: calculateHeight(box.duration)}]}>
                {box.header !== '' ? (
                  <Text style={[styles.elementDetail,
                    { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}>{box.header}</Text>
                ) : null}
                <TouchableOpacity onPress={handlePress(box.titleLink)}>
                  <Text style={[
                    box.transition === 'no' ? (box.meal === 'no' ? styles.elementTitle : styles.elementTitleMeal) : styles.elementTitleTransition,
                    { color: box.done === 'no' ? box.meal === 'no' ? box.transition === 'yes' ? '#000' : '#1165c6' : '#000' : '#9ea0a2' }
                  ]}>{box.textTitle}</Text>
                </TouchableOpacity>
                {box.textDetail !== "" ? (
                  <TouchableOpacity onPress={handlePress(box.detailLink)}>
                    <Text style={[styles.elementDetail,
                      { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}>{box.textDetail}</Text>
                  </TouchableOpacity>
                ) : null}
                {box.textDetailTwo !== "" ? (
                  <TouchableOpacity onPress={handlePress(box.titleLink)}>
                    <Text style={[styles.elementDetail,
                      { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}>{box.textDetailTwo}</Text>
                  </TouchableOpacity>
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
  elementTitleMeal: {
    fontSize: 28,
    // fontWeight: 'bold',
    fontStyle: 'italic',
    // color: '#000',
    textAlign: 'center',
    marginHorizontal: 50
  },
  elementTitleTransition: {
    fontSize: 20,
    // fontWeight: '',
    // color: '#1165c6',
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 50
  },
  elementDetail: {
    fontSize: 20,
    color: '#1165c6',
    marginHorizontal: 50,
    textAlign: 'center',
  },
  separationContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start'
    marginTop: 20,
    marginBottom: 15
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

export default Thursday;