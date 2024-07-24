import React, { useEffect, useState } from 'react'
import "./Profile.css"
import FoodCard from '../../Utilities/FoodCard'
import Foods from "./Foods";
import { GetProducts2 } from '.';
import { useLocation } from 'react-router-dom';
const Profile = () => {
  const [personalDetails,setPersonalDetails]=useState(useLocation().state.val);
  const [products,setproducts]=useState([]);
  useEffect(()=>{
    console.log(personalDetails)
    GetProducts2(personalDetails,setPersonalDetails,setproducts)
  },[])
  useEffect(()=>{
    console.log(products)
    console.log(personalDetails.Profile)
  },[products,setproducts,personalDetails])
      const selling=products.filter((item)=>item.avaialable===true);
  const sold=products.filter((item)=>item.avaialable===false);
  const[show,setshow]=useState("selling");
  return (
    <>
      <div 
      className=' d-flex align-items-center flex-column'>
        <div 
        className='main-profile w-fit mx-auto'>
          <div 
          className=' img-container rounded-circle'>
            <img 
            className=' rounded-circle'
            src={personalDetails.profile} 
            alt='user' 
            width={"100%"} 
            height={"100%"} />
          </div>
          <div 
          className=' text-body-emphasis mb-5 mt-3'>
            <p>{personalDetails.aadharName}</p>
            <p>{personalDetails.restaurantName}</p>
          </div>
        </div>

        <div 
        className=' col-md-10 mx-auto tabs d-flex justify-content-around  bg-secondary-subtle align-items-center'>
          <p
          className={show==="selling"?'col-md-3 text-center py-3 tabs-bb-red cursor-pointer':"col-md-3 text-center py-3 cursor-pointer"} 
          tabIndex={0}
          onClick={()=>setshow("selling")}>
            selling
          </p>
          <p
          className={show==="sold"?'col-md-3 text-center py-3 tabs-bb-red cursor-pointer':"col-md-3 text-center py-3 cursor-pointer"} 
          tabIndex={1}
          onClick={()=>setshow("sold")}>
            sold
          </p>
        </div>
        <div 
        className=' col-md-10 my-5 d-flex justify-content-around flex-wrap gap-3'>
          
          {show==="sold"?sold.map((elem,index)=><FoodCard name={elem.productname} price={elem.price} image={elem.image} available={elem.avaialable}/>):
          selling.map((elem,index)=><FoodCard name={elem.productname} price={elem.price} image={elem.image} available={elem.avaialable}/>)}
        </div>
      </div>
    </>
  )
}

export default Profile;
