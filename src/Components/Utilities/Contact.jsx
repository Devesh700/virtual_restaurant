import React, { useEffect, useState ,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const navigate=useNavigate();
  const send=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_4mbkbea', 'template_ipfk3tv', form.current, 'IAqrA2xNX9TehNX7h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert("we have received your message , we will contact you soon");
    navigate("/");
    // setdisplay("none");
  }
  return (
    <><div className=' w-100 bg-contact main-contact'>
      <form className='  contact-container pw-ab-30 p-2 w-md-48'  ref={form}>
                    <fieldset className='p-3 py-5'>
                      {/* <button className='btn btn-danger float-end'
                      onClick={(e)=>{e.preventDefault(); setdisplay("none")}}
                      >close X</button> */}
                        <p className='display-5 text-black'>contact with us</p>
                        <input placeholder='Name' type='text' className='form-control mt-2' name='to_name'/>
                        <input placeholder='Email' type='text' className='form-control mt-2' name='user_email'/>
                        <input placeholder='Phone' type='text' className='form-control mt-2' name='user_phone'/>
                        <textarea className=' form-control my-2'>Enter your Query</textarea>
                        <button  className='btn btn-primary mt-2 px-5' style={{width:"100%"}} onClick={(e)=>{send(e)}}>contact us</button>
                    </fieldset>
                </form>
          </div>
    </>
  )
}

export default Contact
