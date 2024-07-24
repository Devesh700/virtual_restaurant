import React from 'react'
import Tabcard from '../../Utilities/TabCard'
import InformationCard from '../../Utilities/InformationCard'
import "./HomeAbout.css"

const HomeAbout = () => {
  return (
    <div className=' w-90 mx-auto'>
      <InformationCard 
      title={"WHAT WE DO"}
      heading={"Empowering Success to Talents through digital platform"}
      description={"We Provide a digital platform where an individual who have a good cooking skill or want to run a food buisness but due to lack of huge expenses and social interaction they are unable to start their buisness,We are here to help them. "}
      link={"LET'S START YOUR BUISNESS WITH US"}/>


      <div 
      className=' d-flex flex-wrap justify-content-center p-3 text-justify custom-col-md-10 px-5 mx-auto'>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'>our Sellers have gained socialization</p>
        </div>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'> We Never let you disappoint</p>
        </div>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'>We work with worlds fastest growing startup</p>
        </div>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'>Distributed team of over 20 of the worlds best marketers, podcasters and copywritters</p>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
