app.post('/pay', (req, res) => {
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:3001/success",
          "cancel_url": "http://localhost:3001/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "item",
                  "sku": "item",
                  "price": "1.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "1.00"
          },
          "description": "This is the payment description."
      }]
    };
  
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
          throw error;
      } else {
          for(let i = 0;i < payment.links.length;i++){
            if(payment.links[i].rel === 'approval_url'){
              res.redirect(payment.links[i].href);
            }
          }
      }
    });
  });
  const Transaction = require("../Models/Transactions");
  app.get('/success', async (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "5.00"
          }
      }]
    };
  
    try {
      const payment = await new Promise((resolve, reject) => {
        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
          if (error) {
            reject(error);
          } else {
            resolve(payment);
          }
        });
      });
  
      // Save transaction to database
      const transaction = new Transaction({
        paypalPaymentId: payment.id,
        payerId: payment.payer.payer_info.payer_id,
        amount: payment.transactions[0].amount.total,
        currency: payment.transactions[0].amount.currency,
        status: payment.state
      });
  
      await transaction.save();
  
      res.send('Payment successful and transaction saved to database');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
    });
  