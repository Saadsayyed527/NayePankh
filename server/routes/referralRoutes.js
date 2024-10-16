const express = require('express');
const { getReferralCode } = require('../controllers/referralController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/referral-code', authMiddleware, getReferralCode);

module.exports = router;
