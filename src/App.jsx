import React from 'react'
import Navbar from './Components/Partials/Navbar'
import Home from './Components/Pages/Home/Home'
import Footer from './Components/Partials/Footer'
import { Route, Routes } from 'react-router-dom'
import Sellers from './Components/Pages/Sellers/Sellers'
import About from './Components/Pages/WhoWeAre/About/About'
import Contact from './Components/Utilities/Contact'
import Profile from './Components/Pages/Profile/Profile'
import SellerForm from './Components/Authentication/SellerForm'
import { CustomerLogin, SellerLogin } from './Components/Authentication/Login'
import CustomerForm from './Components/Authentication/CustomerForm'
import SellerProfile from './Components/Pages/Profile/SellerProfile'
import CustomerProfile from './Components/Pages/Profile/CustomerProfile'
import AddProduct from './Components/Pages/Profile/AddProduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/sellers' element={<Sellers/>}></Route>
        <Route path='/whoweare/about' element={<About/>}></Route>
        <Route path='/sellers/profile' element={<Profile/>}></Route>
        <Route path='/seller/registration' element={<SellerForm/>}></Route>
        <Route path='/customer/registration' element={<CustomerForm/>}></Route>
        <Route path='/seller/login' element={<SellerLogin/>}></Route>
        <Route path='/customer/login' element={<CustomerLogin/>}></Route>
        <Route path='/profile/seller' element={<SellerProfile/>}></Route>
        <Route path='/profile/seller/addproduct' element={<AddProduct/>}></Route>
        <Route path='/profile/customer' element={<CustomerProfile/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
