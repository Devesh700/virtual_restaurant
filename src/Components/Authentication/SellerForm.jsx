import React, { useState, useCallback, useEffect } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';

const SellerForm = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [aadharNumber, setNumber] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [aadharName, setName] = useState('');
  const [flag,setflag]=useState(false);
  const [warnings, setWarnings] = useState({
    phone: '',
    password: '',
    confirmPassword: '',
    Number: ''
  });

const handleSubmit = async(e) => {
    e.preventDefault();
    if (flag) {
      let res=await fetch("https://virtual-restaurant-backend.onrender.com/api/seller/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,phone,password,aadharNumber,aadharName,restaurantName})
      })
      res=await res.json();
      console.log(res);
      alert("message:"+res.msg);
      if(res.success){
window.localStorage.setItem("auth-token",res.token)
      window.localStorage.setItem("_id",res.data._id)
      window.localStorage.setItem("user-data",JSON.stringify(res.data))
      // alert(JSON.parse(window.localStorage.getItem("user-data"))._id)
      // alert(window.localStorage.getItem("auth-token"))
        navigate("/profile/seller",{state:{data:res.data}})
      }
    }
  };
  useEffect(()=>{
    
    if(warnings.phone!=="" ||warnings.password!=="" || warnings.confirmPassword!==""){
        // alert("your form cannot be submitted, please enter validated data");
        setflag(false)
        
    }
    else{
    setflag(true);
    }
  },[warnings,email])

  const validatePhone = useCallback(() => {
    if(phone.length!==10){
        setWarnings((prevWarnings)=>({...prevWarnings,phone:"phone number must be of 10 digits"}))
    }
    else if(isNaN(phone)){
        setWarnings((prevWarnings)=>({...prevWarnings,phone:"please enter a valid phone number"}))
    }
    else{
        setWarnings((prevWarnings)=>({...prevWarnings,phone:""}))
    }
  }, [phone]);

  const validatePassword = useCallback(() => {
    const length = password.length;
    if (length > 15 || length < 8) {
      setWarnings((prevWarnings) => ({ ...prevWarnings, password: 'Password length must be between 8-15' }));
    } else {
      setWarnings((prevWarnings) => ({ ...prevWarnings, password: '' }));
    }
  }, [password]);

  const validateConfirmPassword = useCallback(() => {
    if (password !== confirmPassword) {
      setWarnings((prevWarnings) => ({ ...prevWarnings, confirmPassword: 'Confirm password does not match' }));
    } else {
      setWarnings((prevWarnings) => ({ ...prevWarnings, confirmPassword: '' }));
    }
  }, [password, confirmPassword]);

  const validateAadhar = useCallback(() => {
    // Implement Number validation logic if needed
  }, [aadharNumber]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 login-form-container">
          <h2 className="text-center d-flex w-fit mx-auto">
            <NavLink className=" nav-link" to="/seller/registration">Seller </NavLink>/
            <NavLink className=" nav-link" to="/customer/registration">Customer</NavLink>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="sellerEmail" className="form-label">Email</label>
              <input type="email" 
              className="form-control" 
              id="sellerEmail" 
              name="email"
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}  />
              <p className='text-danger'>{warnings.email}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="sellerPassword" className="form-label">Password</label>
              <input type="password" 
              className="form-control" 
              id="sellerPassword" 
              name="password"
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              onBlur={validatePassword} />
              <p className='text-danger'>{warnings.password}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="sellerConfirmPassword" className="form-label">Confirm Password</label>
              <input type="password" 
              className="form-control" 
              id="sellerConfirmPassword" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              onBlur={validateConfirmPassword} />
              <p className='text-danger'>{warnings.confirmPassword}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="sellerPhone" className="form-label">Phone</label>
              <input type="text" 
              className="form-control" 
              id="sellerPhone" 
              name="phone"
              placeholder="Enter phone number" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              onBlur={validatePhone}/>
              <p className='text-danger'>{warnings.phone}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="sellerNumber" className="form-label">Aadhar number</label>
              <input type="text" 
              className="form-control" 
              id="sellerAadhar" 
              name='aadharNumber'
              placeholder="Enter Aadhar number" 
              value={aadharNumber} 
              onChange={(e) => setNumber(e.target.value)} 
              onBlur={validateAadhar} />
              <p className='text-danger'>{warnings.aadhar}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="sellerName" className="form-label">Restaurant Name</label>
              <input type="text" 
              className="form-control" 
              id="sellerName" 
              name='sellerName'
              placeholder="Enter restaurant name" 
              value={restaurantName} 
              onChange={(e) => setRestaurantName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="sellerNameAsPerAadhar" className="form-label">Enter name as per Aadhar</label>
              <input type="text" 
              className="form-control" 
              id="sellerNameAsPerAadhar"
              name='aadharName'
              placeholder="Enter name as per Aadhar card" 
              value={aadharName} 
              onChange={(e) => setName(e.target.value)} />
            </div>

            <button type="submit" 
            className="btn btn-outline-warning btn-block">
                Register
            </button>
          </form>
          <hr />
          <p className="text-center">Already have an account? <NavLink to="/Seller/login">Log in</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
