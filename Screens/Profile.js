import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import CustomButton from '../components/CustomButton';





const Profile = () => {

    const navigation = useNavigation();
    const handleBoxPress = (text) => {
        navigation.navigate(text)
        };

    return (
        <View style={styles.container}>
            <View style={styles.personalInfoContainer}>
                <CustomButton name="Name" onClick={() => { 
                    handleBoxPress('Promo')
                }} />
                <CustomButton name="Email" onClick={() => { 
                    handleBoxPress('Promo')
                }} />
                <CustomButton name="Settings" onClick={() => { 
                    handleBoxPress('Promo')
                }} />
                <CustomButton name="Help" onClick={() => { 
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

export default Profile;
