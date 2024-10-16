import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

const Transactions = () => {
  const { authData } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await api.get('/transactions', {
        headers: { Authorization: authData.token },
      });
      setTransactions(res.data);
    };
    fetchTransactions();
  }, [authData]);

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            <p>{transaction.donorName}: ${transaction.amount} on {new Date(transaction.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
