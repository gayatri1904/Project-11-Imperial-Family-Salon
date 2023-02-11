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
import About from "./MyComponents/About";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Packages from './MyComponents/Packages';
import Feedback from "./MyComponents/Feedback";
import FeedPopup from "./MyComponents/FeedPopup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  AOS.init()
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<NavBar/>,<Display/>,<About/>,<Services/>,<Packages/>,<Appointment/>,<Review/>,<Footer/>]} />
        <Route path="/feedback" element={[<NavBar/>,<Feedback/>]} />
        <Route path="/submit" element={<Popup/>} />
        <Route path="/feedsubmit" element={<FeedPopup/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
