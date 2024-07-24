import React from 'react'
import { NavLink } from 'react-router-dom';
const Blog = () => {
  return (
    <div 
    className=' d-flex justify-content-around custom-my-10 pt-5 custom-col-md-10 mx-auto'>
      <section 
      className=' custom-col-md-3 py-3 position-relative my-3'>
        <p 
        className=' fw-semibold'>
            BLOG
        </p>
        <h3 
        className=' display-5 fw-bold '>
            Digital marketing & Virtual Restaurant insights
        </h3>
        <NavLink 
        className="links-2 bb-red mt-5">
            VIEW MORE
        </NavLink>
      </section>
      <section 
      className=' custom-col-md-3 card rounded-5 overflow-hidden'>
           <img 
           src="/assets/blog-card-1.webp" className="card-img-top" alt="..."/>
  <div className="card-body px-3">
    <p className="card-text fw-light">Digital Presence is Key</p>
    <p className="card-text fw-bold pe-4">Since your restaurant exists primarily online, investing in a strong digital presence is crucial. This includes a well-designed website or app, active social media profiles, and potentially partnerships with food delivery platforms.</p>
  </div>      
      </section>
      <section className=' custom-col-md-3 card rounded-5 overflow-hidden'>
           <img src="/assets/blog-card-2.jpg" class="card-img-top" alt="..."/>
  <div className="card-body px-3">
    <p className="card-text fw-light">focus on Packaging and Presentation</p>
    <p className="card-text fw-bold pe-4">
       With delivery being the primary mode of service, paying attention to packaging is essential. Ensure that your food remains fresh and visually appealing during transit to maintain customer satisfaction.
    </p>
  </div>  
      </section>
    </div>
  )
}

export default Blog
