import React from 'react';
import { useNavigate } from 'react-router';

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <div>
      
      <div className="mt-12 text-center">
        <img className='max-w-3xl mx-auto w-[500px]' src="/public/C001-assets/oops-404-error.avif" />
        <h1 className="text-4xl font-bold text-red-500">404 Error: Contact Not Found</h1>
        <p className="text-lg mt-4">Sorry, the Contact page you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-2 border-2 border-[#176AE5] bg-[#176AE5] text-white rounded-full hover:bg-blue-600"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Contacts;
