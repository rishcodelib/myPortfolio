import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/NavbarComponent/navbar';
import Footer from '../../Layouts/Footer/Footer'; // Ensure this path is correct and matches the file name

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;