// src/components/AccountCreationForm.js
import React, { useState } from 'react';

const AccountCreationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Simulate a dummy request
    try {
      // Simulate a loading state if needed
      // setLoading(true);

      // Simulate a request delay (e.g., 1 second)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate a successful response
      console.log('Dummy request successful');
      console.log('Username:', username);
      console.log('Password:', password);

      // Reset the form fields if needed
      setUsername('');
      setPassword('');

    } catch (error) {
      // Handle error if needed
      console.error('Dummy request error:', error);

    } finally {
      // Simulate ending loading state if needed
      // setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-purple-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Account Creation</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreationForm;
