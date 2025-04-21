import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Root/Home/Home.jsx';
import Doctor from './Components/Doctor/Doctor.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Booking from './Components/Doctor/booking.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index: true,
       loader: ()=>fetch("/data.json"),
       Component:Home},
      {
        path: "doctor/:doctorDetails",
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const doctor = data.find(item => item.id === parseInt(params.doctorDetails));
          
          if (!doctor) {
            return null;
          }
      
          return doctor;
        },
        
        Component: Doctor,
      },

      {
        path: "/booking/:id",
        Component: Booking
      },

      {
        path: "contactUs",
        element: <Contacts></Contacts>, // Show Contact Not Found
      }
      
    ]
  },
  {
    path:"*",
    element: <NotFound></NotFound>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" />
  </StrictMode>,
)
