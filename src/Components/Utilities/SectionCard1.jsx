import React from 'react'

const SectionCard1 = () => {
  return (
    <div 
    className=' d-flex justify-content-around'>
      <section 
      className=' custom-col-md-3 py-3 position-relative my-3'>
        <p 
        className=' fw-semibold'>
            BLOG
        </p>
        <h3 
        className=' display-5 fw-bold '>
            Digital marketing & industry insights
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
    <p className="card-text fw-light">September 2023</p>
    <p className="card-text fw-bold pe-4">Key Marketting challenges confronting the IT Services Industry</p>
  </div>      
      </section>
      <section className=' custom-col-md-3 card rounded-5 overflow-hidden'>
           <img src="/assets/blog-card-2.jpg" class="card-img-top" alt="..."/>
  <div className="card-body px-3">
    <p className="card-text fw-light">November 2023</p>
    <p className="card-text fw-bold pe-4">Marketting Automation with generative AI</p>
  </div>  
      </section>
    </div>
  )
}

export default SectionCard1
