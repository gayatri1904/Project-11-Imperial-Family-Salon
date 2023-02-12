import React, { useState } from 'react'
import '../MyResources/Packages.css'

export default function Packages() {
    const [flip1,setFlip1]=useState('none')
    const [vis1,setVis1]=useState('block')
    const [visi1,setVisi1]=useState('none')
    const [flip2,setFlip2]=useState('none')
    const [vis2,setVis2]=useState('block')
    const [visi2,setVisi2]=useState('none')
    const [flip3,setFlip3]=useState('none')
    const [vis3,setVis3]=useState('block')
    const [visi3,setVisi3]=useState('none')
    const [flip4,setFlip4]=useState('none')
    const [vis4,setVis4]=useState('block')
    const [visi4,setVisi4]=useState('none')
    const [flip5,setFlip5]=useState('none')
    const [vis5,setVis5]=useState('block')
    const [visi5,setVisi5]=useState('none')
    const [flip6,setFlip6]=useState('none')
    const [vis6,setVis6]=useState('block')
    const [visi6,setVisi6]=useState('none')
    const Package1=()=>{
        if(vis1==="block"){
            setFlip1('rotateY(180deg)');
            setVis1("none");
            setVisi1("block");
        }
        else{
            setFlip1('rotateY(0deg)');
            setVis1("block");
            setVisi1("none");
        }
    }
    const Package2=()=>{
        if(vis2==="block"){
            setFlip2('rotateY(180deg)');
            setVis2("none");
            setVisi2("block");
        }
        else{
            setFlip2('rotateY(0deg)');
            setVis2("block");
            setVisi2("none");
        }
    } 
    const Package3=()=>{
        if(vis3==="block"){
            setFlip3('rotateY(180deg)');
            setVis3("none");
            setVisi3("block");
        }
        else{
            setFlip3('rotateY(0deg)');
            setVis3("block");
            setVisi3("none");
        }
    } 
    const Package4=()=>{
        if(vis4==="block"){
            setFlip4('rotateY(180deg)');
            setVis4("none");
            setVisi4("block");
        }
        else{
            setFlip4('rotateY(0deg)');
            setVis4("block");
            setVisi4("none");
        }
    }
    const Package5=()=>{
        if(vis5==="block"){
            setFlip5('rotateY(180deg)');
            setVis5("none");
            setVisi5("block");
        }
        else{
            setFlip5('rotateY(0deg)');
            setVis5("block");
            setVisi5("none");
        }
    } 
    const Package6=()=>{
        if(vis6==="block"){
            setFlip6('rotateY(180deg)');
            setVis6("none");
            setVisi6("block");
        }
        else{
            setFlip6('rotateY(0deg)');
            setVis6("block");
            setVisi6("none");
        }
    } 
  return (
    <>
    <h1 className='package-head'>Packages</h1>
    <div className='package-outer'>
      <div className='package-cardbox'>
        <div className='package-card' style={{transform:flip1}}  onClick={Package1}>
            <h1 className='package-name' style={{display:vis1}}>Women's Combo</h1>
            <h3 className='package-price' style={{display:vis1}}>₹1099</h3>
            <div className='package-items' style={{display:visi1,transform:flip1}}>
                <p className='package-item'>Cleanup</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Full Hand Wax</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Underarm</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Half Leg Wax</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Threading</p>
            </div>
        </div>
        <div className='package-card' style={{transform:flip2}}  onClick={Package2}>
            <h1 className='package-name' style={{display:vis2}}>Men's Combo</h1>
            <h3 className='package-price' style={{display:vis2}}>₹1399</h3>
            <div className='package-items' style={{display:visi2,transform:flip2,marginTop:"20px"}}>
                <p className='package-item'>Mens D-Tan</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Cleanup</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Shaving</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Haircut</p>
            </div>
        </div>
        <div className='package-card' style={{transform:flip3}}  onClick={Package3}>
            <h1 className='package-name' style={{display:vis3}}>Women's Care Pack</h1>
            <h3 className='package-price' style={{display:vis3}}>₹2500</h3>
            <div className='package-items' style={{display:visi3,transform:flip3}}>
                <p className='package-item'>Cherlys Facial</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Bleach/D Tan</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Full Hand Wax & Half Leg Wax</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Underarm</p>
            </div>
        </div>
        <div className='package-card' style={{transform:flip4}}  onClick={Package4}>
            <h1 className='package-name' style={{display:vis4}}>Men's Spa Pack</h1>
            <h3 className='package-price' style={{display:vis4}}>₹999</h3>
            <div className='package-items' style={{display:visi4,transform:flip4}}>
                <p className='package-item'>Haircut</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Hair Spa</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Shaving</p>
            </div>
        </div>
        <div className='package-card' style={{transform:flip5}}  onClick={Package5}>
            <h1 className='package-name' style={{display:vis5}}>PediColour</h1>
            <h3 className='package-price' style={{display:vis5}}>₹1500</h3>
            <div className='package-items' style={{display:visi5,transform:flip5,marginTop:"20px"}}>
                <p className='package-item'>Colour Touchup 1 inch</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Pedicure</p>
            </div>
        </div>
        <div className='package-card' style={{transform:flip6}}  onClick={Package6}>
            <h1 className='package-name' style={{display:vis6}}>Women's Inclusive Pack</h1>
            <h3 className='package-price' style={{display:vis6}}>₹1500</h3>
            <div className='package-items' style={{display:visi6,transform:flip6}}>
                <p className='package-item'>Hair Spa</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Cleanup</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Eyebrow</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
