import React, { useCallback, useState,useEffect } from 'react';
import './LoginForm.css'; // Import custom CSS file for styling
import { NavLink ,useNavigate} from 'react-router-dom';
import {validatePhone, validatePassword, validateConfirmPassword,RegisterCustomer} from "./index"

const CustomerForm = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [warnings, setWarnings] = useState({ phone: '', password: '', confirmPassword: '' });
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (phone.length !== 10 || isNaN(phone) || password.length > 15 || password.length < 8 || password !== confirmPassword) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, [email, password, confirmPassword,phone,username]);
  
  const submitform=(e)=>{
    e.preventDefault()
    let data={email,phone,password,username}
    if(flag)
    RegisterCustomer(data,navigate);
    else
    alert("inappropiate data")
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 login-form-container">
          <h2 className="text-center d-flex w-fit mx-auto">
            <NavLink className=" nav-link" to="/seller/registration">Seller </NavLink>/
            <NavLink className=" nav-link" to="/customer/registration">Customer</NavLink>
          </h2>
          <form onSubmit={submitform}>
            <div className="mb-3">
              <label htmlFor="customerEmail" className="form-label">Email</label>
              <input type="email" 
              className="form-control" 
              id="customerEmail" 
              name="email"
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Your Name</label>
              <input type="text" 
              className="form-control" 
              id="username" 
              name="username"
              placeholder="Enter phone number" 
              value={username} 
              onChange={(e) => setusername(e.target.value)} 
              />
              <p className='text-danger'>{warnings.phone}</p>
            </div>

            
            <div className="mb-3">
              <label htmlFor="customerPhone" className="form-label">Phone</label>
              <input type="text" 
              className="form-control" 
              id="customerPhone" 
              name="phone"
              placeholder="Enter phone number" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              onBlur={()=>setWarnings(validatePhone(phone))}/>
              <p className='text-danger'>{warnings.phone}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="customerPassword" className="form-label">Password</label>
              <input type="password" 
              className="form-control" 
              id="customerPassword" 
              name="password"
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              onBlur={()=>setWarnings(validatePassword(password))} />
              <p className='text-danger'>{warnings.password}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="customerConfirmPassword" className="form-label">Confirm Password</label>
              <input type="password" 
              className="form-control" 
              id="customerConfirmPassword" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              onBlur={()=>setWarnings(validateConfirmPassword(confirmPassword,password))} />
              <p className='text-danger'>{warnings.confirmPassword}</p>
            </div>

            <button type="submit" className="btn btn-outline-warning btn-block">Register</button>
          </form>
          <hr />
          <p className="text-center">Already have an account? <a href="#">Log in</a></p>
        </div>
      </div>
    </div>
  );
};




export default CustomerForm;
