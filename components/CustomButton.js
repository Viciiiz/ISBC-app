import React, { useState, useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const CustomButton = ({ name, onClick }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start(() => {
      onClick();
    });
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <TouchableOpacity
      style={[styles.button, animatedStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomButton;
