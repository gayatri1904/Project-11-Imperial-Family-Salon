import React from 'react';
import Accordion from "../Accordion Component/Accordion";
import { Data } from '../Accordion Component/data';
import '../MyResources/FAQ.css';

export default function FAQ() {
  return (
    <div>
      <h1 className='faq-head'>FAQ</h1>
      <Accordion className="accordion-body" openAll={true} data={Data}/>
    </div>
  )
}
