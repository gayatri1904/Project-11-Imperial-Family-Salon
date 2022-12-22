import React from 'react';
import StaffCard from './StaffCard';
import '../MyResources/Staff.css'
export default function Staff() {
  return (
    <>
    <div className='staff-outer-box'>
    <h1 className='staff-head'>Staff Members</h1>
    <div style={{display:"flex"}}>
    <StaffCard imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} title={'Radhika Siddhu'}/>
    <StaffCard imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} title={'Rohan'}/>
    <StaffCard imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} title={'Kamini'}/>
    </div>
    </div>
    </>
  )
}
