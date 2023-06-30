
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { firebaseConfig } from './firebaseConfig'; 
import firebase from 'firebase/app';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { registerRootComponent } from 'expo';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


import TestTwo from './Screens/TestTwo';
import Test from './Screens/Test';
import Promo from './Screens/Promo';
import Home from './Screens/Home';
import Promotion from './Screens/Promotion';

import Footer from './components/Footer';
import Header from './components/Header';



import { useState, Component } from 'react';
import { Button, Image, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const app = initializeApp(firebaseConfig);
const Tab = createBottomTabNavigator();



class MyTabs extends React.Component {


  constructor(props) {
    super(props)
    this.handleStatusChange=this.handleStatusChange.bind(this)
  }

  handleStatusChange = () =>{
    this.props.onStatusChange()
  }

  render = () =>{
      return (
        <Tab.Navigator initialRouteName="Home"
          style={styles.container}
          screenOptions={{
            "tabBarActiveTintColor": "#fff",
            "tabBarInactiveTintColor": "lightgray",
            "tabBarActiveBackgroundColor": "black",
            "tabBarInactiveBackgroundColor": "black",
            "tabBarStyle": [
              {
                "display": "flex",
                height: 50,
                // paddingTop: -8,
                // alignItems: 'center'
              },
              null
            ],
            headerShown: false,
            // tabBarLabel: '',
        }}>
              <Tab.Screen name="Home" component={Home} style={styles.container}
                options={{ tabBarIcon: ({ focused }) => {
                    return (
                      <View style={styles.tabIconContainer}>
                        <Ionicons name={'ios-home'}  size={30} color="#ffffff" />
                      </View>
                    );
                },}}
              />
              <Tab.Screen name="Promo" component={Promo}
                options={{ tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Ionicons name={'ios-book'} size={30} color="#ffffff" />
                      </View>
                    );
                },}}
              />
              <Tab.Screen name="Test" component={Test}
                options={{ tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Ionicons name={'ios-add'} size={32} color="#ffffff" />
                      </View>
                    );
                },}}
              />
              <Tab.Screen name="Promotion" component={Promotion}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Ionicons name={'ios-search'} size={30} color="#ffffff" />
                      </View>
                    );
                },}}
              />
              <Tab.Screen name="Profile" children={()=><Home onStatusChange={this.handleStatusChange}/>}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <MaterialCommunityIcons name="account-circle" size={30} color="#ffffff" />
                      </View>
                    );
                },}}
              /> 
        </Tab.Navigator>
      );
  }
}


class App extends Component {
  constructor(props) {
      super(props)
      // this.changeLoggingState = this.changeLoggingState.bind(this)
      // this.state = ({
      //   loggingStatus: data.isLoggedIn
      // })
    }

  // changeLoggingState = () =>{
  //   this.state.loggingStatus ? this.setState({loggingStatus: false}) : this.setState({loggingStatus: true})
  // }
  
	render = () => {
		return (
      <NavigationContainer style={styles.container}> 
        {/* {
          this.state.loggingStatus ? ( */}
         {/* <Header/> */}
            <MyTabs style={styles.container}/>
            {/* <MyTabs onStatusChange={this.changeLoggingState}/> */}
        {/*  ) : (
        //   <LoginScreen onStatusChange={this.changeLoggingState}/>
        //     )
         */}
			</NavigationContainer>
    );
   }
}

const styles = StyleSheet.create({
  container: {
		// flex: 1,
		// justifyContent: 'flex-start',
		// backgroundColor: 'lightgrey',
    height: 100,
    padding: 100
	},
  icon: {
    paddingTop: 10
  },
  tabIconContainer: {
    justifyContent: 'center', // Vertically center the icon
    height: '100%', // Make the container take the full height of the tab bar
  },
    heading: {
		//flex: 0,
		alignItems: 'center',
		margin: 5,
		padding: 100,
		backgroundColor: '#1D519C',
  },
  
  buttonBox: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    justifyContent: 'flex-start',
    },
  button: {
  paddingTop: 50,
  width: 80,
  height: 20,
  },
  headingText: {
    color: '#FFFFFF',
    fontSize: 40,
  },
});

export default App;


///////////////////////////////////////////////////////////////////////////



// export default function App() {


// function writeUserData(name) {
//   const db = getDatabase();
//   set(ref(db, 'name'), {
//     username: name,
//   });
// }

// function readUserData(){
//   const dbRef = ref(getDatabase());
//   get(child(dbRef, `name/username`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// }


//   return (
//     <View style={styles.container}>
//       <Text>Welcome to ISBC!</Text>
//       <TouchableOpacity style={styles.button} onPress={writeUserData("test")}>
//         <Text>Write</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={readUserData}>
//         <Text>Read</Text>
//       </TouchableOpacity>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     paddingHorizontal: 20,
//     paddingVertical: 40,
//     color: 'white',
//     backgroundColor: 'red'
//   }
// });


registerRootComponent(App);