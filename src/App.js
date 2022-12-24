import Display from "./MyComponents/Display";
import NavBar from "./MyComponents/NavBar";
import Services from "./MyComponents/Services";
import Staff from "./MyComponents/Staff";
import Appointment from "./MyComponents/Appointment";
import Footer from "./MyComponents/Footer";
import Offers from "./MyComponents/Offers";
import Review from './MyComponents/Review';
import FAQ from "./MyComponents/FAQ";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <>
    <NavBar/>
    <Display/>
    <Offers/>
    <Services/>
    <Staff/>
    <Appointment/>
    <Review/>
    <FAQ/>
    <Footer/>
    </>
  );
}

export default App;
