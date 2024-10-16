import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Donation from './components/Donation';
import Login from './components/Login';
import Register from './components/Register';
import Transactions from './components/Transactions';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
