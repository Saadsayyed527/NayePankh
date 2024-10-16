const User = require('../models/User');

exports.getReferralCode = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ referralCode: user.referralCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
