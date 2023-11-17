import React, { useState } from 'react';
import users from './userDatabase';
import UserModal from './UserModal';
import "../App.css"

const UserDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleGenerateReport = (userId) => {
    // Logic to generate a report for the selected user (userId)
    console.log(`Generating report for user with ID ${userId}`);
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery) ||
      user.id.toString().includes(searchQuery)
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <>
    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-purple-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded px-4 md:px-8 py-6 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Details</h2>

      {/* Search input */}
      <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder="Search by username, email, phone, etc."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">ID</th>
              <th className="border p-2">Creation Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} onClick={() => handleUserClick(user)} className="cursor-pointer hover:bg-gray-200">
                <td className="border p-2">{user.username}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.creationDate}</td>
                <td className="border p-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                    onClick={(e) => {
                      // e.stopPropagation(); // Prevent the row click from triggering
                      e.preventDefault()
                      handleGenerateReport(user.id);
                    }}
                  >
                    Generate Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Modal */}
      {isModalOpen && <UserModal selectedUser={selectedUser} onClose={() => setIsModalOpen(false)} />}
    </div>
    <div className="flex items-center justify-center h-screen ka">
      <h1 className="text-3xl font-bold text-black-800 bg-green-500 p-4 shadow-md rounded karan">
        Made by Karan Raj
      </h1>
    </div>
    </>
  );
};

export default UserDetails;
