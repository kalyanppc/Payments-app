import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl text-gray-700 font-bold mb-4">404</h1>
        <h2 className="text-3xl text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button
          onClick={handleNavigateHome}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
