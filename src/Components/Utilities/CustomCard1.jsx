import React from 'react'
import "./Utilities.css"
const CustomCard1 = ({title="", Description="",widthclass="custom-w-flex-3"}) => {
  return (
    <div 
        className={"card border-0 bg-light-subtle text-justify p-4 "+widthclass}>
            <div
            className=' icon-container w-60 rounded-circle bg-opacity-25 bg-secondary'>

            </div>
            <p 
            className=' fw-semibold my-4'>
                {title}
            </p>
            <p 
            className=' fw-light'>
                {Description}
            </p>
        </div>
  )
}

export default CustomCard1
