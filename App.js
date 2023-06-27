
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { firebaseConfig } from './firebaseConfig'; 
import firebase from 'firebase/app';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';


const app = initializeApp(firebaseConfig);

export default function App() {


function writeUserData(name) {
  const db = getDatabase();
  set(ref(db, 'name'), {
    username: name,
  });
}

function readUserData(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `name/username`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}


  return (
    <View style={styles.container}>
      <Text>Welcome to ISBC!</Text>
      <TouchableOpacity style={styles.button} onPress={writeUserData("test")}>
        <Text>Write</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={readUserData}>
        <Text>Read</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    color: 'white',
    backgroundColor: 'red'
  }
});
