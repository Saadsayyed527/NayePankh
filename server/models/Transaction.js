const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  donorName: { type: String },
  amount: { type: Number, required: true },
  referralCode: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
