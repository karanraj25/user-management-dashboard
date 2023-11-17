// src/App.js
import "./App.css"
import React from 'react';
import UserDetails from './components/UserDetails';
import AccountCreation from './components/AccountCreation';

function App() {
  const [activeTab, setActiveTab] = React.useState('userDetails');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 user">User Management Dashboard</h1>

      <div className="mb-4">
        <button
          className={`mr-4 ${activeTab === 'userDetails' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('userDetails')}
        >
          User Details
        </button>
        <button
          className={`mr-4 ${activeTab === 'accountCreation' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('accountCreation')}
        >
          Account Creation
        </button>
      </div>

      {activeTab === 'userDetails' && <UserDetails />}
      {activeTab === 'accountCreation' && <AccountCreation />}
    </div>
  );
}

export default App;
