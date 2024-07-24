import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterItems = () => {
  return (
    <footer className=' d-flex flex-wrap justify-content-around col-md-10 mx-auto custom-my-10'>
        <div>
            <p className=' fw-semibold mb-4'>Quick links</p>
            <p><NavLink className=" link-light text-decoration-none my-2" to="/">Home</NavLink></p>
            <p><NavLink className=" link-light text-decoration-none my-2" to="/sellers">Sellers</NavLink></p>
        </div>
        <div className='d-grid align-items-center'>
            <button className='btn btn-dark rounded-pill py-3 px-5'>join with us</button>
        </div>
        
        <div>
            <p className=' fw-semibold mb-4'>WHO WE ARE</p>
            <p><NavLink className=" link-light text-decoration-none my-2" to={"/whoweare/about"}>About us</NavLink></p>
            <p><NavLink className=" link-light text-decoration-none my-2" to="/">Awards</NavLink></p>
            <p><NavLink className=" link-light text-decoration-none my-2" to={"/contact"}>Contact</NavLink></p>
        </div>
        <div>
            <p className=' fw-semibold mb-4'>Work</p>
            <p><NavLink className=" link-light text-decoration-none my-2" to={"/whoweare/about"}>About us</NavLink></p>
            {/* <NavLink className=" link-light text-decoration-none my-2">Blogs</NavLink> */}
            {/* <NavLink className=" link-light text-decoration-none my-2">Careers</NavLink> */}
            <p><NavLink className=" link-light text-decoration-none my-2" to={"/sellers"}>Visit Other Sellers</NavLink></p>
        </div>
    </footer>
  )
}

export default FooterItems
