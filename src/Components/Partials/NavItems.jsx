import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
const NavItems = ({className}) => {
    const [hovered,sethovered]=useState("");
  return (
      <ul 
            className={className}
            id="navlinks-container">
                <li className=' nav-item py-2'>
                    <NavLink 
                    className="nav-link" 
                    to="/">
                        HOME
                    </NavLink>
                </li>


                <li className=' nav-item py-2'>
                    <NavLink className="nav-link"
                    to="/sellers">
                        SELLERS
                    </NavLink>
                </li>

                

                <li className=' nav-item py-2'
                onMouseEnter={()=>sethovered("who we are")}
                onMouseLeave={()=>sethovered("")}
                onClick={()=>sethovered("")}>
                    <a className="nav-link">
                        WHO WE ARE
                    </a>
                    {hovered==="who we are"?
                <div className=' w-fit hover-items'
                onMouseEnter={()=>sethovered("who we are")}
                onMouseLeave={()=>sethovered("")}
                onClick={()=>sethovered("")}>
                        <NavLink className="nav-link" to="/whoweare/about">About us</NavLink>
                        <NavLink className="nav-link" to="/whoweare/meet-team">Meet the Team</NavLink>
                    </div>
                    :<></>}
                </li>
    

                <li className=' nav-item py-2'>
                    <NavLink className="nav-link" to="/contact">
                        CONTACT
                    </NavLink>
                </li>
            </ul>
  )
}

export default NavItems
