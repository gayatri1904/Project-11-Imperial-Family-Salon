import Display from "./MyComponents/Display";
import NavBar from "./MyComponents/NavBar";
import Services from "./MyComponents/Services";
import Staff from "./MyComponents/Staff";
import Appointment from "./MyComponents/Appointment";
import Footer from "./MyComponents/Footer";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <>
    <NavBar/>
    <Display/>
    <Services/>
    <Staff/>
    <Appointment/>
    <Footer/>
    </>
  );
}

export default App;
