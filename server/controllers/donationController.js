const stripe = require('../config/stripe');
const Donation = require('../models/Donation');
const User = require('../models/User');

exports.processDonation = async (req, res) => {
  const { amount, referralCode } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,  
      currency: 'usd',
    });

    const donation = new Donation({
      userId: req.user.id,
      amount,
      referralCode,
    });

    await donation.save();
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
