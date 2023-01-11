//import liraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomDropdown from '../screens/CustomDropdown/CustomDropdown';
import DarkLightTheme from '../screens/DarkLightTheme/DarkLightTheme';
import DynamicForm from '../screens/DynamicForm/DynamicForm';
import LoadMoreFlatlist from '../screens/LoadMoreFlatlist/LoadMoreFlatlist';
import Stripe from '../screens/Stripe/Stripe';

const Stack = createNativeStackNavigator();

// create a component
const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName="Stripe"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DarkLightTheme" component={DarkLightTheme} />
      <Stack.Screen name="CustomDropdown" component={CustomDropdown} />
      <Stack.Screen name="DynamicForm" component={DynamicForm} />
      <Stack.Screen name="LoadMoreFlatlist" component={LoadMoreFlatlist} />
      <Stack.Screen name="Stripe" component={Stripe} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default Route;
