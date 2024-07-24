import React from 'react'
import "./Utilities.css"
const CustomCard3 = ({title,Description}) => {
  return (
     <div className=' card rounded-5 py-5 px-3 position-relative custom-w-flex-3'>
       <div
            className='custom-posa-topleft icon-container custom-wh-80 rounded-circle bg-opacity-25 bg-secondary'>

            </div>
            <p 
            className=' fw-bold my-4 fs-4'>
                {title}
            </p>
            <p 
            className=' fw-light'>
                {Description}
            </p>
    </div>
  )
}

export default CustomCard3
