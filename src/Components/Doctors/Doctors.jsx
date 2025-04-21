import React from 'react';

const Doctors = ({doc}) => {
    const {name, education, image, registration_number } =doc;
    return (
        <div className='container mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
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