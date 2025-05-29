// controllers/paymentController.js
const stripe = require('../config/stripe');
const paypalClient = require('../config/paypal');
const paypal = require('@paypal/checkout-server-sdk');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency, paymentMethod } = req.body;
    
    if (paymentMethod === 'stripe') {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: currency || 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return res.json({ 
        clientSecret: paymentIntent.client_secret,
        paymentMethod: 'stripe' 
      });
    }
    else if (paymentMethod === 'paypal') {
      const request = new paypal.orders.OrdersCreateRequest();
      request.prefer('return=representation');
      request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: currency || 'USD',
            value: amount.toString(),
          },
        }],
      });
      const order = await paypalClient.execute(request);
      return res.json({ 
        orderID: order.result.id,
        paymentMethod: 'paypal' 
      });
    }
    else {
      throw new Error('Invalid payment method');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.confirmPayment = async (req, res) => {
  try {
    const { paymentMethod, paymentData } = req.body;
    
    if (paymentMethod === 'stripe') {
      // Handle Stripe payment confirmation
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentData.paymentIntentId);
      return res.json({ status: paymentIntent.status });
    }
    else if (paymentMethod === 'paypal') {
      // Handle PayPal payment confirmation
      const request = new paypal.orders.OrdersCaptureRequest(paymentData.orderID);
      request.requestBody({});
      const capture = await paypalClient.execute(request);
      return res.json({ status: capture.result.status });
    }
    else {
      throw new Error('Invalid payment method');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};