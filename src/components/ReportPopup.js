// src/components/ReportPopup.js
import React from 'react';

const ReportPopup = ({ userId, onClose }) => {
  // Placeholder logic for generating the report
  const generateReport = () => {
    console.log(`Generating report for user with ID ${userId}`);
    // Include your actual report generation logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Report</h2>
        {/* Add report content here */}
        <p>Report content for user with ID {userId}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={() => {
            generateReport();
            onClose();
          }}
        >
          Close and Generate Report
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded mt-4 ml-2 hover:bg-gray-600 transition duration-300 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReportPopup;
