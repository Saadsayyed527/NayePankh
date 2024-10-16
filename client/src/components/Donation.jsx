import React, { useState } from 'react';
import api from '../services/api';

const Donation = () => {
  const [amount, setAmount] = useState('');
  const referralCode = new URLSearchParams(window.location.search).get('ref');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/donations/donate', { amount, referralCode });
      console.log('Payment processed:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="donation-container">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Donation Amount" />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donation;
