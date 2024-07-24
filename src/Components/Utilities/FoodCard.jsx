import React from 'react'
import "./Utilities.css";
const FoodCard = ({name,price,image,available,location,quantity}) => {
  return (
    <div 
          className="card custom-w-flex-3 position-relative">
            <div 
            className='w-100 position-absolute top-50 start-50 bg-danger py-2 text-white text-center sold-slip'
            hidden={available}>
              <h2>SOLD</h2>
            </div>
              <img
              className=' card-img-top custom-card-img' 
              src={image} alt='food-item' width={"100%"} height={"100%"}/>
            <div className=' card-body'>
              <p className=' card-text'>
                {name}
              </p>
              <p className=' card-text'>
                {price}
              </p>
              <p className=' card-text'>
                {quantity}
              </p>
              <p className=' card-text'>
                {location}
              </p>
            </div>
            <button 
            className='btn btn-primary w-100'
            disabled={!available}
            onClick={()=>alert("please order through dashboard")}
            >
              Buy Now
            </button>
          </div>
  )
}

export default FoodCard
