
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { firebaseConfig } from './firebaseConfig'; 
import firebase from 'firebase/app';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { registerRootComponent } from 'expo';

import Home from './Screens/Home';



import { useState, Component } from 'react';
import { Button, Image, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HeaderWithPL from './components/HeaderWithPL'
// import NavBar from './components/NavBar'
// import StockBox from './components/StockBox'
import home from './assets/home.png'
import user from './assets/user.png'
import add from './assets/add.png'
import favorites from './assets/favorites.png'
// import profileImage from './assets/.png'
// import marketImage from './assets/chart.png'
import search from './assets/search.png'


const app = initializeApp(firebaseConfig);

// export default function App() {
//   return(
//       <Home/>
//       // <View>hello</View>
//   ) 
// }


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
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            "tabBarActiveTintColor": "#fff",
            "tabBarInactiveTintColor": "lightgray",
            "tabBarActiveBackgroundColor": "black",
            "tabBarInactiveBackgroundColor": "black",
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
        }}>
                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Image
                          source={home}
                          resizeMode="contain"
                          style={{ width: 25 }}
                        />
                      </View>
                    );
                  },
                }}
              />
              <Tab.Screen
            name="Add"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={add}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </View>
                );
              },
            }}
            />
              <Tab.Screen
              name="Favorites"
              component={Home}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <Image
                        source={favorites}
                        resizeMode="contain"
                        style={{ width: 25 }}
                      />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
            name="Search"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={search}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </View>
                );
              },
            }}
            />
            <Tab.Screen
            name="Profile"
            children={()=><Home onStatusChange={this.handleStatusChange}/>}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={user}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </View>
                );
              },
            }}
            
            /> 
    </Tab.Navigator>
      );
  }
}

class Mytabslogin extends React.Component {


  constructor(props) {
    super(props)
    this.handleStatusChange=this.handleStatusChange.bind(this)
  }

  handleStatusChange = () =>{
    this.props.onStatusChange()
  }

  render = () =>{
      return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            "tabBarActiveTintColor": "#fff",
            "tabBarInactiveTintColor": "lightgray",
            "tabBarActiveBackgroundColor": "black",
            "tabBarInactiveBackgroundColor": "black",
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
        }}>
                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Image
                          source={home}
                          resizeMode="contain"
                          style={{ width: 25 }}
                        />
                      </View>
                    );
                  },
                }}
              />
              <Tab.Screen
            name="Add"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={add}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </View>
                );
              },
            }}
            />
              <Tab.Screen
              name="Favorites"
              component={Home}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <Image
                        source={favorites}
                        resizeMode="contain"
                        style={{ width: 25 }}
                      />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
            name="Search"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={search}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </View>
                );
              },
            }}
            />
            <Tab.Screen
            name="Profile"
            children={()=><Home onStatusChange={this.handleStatusChange}/>}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={user}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </View>
                );
              },
            }}
            
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
      <NavigationContainer> 
        {/* {
          this.state.loggingStatus ? ( */}
            <MyTabs onStatusChange={this.changeLoggingState}/>
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
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'lightgrey',
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