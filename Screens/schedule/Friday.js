import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../components/Footer';

const Friday = () => {
  useEffect(() => {
    StatusBar.setHidden(true); // show the status bar when the page is mounted

    return () => {
      StatusBar.setHidden(true); // hide the status bar when the page is unmounted
    };
  }, []);

  const boxesData = [
    { duration: 0.25, header: '', textTitle: '', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '6:45am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'yes' },
    { duration: 1.75, header: '', textTitle: 'Breakfast', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '8:30am', backgroundColor: '#fff', separation: 'yes', meal: 'yes', transition: 'no', done: 'yes' },
    { duration: 0.75, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '8:45am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'yes' },
    { duration: 2.75, header: '', textTitle: 'Group Bible Study', textDetail: "(John 1:1-5 & 14)", textDetailTwo: "", titleLink: 'John 1:1-5 & 14', detailLink: 'John 1:1-5 & 14', detailTwoLink: 'John 1:1-5 & 14', time: '10:15am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'yes' },
    { duration: 0.75, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '10:30am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'yes' },
    { duration: 4, header: '', textTitle: '"The Glory of Jesus, God incarnate"', textDetail: "(John 1:1-5 & 14)", textDetailTwo: "Eberhard Gross (Germany)", titleLink: 'John 1:1-5 & 14', detailLink: 'John 1:1-5 & 14', detailTwoLink: 'John 1:1-5 & 14', time: '11:45am', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'yes' },
    { duration: 0.75, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '12:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'yes' },
    { duration: 1.75, header: '', textTitle: 'Lunch', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '1:45pm', backgroundColor: '#fff', separation: 'yes', meal: 'yes', transition: 'no', done: 'yes' },
    { duration: 0.75, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '2:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'yes' },
    { duration: 3, header: '', textTitle: 'Interest Group (IG)', textDetail: "", textDetailTwo: "", titleLink: 'IG', detailLink: '', detailTwoLink: '', time: '3:30pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'yes' },
    { duration: 0.75, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '3:45pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'yes' },
    { duration: 3.5, header: 'Special Lecture', textTitle: '"The Risen Lord and the Glory of Revival"', textDetail: "Dr. Timothy Tennent", textDetailTwo: "(President, Asbury Seminary)", titleLink: '', detailLink: 'personal site link', detailTwoLink: 'asbury link', time: '4:45pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'yes' },
    { duration: 1.75, header: '', textTitle: 'Dinner', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '6:30pm', backgroundColor: '#fff', separation: 'yes', meal: 'yes', transition: 'no', done: 'yes' },
    { duration: 0.75, header: '', textTitle: 'Transition', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '7:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'yes' },
    { duration: 3.5, header: '', textTitle: '"The Glory of Jesus\' Ministry: To Forgive Sins"', textDetail: "(Luke 5:17-26)", textDetailTwo: "John Fatoyinbo (Nigeria)", titleLink: 'Luke 5:17-26', detailLink: 'Luke 5:17-26', detailTwoLink: 'Luke 5:17-26', time: '', backgroundColor: '#fff', separation: 'no', meal: 'no', transition: 'no', done: 'yes' },
    { duration: 3, header: '', textTitle: '"To Change Lives"', textDetail: "(Luke 5:27-32)", textDetailTwo: "Josue Gutierrez (Panama)", titleLink: 'Luke 5:27-32', detailLink: 'Luke 5:27-32', detailTwoLink: 'Luke 5:27-32', time: '7:50pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'yes' },
    { duration: 0.75, header: '', textTitle: 'Break', textDetail: "", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '8:00pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'yes', done: 'yes' },
    { duration: 2, header: '', textTitle: 'World Mission Festival', textDetail: "- Africa, Latin America, Europe, ME -", textDetailTwo: "", titleLink: '', detailLink: '', detailTwoLink: '', time: '9:30pm', backgroundColor: '#fff', separation: 'yes', meal: 'no', transition: 'no', done: 'yes' },

]

  const calculateHeight = (duration) => {
    return duration * 80;
  };

  const handlePress = (link) => {

    const currentPassage = link
  
    if (link == "John 1:1-5 & 14" || link == "Luke 5:17-26" || link == "Luke 5:27-32") {
      navigation.navigate('Template', { currentPassage });
      console.log("pressed: ", link)
    } else if (link == "personal site link") {
      Linking.openURL("https://timothytennent.com")
    } else if (link == "asbury link") {
      Linking.openURL("https://asburyseminary.edu/")
    } else if (link == "IG"){
      navigation.navigate('IG-Menu')
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
                  <TouchableOpacity onPress={() => handlePress(box.detailTwoLink)}>
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
          <Ionicons style={styles.backButtonIcon} name='arrow-back-circle-outline' size={20} color="#ffffff" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Friday</Text>
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

export default Friday;