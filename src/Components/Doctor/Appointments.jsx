import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Your doctors data
import doctorsData from './doctorsData'; // যদি আলাদা ফাইলে রাখো

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const bookedDoctorIds = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
    const bookedDoctors = doctorsData.filter(doctor => bookedDoctorIds.includes(doctor.id));
    setAppointments(bookedDoctors);
  }, []);

  const handleCancel = (id) => {
    const updatedAppointments = appointments.filter(doctor => doctor.id !== id);
    setAppointments(updatedAppointments);

    // Update localStorage
    const bookedDoctorIds = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
    const updatedIds = bookedDoctorIds.filter(docId => docId !== id);
    localStorage.setItem('bookedDoctors', JSON.stringify(updatedIds));
  };

  const goToHome = () => {
    navigate('/');
  };

  if (appointments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-6">
        <h1 className="text-3xl font-bold text-gray-700">No Appointments Found</h1>
        <button
          onClick={goToHome}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Go to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">My Appointments</h1>

        <div className="flex flex-col gap-6">
          {appointments.map(doctor => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-4"
            >
              <h2 className="text-2xl font-bold">{doctor.name}</h2>
              <p><span className="font-semibold">Education:</span> {doctor.education}</p>
              <p><span className="font-semibold">Speciality:</span> {doctor.speciality}</p>
              <p><span className="font-semibold">Fee:</span> {doctor.consultation_fee}</p>

              <button
                onClick={() => handleCancel(doctor.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
