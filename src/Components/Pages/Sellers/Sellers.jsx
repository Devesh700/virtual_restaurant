import React, { useEffect, useState } from 'react'
import ProfileCard from "../../Utilities/ProfileCard"
import AsideCard from "../../Utilities/AsideCard"
import HeroCard from "../../Utilities/HeroCard"
import TabCard from "../../Utilities/TabCard"
import CustomCard1 from "../../Utilities/CustomCard1"
import CustomCard2 from "../../Utilities/CustomCard2"
import CustomAccordion from "../../Utilities/CustomAccordion"
import FaqData from './FaqData'
import { useNavigate } from 'react-router-dom'
const Sellers = () => {
  const navigate=useNavigate();
  const [seller,setseller]=useState([]);
  const GetSellers=async()=>{
    let sellers=await fetch("https://virtual-restaurant-backend.onrender.com/api/seller/getsellers",{
      method:"GET"
    });
    sellers=await sellers.json();
    console.log(sellers.data)
    setseller(sellers.data);
  }
  useEffect(()=>{
    GetSellers();
    console.log(seller)
  },[])
  return (
    <>
        {seller.map((val,index)=>
            <div key={index}
          onClick={()=>navigate("profile",{state:{val}})}>
          <ProfileCard
          title={"masterChef"}
          image={val.profile}
          name={val.aadharName}
          quote={"i am master chef awardee 5 times, coocking is my passion . a unique coocking style makes me a perfect chef , get your value for your price"}/>
          </div>
        )}
          
         <div className=' col-md-10 mx-auto my-3 p-4 mt-5'>
                <p className=' text-center fw-semibold'>
                    FAQ
                </p>
                <h2 className=' fw-bold display-6 text-center my-3'>
                    FAQs about Sellers 
                </h2>
                <p className=' text-center '>
                    Looking to learn more about our registered sellers? Browse our FAQs:
                </p>
                <CustomAccordion data={FaqData}/>
            </div>

    </>
  )
}

export default Sellers
