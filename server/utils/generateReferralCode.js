const { v4: uuidv4 } = require('uuid');

const generateReferralCode = () => {
  return uuidv4().slice(0, 8); 
};

module.exports = generateReferralCode;
