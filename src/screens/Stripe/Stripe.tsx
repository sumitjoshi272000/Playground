//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {SP_KEY, SECRET_KEY, New_SP_KEY} from '@env';
// import {SP_KEY} from 'react-native-dotenv';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';

// create a component
const Stripe = () => {
  return (
    <StripeProvider
      publishableKey={SP_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen />
    </StripeProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Stripe;
