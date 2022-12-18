//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Spacer = ({value}: {value?: number}) => {
  return <View style={{height: value ? value : 10}} />;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Spacer;
