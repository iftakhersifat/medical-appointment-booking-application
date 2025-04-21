import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <footer className="footer footer-horizontal footer-center p-10">
  <div>
  <h1 className="btn btn-ghost text-2xl font-bold mb-4"><img src="/public/C001-assets/logo.png" className='w-12'/>Phudu</h1>
  <ul className="menu menu-horizontal px-1 gap-4">
        
        <NavLink  className={({ isActive }) =>
        isActive ? " border-b-2 border-blue-500 pb-1" : " hover:text-blue-400"
        } to="/">Home</NavLink>

        <NavLink  className={({ isActive }) =>
        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
        } to="/myBookings">My-Bookings</NavLink>

        <NavLink  className={({ isActive }) =>
        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
        } to="/blogs">Blogs</NavLink>
        
        <NavLink  className={({ isActive }) =>
        isActive ? "text-blue-500 border-b-2 border-blue-500 pb-1" : "text-gray-600 hover:text-blue-400"
        } to="/contactUs">Contact Us</NavLink>
  </ul>
  </div>
  <hr className="border-t border-gray-300 w-full" />

  
  <nav className="flex justify-center">
  <div className="flex gap-4">
    {/* Facebook */}
    <a className="bg-[#1877F2] rounded-full w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-white">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    </a>

    {/* X (Twitter) */}
    <a className="bg-black rounded-full w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" className="fill-white">
        <path d="M370.6 64H454L293.7 248.5 480 448H343.2l-99.5-111.5L128 448H44.1L210.8 252.1 32 64h140.7l91.5 101.7L370.6 64z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a className="bg-[#FF0000] rounded-full w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24" className="fill-white">
        <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.5-48.5C456.6 64 288 64 288 64s-168.6 0-213.2 11.6c-23.7 6.2-42.3 24.8-48.5 48.5C16 168.7 16 256 16 256s0 87.3 10.3 131.9c6.3 23.7 24.9 42.3 48.5 48.5C119.4 448 288 448 288 448s168.6 0 213.2-11.6c23.7-6.2 42.3-24.8 48.5-48.5C560 343.3 560 256 560 256s0-87.3-10.3-131.9zM232 336V176l142 80-142 80z"/>
      </svg>
    </a>

    {/* LinkedIn */}
<a className="bg-[#0A66C2] rounded-full w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" className="fill-white">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.58 0 53.5 0 23.29 24.39 0 54.56 0c30.17 0 54.3 23.29 54.3 53.5 0 30.08-24.13 54.6-55.07 54.6zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.28-79.3-48.3 0-55.7 37.7-55.7 76.6V448h-92.68V148.9h88.98v40.8h1.3c12.4-23.5 42.68-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
  </svg>
</a>
  </div>
</nav>

</footer>
        </div>
    );
};

export default Footer;