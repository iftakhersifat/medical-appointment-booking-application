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
          const res = await fetch("/data.json"); // fetch full data.json
          const data = await res.json();          // get array
          const doctor = data.find(item => item.id === parseInt(params.doctorDetails)); // find doctor
          return doctor; // return only one doctor
        },
        
        Component: Doctor,
      }
    ]
  },
  {
    path:"*",
    element: <h1 className='mt-96 text-center font-bold text-red-500'>404 error : not found</h1>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" />
  </StrictMode>,
)
