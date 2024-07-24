import React from 'react'

const CustomCard2 = ({title="", Description=""}) => {
  return (
    <div className=' card rounded-5 py-5 px-3 position-relative custom-w-flex-4'>
       <div
            className='custom-posa-topright icon-container custom-wh-80 rounded-circle bg-opacity-25 bg-secondary'>

            </div>
            <p 
            className=' fw-bold my-4 display-6'>
                {title}
            </p>
            <p 
            className=' fw-light'>
                {Description}
            </p>
    </div>
  )
}

export default CustomCard2
