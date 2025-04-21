import React from 'react';

const Banner = () => {
  return (
    <div className="py-12 rounded-2xl container mx-auto mt-8 mb-8 px-6 md:px-12 shadow-md p-2">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="text-gray-500 mb-8 text-lg">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
          Whether it’s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Search any doctor..."
            className="w-full md:w-[500px] border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          />
          <button className="bg-[#176AE5] text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700">
            Search Now
          </button>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-6">
        <img
          className="w-full lg:w-[500px] md:w-[300px] rounded-lg "
          src="/C001-assets/banner-img-1.png"
          alt="Doctor 1"
        />
        <img 
          className="w-full lg:w-[500px] md:w-[300px]  rounded-lg md:flex hidden"
          src="/C001-assets/banner-img-1.png"
          alt="Doctor 2"
        />
      </div>
    </div>
  );
};

export default Banner;
