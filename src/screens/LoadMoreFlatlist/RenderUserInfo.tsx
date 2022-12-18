//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Spacer from '../../components/Spacer';
import {userInfoType} from '../../utils/types';

// create a component
const RenderUserInfo = ({fname, lname, profile}: userInfoType) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: profile}} style={styles.img} />
        <Text style={styles.name}>{`${fname} ${lname}`}</Text>
      </View>
      <Spacer value={20} />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.5,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});

//make this component available to the app
export default RenderUserInfo;
