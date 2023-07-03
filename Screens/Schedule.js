import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import CustomButton from '../components/CustomButton';





const Schedule = () => {

    const navigation = useNavigation();
    const handleBoxPress = (text) => {
        navigation.navigate(text)
        };

    return (
        <View style={styles.container}>
            <View style={styles.personalInfoContainer}>
                <CustomButton name="Thursday" onClick={() => { 
                    handleBoxPress('ThursdayFull')
                }} />
                <CustomButton name="Friday" onClick={() => { 
                    handleBoxPress('FridayFull')
                }} />
                <CustomButton name="Saturday" onClick={() => { 
                    handleBoxPress('Promo')
                }} />
                <CustomButton name="Sunday" onClick={() => { 
                    handleBoxPress('Promo')
                }} />

            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
});

export default Schedule;

