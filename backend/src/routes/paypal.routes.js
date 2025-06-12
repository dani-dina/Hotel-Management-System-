
const express = require('express');
const router = express.Router();
const paypal = require('@paypal/checkout-server-sdk');
const paypalClient = require('../config/paypal');

router.post('/create-paypal-order', async (req, res) => {
  try {
    const { amount, currency = 'USD' } = req.body;
    
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString(),
        },
      }],
    });

    const order = await paypalClient.execute(request);
    res.json({ orderID: order.result.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/capture-paypal-order', async (req, res) => {
  try {
    const { orderID } = req.body;
    
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const capture = await paypalClient.execute(request);
    
    // Save the transaction details to your database
    console.log('Payment captured:', capture.result.id);
    
    res.json({ success: true, details: capture.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;