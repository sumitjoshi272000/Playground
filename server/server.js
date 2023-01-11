const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const stripe = require('stripe')(
  'sk_test_51MOxC5SFnwubPz9J0Nf7tgJVNTmTGJCK41xcuhltcRpdrAvp8HA0xRm9Qc2Kf3SwtjnMcRfK8bO9lUU7OWGQPuN700ZkToD09k',
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Folks...!!! How r u?');
});

// const stripe = require('stripe')('sk_test_51MOxC5SFnwubPz9J0Nf7tgJVNTmTGJCK41xcuhltcRpdrAvp8HA0xRm9Qc2Kf3SwtjnMcRfK8bO9lUU7OWGQPuN700ZkToD09k');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const {amount, currency} = req.body;
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'},
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});

app.listen(4002, () => {
  console.log('Running on http://localhost:4002');
});
