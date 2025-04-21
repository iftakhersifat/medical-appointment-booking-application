import React from 'react';
import { useLoaderData } from 'react-router';

const Doctor = () => {
    const details =useLoaderData();
    console.log(details);
    const {id, speciality, image, name}=details
    return (
        <div>
           <div></div>
        </div>
    );
};

export default Doctor;