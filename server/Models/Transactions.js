const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  paypalPaymentId: String,
  payerId: String,
  amount: Number,
  currency: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;