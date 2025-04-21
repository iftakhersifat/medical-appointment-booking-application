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

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index: true, Component:Home}
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
  </StrictMode>,
)
