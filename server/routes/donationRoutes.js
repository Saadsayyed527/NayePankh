const express = require('express');
const { processDonation } = require('../controllers/donationController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/donate', authMiddleware, processDonation);

module.exports = router;
