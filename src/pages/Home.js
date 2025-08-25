import React from 'react';
import { useAuth } from '../utils/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      <p>You are successfully logged in.</p>
    </div>
  );
};

export default Home;