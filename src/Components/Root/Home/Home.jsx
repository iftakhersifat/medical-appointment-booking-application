import React, { useState } from 'react';
import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../../Doctors/Doctors';

const Home = () => {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const visibleDoctors = showAll ? data : data.slice(0, 6);

  return (
    <div className='bg-gray-100 p-2'>
      <div className='container mx-auto mb-8'>
      <Banner />

      <h1 className="text-4xl max-w-3xl mx-auto text-center font-bold text-gray-900 mb-6 mt-18">
        Our Best Doctors
      </h1>
      <p className="text-gray-500 mb-8 text-lg max-w-3xl mx-auto text-center p-4">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
        Whether it’s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-12">
        {visibleDoctors.map(doc => (
          <Doctors key={doc.registration_number} doc={doc} />
        ))}
      </div>

      {/* Show button if not showing all */}
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button onClick={() => setShowAll(true)} className="bg-[#176AE5] text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 mb-12">View All Doctors
          </button>
        </div>
      )}

      <h1 className="text-4xl max-w-3xl mx-auto text-center font-bold text-gray-900 mb-6 mt-8">
        We Provide Our Best Medical Services
      </h1>
      <p className="text-gray-500 mb-8 text-lg max-w-3xl mx-auto text-center p-4">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
      </p>

      <div className='mb-12 flex justify-between'>
        {/* 1st */}
        <div className='flex rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 w-[300px]'>
          <img src="/public/C001-assets/success-doctor.png" className='w-16'  />
          <h1 className='font-bold text-5xl'>199+</h1>
          <p className='text-gray-500'>Total Doctors</p>
        </div>
        {/* 2nd */}
        <div className='flex rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 w-[300px]'>
          <img src="/public/C001-assets/success-review.png" className='w-16'  />
          <h1 className='font-bold text-5xl'>467+</h1>
          <p className='text-gray-500'>Total Reviews</p>
        </div>
        {/* 3rd */}
        <div className='flex rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 w-[300px]'>
          <img src="/public/C001-assets/success-patients.png" className='w-16'  />
          <h1 className='font-bold text-5xl'>1900+</h1>
          <p className='text-gray-500'>Patients</p>
        </div>
        {/* 4th */}
        <div className='flex rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 w-[300px]'>
          <img src="/public/C001-assets/success-staffs.png" className='w-16'  />
          <h1 className='font-bold text-5xl'>300+</h1>
          <p className='text-gray-500'>Total Stuffs</p>
        </div>
      </div>




    </div>

    </div>
  );
};

export default Home;
