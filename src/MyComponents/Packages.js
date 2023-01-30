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
    const Package1=()=>{
        setFlip1('rotateY(180deg)');
        setVis1("none");
        setVisi1("block");
    } 
    const Package2=()=>{
        setFlip2('rotateY(180deg)');
        setVis2("none");
        setVisi2("block");
    } 
    const Package3=()=>{
        setFlip3('rotateY(180deg)');
        setVis3("none");
        setVisi3("block");
    } 
  return (
    <>
    <h1 className='package-head'>Packages</h1>
    <div className='package-outer'>
      <div className='package-cardbox'>
        <div className='package-card' style={{transform:flip1}}  onClick={Package1}>
            <h1 className='package-name' style={{display:vis1}}>Package 1</h1>
            <h3 className='package-price' style={{display:vis1}}>₹2000</h3>
            <div className='package-items' style={{display:visi1,transform:flip1}}>
                <p className='package-item'>Haircut</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Hairwash</p>
            </div>
        </div>
        <div className='package-card' style={{transform:flip2}}  onClick={Package2}>
            <h1 className='package-name' style={{display:vis2}}>Package 2</h1>
            <h3 className='package-price' style={{display:vis2}}>₹2000</h3>
            <div className='package-items' style={{display:visi2,transform:flip2}}>
                <p className='package-item'>Haircut</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Hairwash</p>
            </div>
        </div>
        <div className='package-card' style={{transform:flip3}}  onClick={Package3}>
            <h1 className='package-name' style={{display:vis3}}>Package 3</h1>
            <h3 className='package-price' style={{display:vis3}}>₹2000</h3>
            <div className='package-items' style={{display:visi3,transform:flip3}}>
                <p className='package-item'>Haircut</p>
                <p className='package-item'>+</p>
                <p className='package-item'>Hairwash</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
