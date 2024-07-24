import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomerDataHandler, GetProducts, HandleApproval, ImageUploader, InputChangeHandler, UpdateHandler } from '.';

const SellerProfile = ({ formData = { email: "XXXX@gmail.com", phone: "XXXXXXXX", aadharNumber: "XXXXX", restaurantName: "restaurant name", aadharName: "aadharname" } }) => {
  
  const navigate = useNavigate();
    const [profile, setprofile] = useState();
  const [img, setimg] = useState();
  const [activeTab, setActiveTab] = useState('personal');
  const [editable, setEditable] = useState(false);
  const userData = JSON.parse(window.localStorage.getItem("user-data"));
  const [personalDetails, setPersonalDetails] = useState(userData ? userData : formData);
  const [products, setproducts] = useState([]);
  let profileimage = new FormData();
  profileimage.append('profile', img);
  profileimage.append('_id', window.localStorage.getItem("_id"));
  useEffect(() => {
    GetProducts(personalDetails,setPersonalDetails,setproducts);
    CustomerDataHandler(setPersonalDetails);
      const soldProducts = [...products.filter((elem)=>!elem.avaialable)]; // Placeholder for sold products data
  const liveProducts = [...products.filter((elem)=>elem.avaialable)]; // Placeholder for live products data
  // alert(JSON.stringify(soldProducts))
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
          <div className=' position-relative'>
            <label htmlFor='profile' className='d-block mx-auto w-fit cursor-pointer'>
              <img src={personalDetails.profile?personalDetails.profile:profile} width={"200px"} height={"200px"}
                className='bg-black rounded-circle' />
            </label>
            <div>
              <button className='btn btn-success d-grid mx-auto my-3 px-4 py-2'
                onClick={()=>ImageUploader(profileimage,setPersonalDetails,"seller")}>
                upload
              </button>
            </div>
            <form hidden>
              <input type='file' id='profile'
                onChange={(e) => {
                  setprofile(URL.createObjectURL(e.target.files[0]))
                  setimg(e.target.files[0])
                }} />
            </form>
          </div>
          <button className='btn btn-light fw-bold rounded-5 px-5 py-3 mx-auto d-grid'
            onClick={() => navigate("addproduct")}>
            add product
          </button>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveTab('personal')}
              >
                Personal Details
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'sold' ? 'active' : ''}`}
                onClick={() => setActiveTab('sold')}
              >
                Sold Products
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'live' ? 'active' : ''}`}
                onClick={() => setActiveTab('live')}
              >
                Live Products
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'notification' ? 'active' : ''}`}
                onClick={() => setActiveTab('notification')}
              >
                Notifications
              </button>
            </li>
          </ul>

          <div className="tab-content mt-4">
            {activeTab === 'personal' && (
              <div className="tab-pane fade show active">
                <h4>Personal Details</h4>
                <form onSubmit={(e)=>UpdateHandler(personalDetails,setEditable,setPersonalDetails,navigate,"seller")}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={personalDetails.email}
                      onChange={(e)=>InputChangeHandler(e,setPersonalDetails)}
                      disabled={!editable} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={personalDetails.phone}
                      onChange={(e)=>InputChangeHandler(e,setPersonalDetails)}
                      disabled={!editable} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="aadhar" className="form-label">Aadhar Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="aadhar"
                      name="aadharNumber"
                      value={personalDetails.aadharNumber}
                      onChange={(e)=>InputChangeHandler(e,setPersonalDetails)}
                      disabled={!editable} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="restaurantName"
                      name="restaurantName"
                      value={personalDetails.restaurantName}
                      onChange={(e)=>InputChangeHandler(e,setPersonalDetails)}
                      disabled={!editable} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nameAsPerAadhar" className="form-label">Name as per Aadhar</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameAsPerAadhar"
                      name="aadharName"
                      value={personalDetails.aadharName}
                      onChange={(e)=>InputChangeHandler(e,setPersonalDetails)}
                      disabled={!editable} />
                  </div>
                </form>
                {editable ? (
                  <button type="submit" className="btn btn-outline-success me-2 rounded-top-0 py-2 px-5" 
                  onClick={(e)=>UpdateHandler(personalDetails,setEditable,setPersonalDetails,navigate,"seller")}>SAVE</button>
                ) : (
                  <button className="btn btn-outline-info me-2 rounded-top-0 py-2 px-5" 
                  onClick={() => setEditable(true)}>EDIT</button>
                )}
                <button className="btn btn-outline-secondary rounded-top-0 py-2 px-5" 
                onClick={() => setEditable(false)}>Cancel</button>
              </div>
            )}

            {activeTab === 'sold' && (
              <div className="tab-pane fade show active">
                <h4>Sold Products</h4>
                {products.length === 0 ? (
                  <p>No sold products yet.</p>
                ) : (
                  <div className="product-list d-flex flex-wrap gap-4">
                    {products.map((val, index) => <>
                      {val.quantity < 0 ? <div className=' card custom-w-flex-4'>
                        <img className=' card-img' src={val.image} />
                        <div className="card-body">
                          <p className=' card-title'>{val.productname}</p>
                          <p className='card-text'>price: {val.price}</p>
                          <p className='card-text'>location: {val.location}</p>
                          <p className='card-text'>available quantity: {val.quantity}</p>
                        </div>
                      </div> : ""}
                    </>)}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'live' && (
              <div className="tab-pane fade show active">
                <h4>Live Products</h4>
                {products.length === 0 ? (
                  <p>No live products available.</p>
                ) : (
                  <div className="product-list d-flex flex-wrap gap-4">
                    {products.map((val, index) => <>
                      {val.quantity > 0 ? <div className=' card custom-card-width'>
                        <img className=' custom-card-img' src={val.image} />
                        <div className="card-body">
                          <p className=' card-title'>{val.productname}</p>
                          <p className='card-text'>price: {val.price}</p>
                          <p className='card-text'>location: {val.location}</p>
                          <p className='card-text'>available quantity: {val.quantity}</p>
                        </div>
                      </div> : ""}
                    </>)}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'notification' && (
              <div className="tab-pane fade show active">
                <h4>Live Products</h4>
                {personalDetails.notifications?.length === 0 ? (
                  <p>No Notifications</p>
                ) : (
                  <div className="product-list">
                    {personalDetails.notifications.map((val, index) =>
                      <div className=' bb-red my-4'>
                        <p>you have received a new order request from email<strong>{val.user.email}</strong>
                          <br />with phone: <strong>{val.user.phone}</strong>
                          <br />address: <strong>{val.order.address}</strong>
                          <br />for your product <strong>{val.product.productname}</strong>
                          <div className=' btn-group translate-middle-y float-end'>
                            <button className='btn btn-danger'
                              onClick={() => HandleApproval("reject", val.user, val.product, val.order, setPersonalDetails)}>reject</button>
                            <button className='btn btn-success '
                              onClick={() => HandleApproval("approve", val.user, val.product, val.order, setPersonalDetails)}>approve</button>
                          </div></p>

                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;