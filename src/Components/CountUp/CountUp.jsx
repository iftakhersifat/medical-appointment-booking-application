import React from 'react';
import CountUp from 'react-countup';

const CountUpSection = () => {
  return (
    <div className='mb-12 grid md:grid-cols-4 p-12 md:p-0 md:gap-6 gap-4'>
      {/* 1st */}
      <div className='flex flex-col rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 lg:w-[300px] md:w-[160px]'>
        <img src="/C001-assets/success-doctor.png" className='w-16' alt="Doctors" />
        <h1 className='font-bold text-5xl'>
          <CountUp end={199} duration={3} suffix="+" />
        </h1>
        <p className='text-gray-500'>Total Doctors</p>
      </div>

      {/* 2nd */}
      <div className='flex flex-col rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 lg:w-[300px] md:w-[160px] lg:ml-16'>
        <img src="/C001-assets/success-review.png" className='w-16' alt="Reviews" />
        <h1 className='font-bold text-5xl'>
          <CountUp end={467} duration={3} suffix="+" />
        </h1>
        <p className='text-gray-500'>Total Reviews</p>
      </div>

      {/* 3rd */}
      <div className='flex flex-col rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 lg:w-[300px] md:w-[160px] lg:ml-16'>
        <img src="/C001-assets/success-patients.png" className='w-16' alt="Patients" />
        <h1 className='font-bold text-5xl'>
          <CountUp end={1900} duration={3} suffix="+" />
        </h1>
        <p className='text-gray-500'>Patients</p>
      </div>

      {/* 4th */}
      <div className='flex flex-col rounded-xl card bg-base-100 shadow-sm p-6 space-y-4 lg:w-[300px] md:w-[160px] lg:ml-16'>
        <img src="/C001-assets/success-staffs.png" className='w-16' alt="Staffs" />
        <h1 className='font-bold text-5xl'>
          <CountUp end={300} duration={3} suffix="+" />
        </h1>
        <p className='text-gray-500'>Total Staffs</p>
      </div>
    </div>
  );
};

export default CountUpSection;
