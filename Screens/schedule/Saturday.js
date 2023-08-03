import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../components/Footer';

const Saturday = () => {
    
    useEffect(() => {
        StatusBar.setHidden(false); // show the status bar when the page is mounted
    
        return () => {
        StatusBar.setHidden(true); // hide the status bar when the page is unmounted
        };
    }, []);

  const boxesData = [
    { duration: 0.25, header: '', textTitle: '', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '6:45am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 1.75, header: '', textTitle: 'Breakfast', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '8:30am', backgroundColor: '#fff', separation: 'yes', meal: 'yes', transition: 'no', done: 'no' },
    { duration: 0.5, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '8:45am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'no' },
    { duration: 2.75, header: '', textTitle: 'Group Bible Study', textDetail: "(John 19:16-42)", textDetailTwo: "", titleLink: 'John 19:16-42', detailLink: 'John 19:16-42', detailTwoLink: 'John 19:16-42', time: '10:15am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 0.5, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '10:30am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'no' },
    { duration: 4, header: '', textTitle: '"The Glory of the Crucified Christ"', textDetail: "(John 19:16-42)", textDetailTwo: "Phillip Brown (USA)", titleLink: 'John 19:16-42', detailLink: 'John 19:16-42', detailTwoLink: 'John 19:16-42', time: '11:45am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 0.5, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '12:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'no' },
    { duration: 1.75, header: '', textTitle: 'Lunch', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '1:45pm', backgroundColor: '#fff', separation: 'yes', meal: 'yes', transition: 'no', done: 'no' },
    { duration: 0.5, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '2:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'no' },
    { duration: 3.5, header: '', textTitle: 'Reflection Writing & Sharing', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '3:45pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 2, header: '', textTitle: 'Sports / Free Time', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '4:45pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 1.75, header: '', textTitle: 'Dinner', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '6:30pm', backgroundColor: '#fff', separation: 'yes', meal: 'yes', transition: 'no', done: 'no' },
    { duration: 0.5, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '7:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'no' },
    { duration: 2.5, header: '', textTitle: '"The Glory of Risen Jesus: Encountering Paul"', textDetail: "(Acts 9:1-9)", textDetailTwo: "Mark Hui (Taiwan)", titleLink: 'Acts 9:1-9', detailLink: 'Acts 9:1-9', detailTwoLink: 'Acts 9:1-9', time: '', backgroundColor: '#fff', separation: 'no', meal: 'no', transition: 'no', done: 'no' },
    { duration: 2, header: '', textTitle: '"Empowering Paul"', textDetail: "(Acts 9:10-22)", textDetailTwo: "Abraham Yugai (KZ)", titleLink: 'Acts 9:10-22', detailLink: 'Acts 9:10-22', detailTwoLink: 'Acts 9:10-22', time: '8:10pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 0.5, header: '', textTitle: 'Break', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '8:20pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'no' },
    { duration: 2, header: '', textTitle: 'World Mission Festival', textDetail: "- Oceania, Asia, CIS -", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '9:40pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },
    { duration: 0.75, header: '', textTitle: '*Ice Cream Social', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'no' },


]

  const calculateHeight = (duration) => {
    return duration * 50;
  };

  const handlePress = (link) => {

    const currentPassage = link
  
    if (link == "John 19:16-42" || link == "Acts 9:1-9" || link == "Acts 9:10-22") {
      navigation.navigate('Template', { currentPassage });
      console.log("pressed: ", link)
    } 
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
                <TouchableOpacity onPress={() => handlePress(box.titleLink)}>
                  <Text style={[
                    box.transition === 'no' ? (box.meal === 'no' ? styles.elementTitle : styles.elementTitleMeal) : styles.elementTitleTransition,
                    { color: box.done === 'no' ? box.meal === 'no' ? box.transition === 'yes' ? '#000' : '#1165c6' : '#000' : '#9ea0a2' }
                  ]}>{box.textTitle}</Text>
                </TouchableOpacity>
                {box.textDetail !== "" ? (
                  <TouchableOpacity onPress={() => handlePress(box.detailLink)}>
                    <Text style={[styles.elementDetail,
                      { color: box.done === 'no' ? '#1165c6' : '#9ea0a2' }]}>{box.textDetail}</Text>
                  </TouchableOpacity>
                ) : null}
                {box.textDetailTwo !== "" ? (
                  <TouchableOpacity onPress={() => handlePress(box.titleLink)}>
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
        <Text style={styles.title}>Saturday</Text>
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
    // backgroundColor: '#5300EB',
    backgroundColor: '#ffffff',
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
    // backgroundColor: '#5300EB'
    backgroundColor: '#000'
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
    // color: '#000',
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

export default Saturday;