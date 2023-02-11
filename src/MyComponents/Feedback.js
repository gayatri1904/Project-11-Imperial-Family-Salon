import React from 'react';
import '../MyResources/Feedback.css';
import { useState } from "react";
import FormInput from './FormInput';
import { useNavigate } from "react-router-dom";

export default function Feedback() {
  const navigate = useNavigate();

  const navigateToSubmit = () => {
    navigate("/feedsubmit");
  };
  const [feedback, setFeedback] = useState();
    const [values, setValues] = useState({
        Fullname: "",
        Email: "",
        Contact: "",
        Message: ""
      });
    
      const inputs = [
        {
          id: 1,
          name: "Name",
          type: "text",
          placeholder: "Full Name",
          errorMessage: "Please enter your full name.",
          pattern: "^{3,16}$",
          required: true
        },
        {
            id: 2,
            name: "Number",
            type: "text",
            errorMessage: "Please Provide your correct phone Number",
            placeholder: "Contact Number",
            required: true,
            pattern: "[0-9]{10}"
          },
        {
            id: 3,
            name: "Service",
            type: "text",
            placeholder: "Service Taken",
            required:true
          }
      ];
    
      const Submit = (e) => {
          const formEle = document.querySelector("form");
          const formDatab = new FormData(formEle);
          formDatab.append("Feedback", feedback);
          fetch(
              "https://script.google.com/macros/s/AKfycbzPse8Dcj7KDJpDGo2b-SaGQuNKZeNyQogSzsdoY-5cd8xHIXco3Zv7-fhIC_O8-8XbwA/exec",
              {
                method: "POST",
                body: formDatab
              }
            );
            navigateToSubmit();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
  return (
    <>
    <div className='app-outer-box' id='MyForm'>
        <form name="myForm" className="form" onSubmit={(e) => Submit(e)} data-aos="fade-right" data-aos-duration="1000" style={{marginTop:"40%"}}>
            <h1 className='app-head'>Feedback Form</h1>
                    {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <div className='formInput' style={{height:"120px"}}>
                        <textarea rows = "5" cols = "60" name = "Feedback" placeholder='Your Feedback' className='messageField' value={feedback} onChange={(e)=>setFeedback(e.target.value)}></textarea>
                    </div>
                    <button className="buttonok" id="send" onclick="Submit()">
                    Submit
                    </button>
        </form>
    </div>
    </>
  )
}
