import React from 'react'
import "./Partial.css"
const ContactCard = () => {
  return (
    <div 
    className=' rounded-5 p-5 custom-p-10 bg-white shadow-dark custom-w-100 mx-auto'>
      <h3 className=' fw-bold display-6 text-black'>
        Get A Free Consultation
      </h3>
        <input 
            type='text' 
            placeholder='YOur Name' 
            className=' form-input custom-ap-17 w-100 mx-auto d-grid my-4'/>
        <input 
            type='email' 
            placeholder='Email' 
            className=' form-input custom-ap-17 w-100 mx-auto d-grid  my-4'/>
            <button 
            className=' btn btn-dark p-3 px-5 rounded-4 custom-ap-17 w-100 mx-auto d-grid  my-4'>
              Next
            </button>
    </div>
  )
}

export default ContactCard
