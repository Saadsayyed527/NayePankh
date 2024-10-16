const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: { type: Number, required: true },
  referralCode: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donation', DonationSchema);
