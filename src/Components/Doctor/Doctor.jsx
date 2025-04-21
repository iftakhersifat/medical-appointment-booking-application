import React from 'react';
import { useLoaderData } from 'react-router';

const Doctor = () => {
    const details =useLoaderData();
    console.log(details);
    const {id, speciality, image, name, education, working_at, registration_number, availability, consultation_fee}=details
    return (
        <div className='bg-gray-100 p-2'>
            <div className='container mx-auto '>
           
           <div className='flex border-2 border-white bg-white rounded-2xl mt-8 mb-8'>
           <div className='w-[30%] p-12'>
            <img src={image} alt="" />
           </div>

           <div className='w-[70%] py-12 space-y-4'>
           <h2 className="card-title font-extrabold text-2xl">{name}</h2>
           <p>{education}</p>

           <div className='flex flex-col'>
           <p>Working at</p>
           <span className='font-bold text-2xl'>{working_at}</span>
           </div>


           <p className='border-t-1 border-dashed'></p>
           <p className='flex gap-2 mb-4'>
          <span className="inline-flex items-center mt-1 justify-center w-4 h-4 text-[10px] border border-black rounded-full font-bold leading-none">R</span>
          {registration_number}</p>
          <p className='border-t-1 border-dashed'></p>


          <h1 className='font-bold flex gap-4'>Availability
            <div className='flex gap-4 text-[14px]'>
                {
                    availability.map((doc,index)=><p key={index} className=' text-[#FFA000] rounded-full bg-orange-50 border-1 px-2'>{doc}</p>)
                }
            </div>
          </h1>

          <p><span className='font-bold'>Consultation Fee:</span> <span className='text-[#176AE5]'>{consultation_fee}</span></p>

           </div>
           </div>

        </div>
        </div>
    );
};

export default Doctor;