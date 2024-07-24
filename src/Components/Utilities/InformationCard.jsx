import React from 'react'
import { NavLink } from 'react-router-dom'

const InformationCard = ({title,heading,description,link}) => {
  return (
    <div 
      className=' d-flex flex-wrap gap-3 justify-content-around align-items-center my-5 '>
        <div 
        className=' px-5  w-md-48'>
          <p
          className=' fw-medium '>
            {title}
          </p>
          <h3 
          className=' fw-semibold display-5'>
            {heading}
          </h3>
        </div>

        <div
        className='d-flex align-items-center flex-column  w-md-48 px-5'>
          <p>
            {description}
          </p>

          <NavLink 
          className="mt-5 align-self-start bb-red links-2">
            {link}
          </NavLink>
        </div>

      </div>
  )
}

export default InformationCard
