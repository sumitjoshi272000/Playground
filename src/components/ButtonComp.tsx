//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../utils/types';

// create a component
const ButtonComp = ({text, onPress, disabled}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: disabled ? 'lightgrey' : 'grey',
      }}
      disabled={disabled ? disabled : false}
      onPress={onPress}>
      <Text style={{color: disabled ? '#000' : '#fff'}}>
        {text ? text : 'DONE'}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

//make this component available to the app
export default ButtonComp;
