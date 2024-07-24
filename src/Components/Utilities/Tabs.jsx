import React from 'react'
import "./Utilities.css"
import { NavLink } from 'react-router-dom'
const WhatWeDoTabs = ({description,listitems,circle,extra}) => {
  return (
    <div 
    className='custom-h-50vh rounded-5 bg-light px-lg-5 p-3 d-flex justify-content-center align-items-center custom-col-md-10'>
        <div 
        className=' col-md-5 mb-4'>
            <p 
            className=' fw-bold px-2'>
            Innovating SOlutions through cutting-
            
            edge Tech. Expertise in software, AI and 
            
            IOT. SOlving complex problems with 
            
            creativity.
        </p>

        <ul className=' px-2'>
            <li className=' lh-lg'>
                Tech Innovtion for deiverse industries.
            </li>
            <li className=' lh-lg'>
                AI, IoT and software development.
            </li>
            <li className=' lh-lg'>
                Problem solving through tech solutions.
            </li>
            <li className=' lh-lg'>
                Agile develoment methodlogies.
            </li>
            <li className=' lh-lg'>
                Continuous learnign and adpatation.
            </li>
        </ul>
        <NavLink className="links-2 bb-red mt-5">LEARN MORE</NavLink>
        </div>

        <div
        className='card bg-white d-flex justify-content-center align-items-center mx-4 p-4 w-280 rounded-4'
        >
            <div className='outer-circle'>
                <div className="inner-circle ">
                    <p>86%</p>
                </div>
            </div>
            <p className=' text-center px-3'>
                86% of consumers
                 
                are willing to
                
                 pay more for an 
                 
                 upgraded experience.
            </p>
            
        </div>
        
    </div>
  )
}

export default WhatWeDoTabs
