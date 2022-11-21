//import liraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DarkLightTheme from '../screens/DarkLightTheme/DarkLightTheme';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

// create a component
const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="DarkLightTheme" component={DarkLightTheme} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default Route;
