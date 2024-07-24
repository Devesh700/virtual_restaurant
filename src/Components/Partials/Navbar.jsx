import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import "./Partial.css";
import NavItems from './NavItems';

const Navbar = () => {
    const navigate=useNavigate();
    const [mobile, setmobile] = useState(false);
    const token=window.localStorage.getItem("auth-token")
    const user_data=JSON.parse(window.localStorage.getItem("user-data"))
    return (
        <>
        <header className=' w-100 d-flex justify-content-around py-2 border-bottom'>
            <p className=' fw-light'>Revenue Driven by Our sellers<br/>
            <span className=' fw-bold fs-6'>$000</span>
            </p>
            <p className=' fw-light'>Get a Proposal
                <br/>
                <span className=' fw-bold fs-6'>76-832-1147</span>
            </p>
        </header>
            <nav
            className='nav d-flex justify-content-around align-items-center px-3 bg-light position-sticky z-3'
            >
                <div
                className='icon rounded-circle w-60 overflow-hidden d-flex justify-content-center align-items-center border border-2'
                >
                    <img src='/assets/food-icon.png' alt='causeconnect' 
                    width={"100%"} height={"100%"}/>
                </div>


                <div 
                className="mobile-menu-btn"
                onClick={() => { setmobile(!mobile); }}>
                    <div
                    tabIndex={0}
                    className=' grid-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div 
                className=' d-block-800'>
                    <NavItems className={"list-unstyled d-flex justify-content-around align-items-center"} />
                </div>

            <div className=' d-md-flex gap-2 d-block-800'>
                {token
                ?<div
                className='btn-smm '
                onClick={()=>navigate("/seller/login")}>
                    

                </div>
                :<div
                className='btn-smm '
                onClick={()=>navigate("/seller/login")}>
                    <button 
                    className='btn btn-outline-warning px-sm-5 py-2 rounded-4'>
                        Login
                    </button>

                </div>}

                <div
                className='btn-smm '
                >
                    {token
                    ?<div className=' position-relative'>
                        <img width={"50px"} height={"50px"}
                        className='rounded-circle bg-black hover-display'
                        src={user_data.profile}/>
                        <div className=' position-absolute display px-4 py-4 bg-white w-max rounded-2'>
                            <p>
                                <strong>Name:</strong>
                                {user_data?.email}
                            </p>
                           <div className=' d-flex gap-3 my-2'>
                            <button 
                            className=' btn btn-outline-info px-sm-4 py-1 w-max'
                            onClick={()=>{user_data.restaurantName?navigate("/profile/seller"):navigate("/profile/customer")}}>View Profile</button>
                            <button 
                            className='btn btn-danger px-sm-4 py-1 w-max'
                            onClick={()=>{window.localStorage.removeItem("auth-token") 
                            window.localStorage.removeItem("user-data")
                            navigate("/home")}}>
                                LogOut
                            </button>
                         </div>
                         {user_data.restaurantName?<button className='btn btn-light fw-bold rounded-5 px-5 py-3 mx-auto d-grid'
            onClick={() => navigate("/profile/seller/addproduct")}>add product</button>:""}
                        </div>
                    </div>
                    :<button 
                    onClick={()=>navigate("/seller/registration")}
                    className='btn btn-dark px-sm-5 py-2 rounded-4'>
                        Become a Seller
                    </button>}

                </div>

            </div>

            </nav>

            <NavItems
                className={mobile ? ' list-unstyled d-flex flex-column justify-content-around px-5 border-bottom transition-nav' : "list-unstyled d-flex flex-column justify-content-around px-5 border-bottom  mobile-nav"} />
        </>
    )
}

export default Navbar;
