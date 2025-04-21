import React from 'react';
import { useParams } from 'react-router';

// Your doctors data
const doctorsData = [
    {
        "id": 1,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Sarah Johnson",
        "education": "MBBS, MD (Cardiology)",
        "speciality": "Cardiologist",
        "experience": "10 years",
        "registration_number": "Reg No : BD123456",
        "working_at": "Heart Care Hospital",
        "availability": ["Monday", "Wednesday", "Friday"],
        "consultation_fee": "Taka : 273 (incl. VAT) Per consultation"
      },
      {
        "id": 2,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Amit Verma",
        "education": "MBBS, MS (Orthopedics)",
        "speciality": "Orthopedic Surgeon",
        "experience": "12 years",
        "registration_number": "Reg No : BD654321",
        "working_at": "Bone and Joint Clinic",
        "availability": ["Tuesday", "Thursday"],
        "consultation_fee": "Taka : 320 (incl. VAT) Per consultation"
      },
      {
        "id": 3,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Emily Chen",
        "education": "MBBS, DGO (Gynecology)",
        "speciality": "Gynecologist",
        "experience": "8 years",
        "registration_number": "Reg No : BD112233",
        "working_at": "Women's Health Center",
        "availability": ["Monday", "Thursday", "Saturday"],
        "consultation_fee": "Taka : 250 (incl. VAT) Per consultation"
      },
      {
        "id": 4,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. David Lee",
        "education": "MBBS, MS (General Surgery)",
        "speciality": "General Surgeon",
        "experience": "15 years",
        "registration_number": "Reg No : BD223344",
        "working_at": "City Hospital",
        "availability": ["Wednesday", "Saturday"],
        "consultation_fee": "Taka : 300 (incl. VAT) Per consultation"
      },
      {
        "id": 5,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Ananya Roy",
        "education": "MBBS, MD (Pediatrics)",
        "speciality": "Pediatrician",
        "experience": "7 years",
        "registration_number": "Reg No : BD334455",
        "working_at": "Children's Medical Center",
        "availability": ["Sunday", "Tuesday", "Thursday"],
        "consultation_fee": "Taka : 260 (incl. VAT) Per consultation"
      },
      {
        "id": 6,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Michael Smith",
        "education": "MBBS, MD (Dermatology)",
        "speciality": "Dermatologist",
        "experience": "9 years",
        "registration_number": "Reg No : BD445566",
        "working_at": "Skin Care Clinic",
        "availability": ["Monday", "Wednesday", "Friday"],
        "consultation_fee": "Taka : 270 (incl. VAT) Per consultation"
      },
      {
        "id": 7,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Priya Nair",
        "education": "MBBS, MS (ENT)",
        "speciality": "ENT Specialist",
        "experience": "11 years",
        "registration_number": "Reg No : BD556677",
        "working_at": "ENT Hospital",
        "availability": ["Tuesday", "Friday"],
        "consultation_fee": "Taka : 290 (incl. VAT) Per consultation"
      },
      {
        "id": 8,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. John Carter",
        "education": "MBBS, MD (Psychiatry)",
        "speciality": "Psychiatrist",
        "experience": "13 years",
        "registration_number": "Reg No : BD667788",
        "working_at": "Mind Wellness Center",
        "availability": ["Monday", "Thursday", "Saturday"],
        "consultation_fee": "Taka : 310 (incl. VAT) Per consultation"
      },
      {
        "id": 9,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Ritu Sharma",
        "education": "MBBS, DNB (Ophthalmology)",
        "speciality": "Ophthalmologist",
        "experience": "6 years",
        "registration_number": "Reg No : BD778899",
        "working_at": "Vision Eye Hospital",
        "availability": ["Wednesday", "Friday", "Sunday"],
        "consultation_fee": "Taka : 280 (incl. VAT) Per consultation"
      },
      {
        "id": 10,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Thomas Walker",
        "education": "MBBS, MD (Neurology)",
        "speciality": "Neurologist",
        "experience": "14 years",
        "registration_number": "Reg No : BD889900",
        "working_at": "Neuro Care Institute",
        "availability": ["Tuesday", "Saturday"],
        "consultation_fee": "Taka : 340 (incl. VAT) Per consultation"
      },
      {
        "id": 11,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Sofia Martinez",
        "education": "MBBS, DM (Endocrinology)",
        "speciality": "Endocrinologist",
        "experience": "10 years",
        "registration_number": "Reg No : BD990011",
        "working_at": "Endocrine Health Center",
        "availability": ["Monday", "Wednesday", "Friday"],
        "consultation_fee": "Taka : 300 (incl. VAT) Per consultation"
      },
      {
        "id": 12,
        "image": "../public/C001-assets/doctor-sample.png",
        "name": "Dr. Arjun Patel",
        "education": "MBBS, MS (Urology)",
        "speciality": "Urologist",
        "experience": "9 years",
        "registration_number": "Reg No : BD101112",
        "working_at": "Urology Specialist Hospital",
        "availability": ["Sunday", "Tuesday", "Thursday"],
        "consultation_fee": "Taka : 275 (incl. VAT) Per consultation"
      }
];

const Booking = () => {
  const { id } = useParams();

  // Find doctor by id
  const doctor = doctorsData.find(doc => doc.id === Number(id));

  if (!doctor) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Doctor not found
      </div>
    );
  }

  return (
    <div className='bg-gray-100 p-2'>
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl max-w-3xl mx-auto text-center font-bold text-gray-900 mb-6 mt-8">
            My Today Appointments
          </h1>
          <p className="text-gray-500 mb-8 text-lg max-w-3xl mx-auto text-center p-4">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          </p>
        </div>

        {/* cancel button section */}
        <div className='border-2 border-white bg-white rounded-2xl mt-8 mb-8 p-4 p-12'>
          <h1 className='font-bold mb-4'>{doctor.name}</h1>

          <div className='flex justify-between space-y-6'>
            <p>{doctor.education}</p>
            <p>{doctor.consultation_fee}</p>
          </div>

          <p className='border-t-1 border-dashed'></p>
          <button className="btn text-[#FF0000] mt-6 border-1 border-[#FF0000] rounded-full w-full hover:bg-[#FF0000] hover:text-white">
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
