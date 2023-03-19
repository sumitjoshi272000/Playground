//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {
  CardField,
  useStripe,
  createToken,
  confirmPayment,
} from '@stripe/stripe-react-native';
import ButtonComp from '../../components/ButtonComp';
import {createPaymentIntent} from '../../utils/api';

// create a component
const PaymentScreen = () => {
  const [cardInfo, setCardInfo] = useState<any>(null);

  const fetchDetail = (cardDetail: any) => {
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
      console.log('my card details ::', cardDetail);
    } else {
      setCardInfo(null);
    }
  };

  const onDone = async () => {
    // if (cardInfo) {
    //   try {
    //     const resToken = await createToken({...cardInfo, type: 'Card'});
    //     console.log('restoken ::', resToken);
    //     Alert.alert('restoken ::', JSON.stringify(resToken));
    //   } catch (error) {
    //     Alert.alert('Error raised during token creation');
    //   }
    // }

    let apiData = {
      amount: '100',
      currency: 'INR',
    };
    try {
      const res: any = await createPaymentIntent(apiData);
      console.log('Payment Intent created successfully.....!!!!', res);

      if (res?.data?.paymentIntent) {
        let confirmPaymentIntent = await confirmPayment(
          res?.data?.paymentIntent,
          {
            paymentMethodType: 'Card',
          },
        );
        console.log('ConfirmPaymentIntent res++++', confirmPaymentIntent);
        Alert.alert('Congratulations!', 'Payment Successful');
      }
    } catch (error) {
      console.log('error during payment intent creation.....!!!!', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>PaymentScreen</Text>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          fetchDetail(cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <ButtonComp text="Pay" disabled={!cardInfo} onPress={onDone} />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default PaymentScreen;
