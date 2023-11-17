// src/components/UserModal.js
import React from 'react';

const UserModal = ({ selectedUser, onClose }) => {
  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white p-4">
            <h3 className="text-lg font-bold mb-4">{selectedUser.username}</h3>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>ID: {selectedUser.id}</p>
            <p>Creation Date: {selectedUser.creationDate}</p>
           

            {/* Generate Report button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={() => {
                // Placeholder logic for generating the report
                console.log(`Generating report for user with ID ${selectedUser.id}`);
              }}
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
