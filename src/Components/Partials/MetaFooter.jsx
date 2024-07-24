import React from 'react'
import "./Partial.css"
import { NavLink } from 'react-router-dom'
const MetaFooter = () => {
  return (
    <div className=' bg-secondary-subtle rounded-5 col-md-10 mx-auto text-black'>
    <div
    className=' bg-white rounded-5 w-100 mx-auto py-4'>
        <section
      className=' d-flex flex-wrap justify-content-around align-items-center'>
        <div className='col-sm-4 px-5 border-end border-dark-subtle'>
            <div
             className=' icon-container w-60 rounded-circle bg-opacity-25 bg-secondary mb-2'>

            </div>
            <p className=' fw-semibold'>
                Talk to a growth Expert
            </p>
            <p className=' fw-semibold'>
                767-832-1147
            </p>
        </div>
        <div className='col-sm-4 px-5 border-end border-dark-subtle'>
            <div
             className=' icon-container w-60 rounded-circle bg-opacity-25 bg-secondary mb-2'>

            </div>
            <p>
                US, Hong Kong, India ,Singapore
            </p>
            <p>
                info@dmoop.com
            </p>
            <NavLink className="links-2 bb-red">VIEW ON MAP</NavLink>
        </div>
        <div className='col-sm-4 px-5 border-end border-dark-subtle d-flex flex-wrap gap-4'>
            <div>
            <p>REVIEWED ON &emsp; 
            <span className='small-box'></span>
            <span className='small-box'></span>
            <span className='small-box'></span>
            <span className='small-box'></span>
            </p>
            <p>
                <img src='/assets/clutch.svg'/>
                &emsp; 4.9 Rating
            </p>
            </div>
            <div className=''>
                <img src='/assets/BBB.svg'/>
            </div>
        </div>
      </section>
    </div>
    
          <div className='w-100 d-flex justify-content-between px-5 py-3 m-3 flex-wrap'>
          <div>
            <p className=' fw-light'>
              Google cloud <br/>
            <b className=' fs-6 fw-medium'>
              partner
            </b>
            </p>
          </div>
          <div>
            <strong className=' fs-6 fw-medium'>
              Meta Buisness <br/>
              Partners

            </strong>
          </div>
          <div>
            <p>
              <span className=' fw-lighter'>
                Google
              </span> <br/>
              <span>Partner</span>
            </p>
          </div>
          <div>
            <p>
              <i className=' fw-semibold'>Shopify</i> <br/>
              <span>Partner</span>
            </p>
          </div>
        </div>
        </div>
  )
}

export default MetaFooter
