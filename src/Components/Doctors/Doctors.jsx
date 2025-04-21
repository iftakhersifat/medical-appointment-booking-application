import React from 'react';

const Doctors = ({doc}) => {
    const {name, education, image, registration_number, speciality } =doc;
    return (
        <div className='container mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='p-4' src={image} />
  </figure>


  <div className="card-body">
  <div className="flex gap-2">
  <p className="text-[#09982F] bg-green-50 border border-green-200 rounded-full text-center px-2 py-0.5">
    Available
  </p>
  <p className="text-[#176AE5] bg-blue-50 border border-blue-200 rounded-full text-center px-2 py-0.5">
    {speciality}
  </p>
</div>



    <h2 className="card-title font-extrabold text-2xl">{name}</h2>
    <p>{education}</p>
    <p className='border-t-1 border-dashed'></p>
    
    <p className='flex gap-2 mb-4'>
    <span class="inline-flex items-center mt-1 justify-center w-4 h-4 text-[10px] border border-black rounded-full font-bold leading-none">R</span>
    {registration_number}</p>

    <div className="flex justify-center">
      <button className="btn text-[#176AE5] border-1 border-[#176AE5] rounded-full w-full">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Doctors;