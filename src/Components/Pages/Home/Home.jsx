import React from 'react'
import "./Home.css";
import Hero from './Hero';
import HomeAbout from './HomeAbout';
import WhyDmoop from '../WhyDmoop/WhyDmoop';
import Blog from './HomeBlog';
import FaqData from './FaqData';
import CustomAccordion from '../../Utilities/CustomAccordion';
import Dashboard from './Dashboard';
// import SellerProfile from '../Profile/SellerProfile';

const Home = () => {
  return (
    <>  
    {/* <SellerProfile/> */}
        <Hero/>
        <Dashboard/>
        <HomeAbout/>
        <WhyDmoop/>
        {/* <Blog/> */}
        <div className='col-md-10 mx-auto'>
          <CustomAccordion data={FaqData}/>
        </div>
        
    </>
  )
}

export default Home
