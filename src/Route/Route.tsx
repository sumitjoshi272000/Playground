//import liraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomDropdown from '../screens/CustomDropdown/CustomDropdown';
import DarkLightTheme from '../screens/DarkLightTheme/DarkLightTheme';
import ReduxExample from '../screens/ReduxExample/ReduxExample';
import LoadMoreFlatlist from '../screens/LoadMoreFlatlist/LoadMoreFlatlist';
import Stripe from '../screens/Stripe/Stripe';
import ThunkExample from '../screens/ReduxExample/ThunkExample';

const Stack = createNativeStackNavigator();

// create a component
const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReduxExample"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DarkLightTheme" component={DarkLightTheme} />
      <Stack.Screen name="CustomDropdown" component={CustomDropdown} />
      <Stack.Screen name="LoadMoreFlatlist" component={LoadMoreFlatlist} />
      <Stack.Screen name="Stripe" component={Stripe} />
      <Stack.Screen name="ReduxExample" component={ReduxExample} />
      <Stack.Screen name="ThunkExample" component={ThunkExample} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default Route;
