import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserModule = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container error-message">{error}</div>;

  return (
    <div className="container">
      <h1>User Module</h1>
      <p>List of all registered users (except yourself):</p>
      <div className="users-list">
        {users.length > 0 ? (
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No other users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserModule;