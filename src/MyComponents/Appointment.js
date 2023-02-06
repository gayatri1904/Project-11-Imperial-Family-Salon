import React from 'react';
import '../MyResources/Appointment.css';
import MediaQuery from 'react-responsive';
import { useState } from "react";
import FormInput from './FormInput';
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Appointment() {
  const navigate = useNavigate();

  const navigateToSubmit = () => {
    navigate("/submit");
  };
  const [time, setTime] = useState();
  const [service, setService] = useState();
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
            name: "Date",
            type: "date",
            placeholder: "Select Date",
            required:true
          }
        // {
        //   id: 4,
        //   name: "Message",
        //   type: "text",
        //   placeholder: "Message",
        //   pattern: ".{30,}",
        //   required: true
        // }
      ];
    
      const Submit = (e) => {
          const formEle = document.querySelector("form");
          const formDatab = new FormData(formEle);
          formDatab.append("Timing", time);
          formDatab.append("Service", service);
          fetch(
              "https://script.google.com/macros/s/AKfycbw9wjQ8J8hXxp9N650RpUGpVnH_RHVjtS_XoXsj4ipJtP2jIHmRfNjZbWHWWTNlZ-Qb/exec",
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
    <h1 className='app-head'>Book Appointment</h1>
    <MediaQuery minDeviceWidth={800}>
    <div className='form-outer-box' data-aos="fade-right" data-aos-duration="1000" >
        <form name="myForm" className="form" onSubmit={(e) => Submit(e)}>
                    {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <Box sx={{ minWidth: 80 }}>
                      <FormControl className="timeInput">
                        <InputLabel id="demo-simple-select-label" style={{'position':"absolute"}}>Select Timing</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Timing"
                          value={time}
                          required={true}
                          onChange={(e) => setTime(e.target.value)}
                          style={{height:"48px",'margin-top':'5px',marginLeft:"-5px",width:"280px",backgroundColor:"white",textAlign:"left",fontSize:"15px"}}
                        >
                          <MenuItem value="11 AM">11 AM</MenuItem>
                          <MenuItem value="12 PM">12 PM</MenuItem>
                          <MenuItem value="1 PM">1 PM</MenuItem>
                          <MenuItem value="2 PM">2 PM</MenuItem>
                          <MenuItem value="3 PM">3 PM</MenuItem>
                          <MenuItem value="4 PM">4 PM</MenuItem>
                          <MenuItem value="5 PM">5 PM</MenuItem>
                          <MenuItem value="6 PM">6 PM</MenuItem>
                          <MenuItem value="7 PM">7 PM</MenuItem>
                          <MenuItem value="8 PM">8 PM</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <div className='formInput' style={{height:"120px"}}>
                        <textarea rows = "5" cols = "60" name = "Service" placeholder='Enter Service/Package Name' className='messageField' value={service} onChange={(e)=>setService(e.target.value)}></textarea>
                    </div>
                    <button className="buttonok" id="send" onclick="Submit()">
                    Submit
                    </button>
        </form>
        <img className='left-img' src="https://ik.imagekit.io/tpck/left.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671180382942" alt=""/>
       
    </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={600}>
        <form name="myForm" className="form" onSubmit={(e) => Submit(e)} data-aos="fade-right" data-aos-duration="1000">
                    {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <Box sx={{ minWidth: 80 }}>
                      <FormControl className="timeInput">
                      <InputLabel id="demo-simple-select-label" style={{'position':"absolute",marginLeft:"-18px"}}>Select Timing</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Timing"
                          value={time}
                          required={true}
                          onChange={(e) => setTime(e.target.value)}
                          style={{height:"48px",'margin-top':'5px',marginLeft:"-21px",width:"68vw",backgroundColor:"white",textAlign:"left"}}
                        >
                          <MenuItem value="11 AM">11 AM</MenuItem>
                          <MenuItem value="12 PM">12 PM</MenuItem>
                          <MenuItem value="1 PM">1 PM</MenuItem>
                          <MenuItem value="2 PM">2 PM</MenuItem>
                          <MenuItem value="3 PM">3 PM</MenuItem>
                          <MenuItem value="4 PM">4 PM</MenuItem>
                          <MenuItem value="5 PM">5 PM</MenuItem>
                          <MenuItem value="6 PM">6 PM</MenuItem>
                          <MenuItem value="7 PM">7 PM</MenuItem>
                          <MenuItem value="8 PM">8 PM</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <div className='formInput' style={{height:"120px"}}>
                        <textarea rows = "5" cols = "60" name = "Service" placeholder='Enter Service/Package Name' className='messageField' value={service} onChange={(e)=>setService(e.target.value)}></textarea>
                    </div>
                    <button className="buttonok" id="send" onclick="Submit()">
                    Submit
                    </button>
        </form>
    </MediaQuery>
    </div>
    </>
  )
}
