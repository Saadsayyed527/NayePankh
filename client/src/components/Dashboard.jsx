import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Dashboard = () => {
  const { authData } = useContext(AuthContext);
  const [goalAchieved, setGoalAchieved] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!authData) {
      navigate('/');
      return;
    }
    const fetchData = async () => {
      const res = await api.get('/referrals/referral-code', {
        headers: { Authorization: authData.token },
      });
      setReferralCode(res.data.referralCode);

      const donationsRes = await api.get('/transactions', {
        headers: { Authorization: authData.token },
      });
      setGoalAchieved(donationsRes.data.reduce((sum, donation) => sum + donation.amount, 0));
    };
    fetchData();
  }, [authData, navigate]);

  const handleCopyLink = () => {
    const donationLink = `${window.location.origin}/donate?ref=${referralCode}`;
    navigator.clipboard.writeText(donationLink);
  };

  const handleWhatsAppShare = () => {
    const message = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${window.location.origin}/donate?ref=${referralCode}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome {authData.user.name}</h2>
      <div className="dashboard-stats">
        <p>Goal Achieved: ${goalAchieved}</p>
        <p>Your Referral Code: {referralCode}</p>
        <button onClick={handleCopyLink}>Copy Donation Link</button>
        <button onClick={handleWhatsAppShare}>Share on WhatsApp</button>
      </div>
    </div>
  );
};

export default Dashboard;
