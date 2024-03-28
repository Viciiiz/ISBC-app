import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const BackButton = () => {

    const navigation = useNavigation();

    const handleBackButtonPress = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
            <Ionicons style={styles.backButtonIcon} name='arrow-back-circle-outline' size={20} color="#ffffff" />
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
});

export default BackButton;