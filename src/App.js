import Display from "./MyComponents/Display";
import NavBar from "./MyComponents/NavBar";
import Services from "./MyComponents/Services";
// import Staff from "./MyComponents/Staff";
import Appointment from "./MyComponents/Appointment";
import Footer from "./MyComponents/Footer";
// import Offers from "./MyComponents/Offers";
import Review from './MyComponents/Review';
// import FAQ from "./MyComponents/FAQ";
import Popup from "./MyComponents/Popup";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Packages from './MyComponents/Packages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  AOS.init()
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<NavBar/>,<Display/>,<Services/>,<Packages/>,<Appointment/>,<Review/>,<Footer/>]} />
        <Route path="/submit" element={<Popup/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
