import React from 'react'
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom'
const Hero = () => {
  const token=window.localStorage.getItem("auth-token");
  const navigate=useNavigate();
  return (
    <>
      <div 
      className="bg-hero overflow-hidden">
        <div className='bg-overlay p-4 w-100 mx-auto'>
          <div 
        className='w-100 col-md-6 d-md-grid justify-content-center text-center text-white'>
          <h2 
          className=' display-3 fw-bold'>
            Unlocking
            Potenttials  
            Present your experience
          </h2>
          <p className=' fs-5'>
            Harness the Force of Data-Driven Strategies,
            <br/> 
            Compelling Content, and Targeted Engagement. 
            <br/>
            Elevate your coocking skills on this
            <br/>
            Digital platform.
          </p>
        </div>

        {token
        ?<button className='btn btn-light fw-bold rounded-5 px-5 py-3 mx-auto d-grid'
        onClick={()=>navigate("addproduct")}>
          Add Product
        </button>
        :<button className='btn btn-light fw-bold rounded-5 px-5 py-3 mx-auto d-grid'
        onClick={()=>navigate("/seller/registration")}>
          Join our community
        </button>}
        </div>
        

      </div>
    </>
  )
}

export default Hero
