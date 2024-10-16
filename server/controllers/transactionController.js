const Donation = require('../models/Donation');

exports.getTransactions = async (req, res) => {
  try {
    const donations = await Donation.find({ referralCode: req.user.referralCode })
      .populate('userId', 'name email')
      .sort({ date: -1 });

    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
