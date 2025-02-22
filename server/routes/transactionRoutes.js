const express = require('express');
const { getTransactions } = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/transactions', authMiddleware, getTransactions);

module.exports = router;
