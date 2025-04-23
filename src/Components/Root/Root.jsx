import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Loader from '../Loader/Loader'; // import the loader

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />

      {navigation.state === "loading" ? (
        <Loader />
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
};

export default Root;
