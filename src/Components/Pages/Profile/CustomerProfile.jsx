import React, { useState,useContext,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import { CancelOrder, CustomerDataHandler, GetOrder, ImageUploader, InputChangeHandler, RemoveNotification, UpdateHandler } from '.';

const CustomerProfile = ({ formData={email:"XXXX@gmail.com",phone:"XXXXXXXX",aadharNumber:"XXXXX",restaurantName:"restaurant name",aadharName:"aadharname"} }) => {
    const navigate=useNavigate();
   const [activeTab, setActiveTab] = useState('personal');
  const [editable, setEditable] = useState(false);
  // const  userData = useContext(UserContext) ?? {};
 const  userData = JSON.parse(window.localStorage.getItem("user-data"));
  const [personalDetails, setPersonalDetails] = useState(userData?userData:formData);
  const [orders,setorders]=useState([]);
useEffect(()=>{
GetOrder(personalDetails,setPersonalDetails,setorders)
CustomerDataHandler(setPersonalDetails);
console.log("personal details: "+JSON.stringify(personalDetails.notifications));
},[])
  const [profile,setprofile]=useState();
  const [img,setimg]=useState();
  let profileimage=new FormData();
  profileimage.append('profile',img);
  profileimage.append('_id',window.localStorage.getItem("_id"));
  const CompletedOrders = []; // Placeholder for completed products data
  const liveOrders = []; // Placeholder for live products data

  const handleSubmit = async(e) => {
    e.preventDefault();
    UpdateHandler(personalDetails,setEditable,setPersonalDetails,navigate,"user")
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <div className=' position-relative'>
                <label htmlFor='profile' className='d-block mx-auto w-fit cursor-pointer'>
                <img src={personalDetails.profile} width={"200px"} height={"200px"} 
                className='bg-black rounded-circle'/>
                <div>
                  <button className='btn btn-success d-grid mx-auto my-3 px-4 py-2'
                onClick={()=>ImageUploader(profileimage,setPersonalDetails,"user")}>
                  upload
                  </button>
                  </div>
                </label>
                <form hidden>
                    <input type='file' id='profile'  
                    onChange={(e)=>
                    {
                        
                        setprofile(URL.createObjectURL(e.target.files[0]))
                        setimg(e.target.files[0])
                    }}/>
                </form>
            </div>
          <h2 className="text-center mb-4"> Profile</h2>
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
                className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
                onClick={() => setActiveTab('completed')}
              >
                Completed orders
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'live' ? 'active' : ''}`}
                onClick={() => setActiveTab('live')}
              >
                Live orders
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                notifications
              </button>
            </li>
          </ul>

          <div className="tab-content mt-4">
             {activeTab === 'personal' && (
              <div className="tab-pane fade show active">
                <h4>Personal Details</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="username" 
                      name="username"
                      value={personalDetails.username} 
                      onChange={(e)=>InputChangeHandler(e,setPersonalDetails)} 
                      disabled={!editable} />
                  </div>

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
                </form>
                                {editable ? (
                    <button type="submit" className="btn btn-outline-success me-2 rounded-top-0 py-2 px-5" onClick={handleSubmit}>SAVE</button>
                  ) : (
                    <button className="btn btn-outline-info me-2 rounded-top-0 py-2 px-5" onClick={()=>setEditable(true)}>EDIT</button>
                  )}
                  <button className="btn btn-outline-secondary rounded-top-0 py-2 px-5" onClick={() => setEditable(false)}>Cancel</button>
              </div>
            )}

            {activeTab === 'completed' && (
              <div className="tab-pane fade show active">
                <h4>completed Products</h4>
                {CompletedOrders.length === 0 ? (
                  <p>No completed products yet.</p>
                ) : (
                  <div className="product-list">
                    {/* Map over CompletedOrders and display them */}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'live' && (
              <div className="tab-pane fade show active">
                <h4>Live Products</h4>
                {orders.length === 0 ? (
                  <p>No live products available.</p>
                ) : (
                  <div className="product-list">
                    <table className=' table table-striped'>
                     <tr>
                          <th>Order Id</th>
                          <th>Product </th>
                          <th>status</th>
                          <th>approval</th>
                          <th>Cancel </th>
                        </tr>
                    {orders.map((val)=>
                    <>
                      <tr>
                        <td>{val._id}</td>
                        <td>{val.productname}</td>
                        <td>{val.status}</td>
                        <td>{val.approval}</td>
                        <td><button className='btn' onClick={()=>CancelOrder(val)}>cancel</button></td>
                      </tr>
                    </>
                    )}
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="tab-pane fade show active">
                <h4>Notifications</h4>
                {personalDetails.notifications?.length === 0 ? (
                  <p>No Notifications</p>
                ) : (
                  <div className="product-list">
                    {personalDetails.notifications.map((val,index)=>
                    <div className=' bb-red my-4'>
                      <p>your order has been <strong>{val.approval}</strong>
                      <br/>by <strong>{val.seller.restaurantName}</strong>
                      {/* <br/>address: <strong>{val.order.address}</strong> */}
                      {/* <br/>for your product <strong>{val.product.productname}</strong> */}
                      <div className=' btn-group translate-middle-y float-end'>
                      <button className='btn btn-close'
                      onClick={()=>RemoveNotification(personalDetails._id,val.product._id,val.order._id,setPersonalDetails)}></button>
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

export default CustomerProfile;

