import React from 'react';
import { useNavigate } from 'react-router'; // Correctly using React Router v6's `useNavigate`
import Navbar from '../Root/Navbar/Navbar';
 // Assuming you have a Navbar component

const NotFound = () => {
  const navigate = useNavigate(); // React Router v6's navigate hook

  const handleRedirect = () => {
    navigate('/'); // Navigate to homepage
  };

  return (
    <div>
      <Navbar></Navbar> {/* Always visible Navbar */}
      <div className="mt-32 text-center">
        <h1 className="text-4xl font-bold text-red-500">404 Error: Page Not Found</h1>
        <p className="text-lg mt-4">Oops! The page you're looking for does not exist.</p>
        <button
          onClick={handleRedirect} // Call handleRedirect on button click
          className="mt-6 px-6 py-2 border-2 border-[#176AE5] bg-[#176AE5] text-white rounded-full hover:bg-blue-600"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
