import React from 'react';
import StaffCard from './StaffCard';
import '../MyResources/Staff.css'
export default function Staff() {
  return (
    <>
    <div className='staff-outer-box'>
    <h1 className='staff-head'>Staff Members</h1>
    <div style={{display:"flex"}}>
    <StaffCard imgsrc={'https://ik.imagekit.io/ok2wgebfs/WhatsApp_Image_2022-12-24_at_6.13.03_PM__1_.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671886408031'} title={'Radhika Siddhu'} post={'~Beautician'}/>
    <StaffCard imgsrc={'https://ik.imagekit.io/ok2wgebfs/rohan_Zt9Tx0Wgk?ik-sdk-version=javascript-1.4.3&updatedAt=1671886606618'} title={'Rohan Hujare'} post={'~Hair Dresser'}/>
    <StaffCard imgsrc={'https://ik.imagekit.io/ok2wgebfs/WhatsApp_Image_2022-12-24_at_6.13.02_PM.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671886408032'} title={'Kamini Durga'} post={'~Beautician'}/>
    </div>
    </div>
    </>
  )
}
