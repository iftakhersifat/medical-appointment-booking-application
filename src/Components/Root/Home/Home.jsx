import React from 'react';
import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../../Doctors/Doctors';

const Home = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
        <h1 className="text-4xl max-w-3xl mx-auto text-center font-bold text-gray-900 mb-6 mt-18">
          Our Best Doctors
        </h1>
        <p className="text-gray-500 mb-8 text-lg max-w-3xl mx-auto text-center p-4">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
          Whether it’s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>

        <div className="grid grid-cols-3 gap-4">
            {
                data.map(doc=><Doctors key={doc.registration_number} doc={doc}></Doctors>)
            }
        </div>

        </div>
    );
};

export default Home;