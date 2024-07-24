import React, { useState } from 'react';
import './LoginForm.css'; // Import custom CSS file for styling
import { NavLink, json, useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async(e) => {
    e.preventDefault();
    let res=await fetch("http://localhost:4000/api/user/login",{
      method:"POST",
      body:JSON.stringify({email,password}),
      headers:{
      "Content-Type":"application/json"
      }
    })
    res=await res.json();
    console.log(res);
    if(res.success){
      window.localStorage.setItem("auth-token",res.token)
      window.localStorage.setItem("_id",res.data._id)
      window.localStorage.setItem("user-data",JSON.stringify(res.data))
      alert(JSON.parse(window.localStorage.getItem("user-data"))._id)
      alert(window.localStorage.getItem("auth-token"))
      navigate("/profile/customer",{state:{data:res.data}});
    }
    alert(res.msg);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 login-form-container">
          <h2 className="text-center d-flex w-fit mx-auto">
            <NavLink className=" nav-link" to="/seller/login">Seller </NavLink>/
            <NavLink className=" nav-link" to="/customer/login">Customer </NavLink>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="customerEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="customerEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="customerPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="customerPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-outline-warning btn-block">Login</button>
          </form>
          <hr />
          <p className="text-center">Don't have an account? <NavLink to="/customer/registration">Register</NavLink></p>
        </div>
      </div>
    </div>
  );
};

const SellerLogin = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restaurantName, setRestaurantName] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    let res=await fetch("http://localhost:4000/api/seller/login",{
      method:"POST",
      body:JSON.stringify({email:email,password:password}),
      headers:{
      "Content-Type":"application/json"
      }
    })
    res=await res.json();
    console.log(res);
    if(res.success){
     window.localStorage.setItem("auth-token",res.token)
      window.localStorage.setItem("_id",res.data._id)
      window.localStorage.setItem("user-data",JSON.stringify(res.data))
      alert(JSON.parse(window.localStorage.getItem("user-data"))._id)
      alert(window.localStorage.getItem("auth-token"))
      navigate("/profile/seller",{state:{data:res.data}});
    }
    alert(res.msg);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 login-form-container">
          <h2 className="text-center d-flex w-fit mx-auto">
            <NavLink className=" nav-link" to="/seller/login">Seller </NavLink>/
            <NavLink className=" nav-link" to="/customer/login">Customer </NavLink>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="sellerEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="sellerEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="sellerPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="sellerPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="sellerName" className="form-label">Restaurant Name</label>
              <input type="text" className="form-control" id="sellerName" placeholder="Enter restaurant name" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-outline-warning btn-block">Login</button>
          </form>
          <hr />
          <p className="text-center">Don't have an account? <NavLink to="/seller/registration">Register</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export { CustomerLogin, SellerLogin };
