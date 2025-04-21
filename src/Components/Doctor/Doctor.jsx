import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doctor = () => {
    const details = useLoaderData();
    const { id, speciality, image, name, education, working_at, registration_number, availability, consultation_fee } = details;

    const [isBooked, setIsBooked] = useState(false);

    const handleBooking = () => {
        if (!isBooked) {
            setIsBooked(true);
            toast.success(`Successfully booked appointment with Dr. ${name}`, {
                position: "top-right",
            });
            setTimeout(() => {
                window.location.href = `/booking/${id}`; // <-- redirect using window
            }, 1500);
        } else {
            toast.error("You have already booked an appointment!", {
                position: "top-center",
            });
        }
    };

    return (
        <div className='bg-gray-100 p-2'>
            <div className='container mx-auto'>

                <div className='border-2 border-white bg-white rounded-2xl mt-8 mb-8 py-4'>
                    <h1 className="text-4xl max-w-3xl mx-auto text-center font-bold text-gray-900 mb-6 mt-8">
                        Doctor's Profile Details
                    </h1>
                    <p className="text-gray-500 mb-8 text-lg max-w-3xl mx-auto text-center p-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>

                <div className='flex border-2 border-white bg-white rounded-2xl mt-8 mb-8'>
                    <div className='w-[30%] p-12'>
                        <img src={image} alt="Doctor" className='rounded-xl' />
                    </div>

                    <div className='w-[70%] py-16 pr-12 space-y-7'>
                        <h2 className="card-title font-extrabold text-2xl">{name}</h2>
                        <p>{education}</p>

                        <div className='flex flex-col'>
                            <p>Working at</p>
                            <span className='font-bold text-2xl'>{working_at}</span>
                        </div>

                        <div className="border-t border-dashed my-4"></div>

                        <p className='flex gap-2 mb-4'>
                            <span className="inline-flex items-center mt-1 justify-center w-4 h-4 text-[10px] border border-black rounded-full font-bold leading-none">R</span>
                            {registration_number}
                        </p>

                        <div className="border-t border-dashed my-4"></div>

                        <h1 className='font-bold flex gap-4'>Availability
                            <div className='flex gap-4 text-[14px]'>
                                {
                                    availability.map((slot, index) => (
                                        <p key={index} className='text-[#FFA000] rounded-full bg-orange-50 border px-2'>
                                            {slot}
                                        </p>
                                    ))
                                }
                            </div>
                        </h1>

                        <p><span className='font-bold'>Consultation Fee:</span> <span className='text-[#176AE5]'>{consultation_fee}</span></p>
                    </div>
                </div>

                {/* Appointment booking */}
                <div className='border-2 border-white bg-white rounded-2xl mt-8 mb-8 p-12'>
                    <h1 className="text-4xl max-w-3xl mx-auto text-center font-bold text-gray-900 mb-6">
                        Book an Appointment
                    </h1>

                    <div className="border-t border-dashed my-4"></div>

                    <h1 className='font-bold flex gap-4 mt-3 mb-3'>Availability</h1>

                    <div className="border-t border-dashed my-4"></div>

                    <button
                        onClick={handleBooking}
                        className="btn text-[#176AE5] mt-8 border border-[#176AE5] rounded-full w-full bg-[#176AE5] text-white hover:bg-blue-600"
                    >
                        Book Appointment Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
