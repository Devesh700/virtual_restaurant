import React from 'react'
import "./WhyDmoop.css"
import CustomCard1 from '../../Utilities/CustomCard1'
const WhyDmoop = () => {
  return (
    <>
    <div 
    className=' d-grid justify-content-center'>
        <div
        className=' text-center mb-5'>
        <p className=' fw-semibold '>Why us</p>
        <h3 className=' display-6 fw-bold'>How we Help Sellers</h3>
        </div>
      <div 
      className="d-flex flex-wrap justify-content-center gap-4 mt-5">
        <CustomCard1 
        title='WEB BASED PLATFORM'
        Description="When the goal is to boost your buisness , it's the perfect the moment to collaborate with digital platform well versed in achieving your objectives"/>
        <CustomCard1 
        title='Our Commitment to Quality'
        Description="We believe in using only the finest ingredients to create flavorful dishes that delight your taste buds. Our chefs carefully select locally sourced produce, meats, and seafood to ensure freshness and quality in every bite."/>
        <CustomCard1 
        title='Transparency and Integrity'
        Description="We're transparent about our sourcing practices and cooking methods because we believe you deserve to know exactly what you're eating. Whether it's our farm-to-table vegetables or sustainably sourced seafood, you can trust that our ingredients are of the highest quality."/>
        <CustomCard1 
        title='Your Satisfaction is Our Priority'
        Description="Your satisfaction is our top priority, and we go above and beyond to ensure that every aspect of your dining experience is exceptional. From the moment you walk through our doors to the last bite of dessert, we're here to make your visit memorable."/>
      </div>
    </div>
    </>
  )
}

export default WhyDmoop
