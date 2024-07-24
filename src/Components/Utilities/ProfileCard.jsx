import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileCard = ({image,quote,title,name}) => {
  return (
    <div 
    className=' col-md-10 mx-auto d-flex flex-wrap justify-content-center align-items-center  rounded-5 bg-secondary-subtle my-3'>
        <div
        className=' col-md-6 d-grid justify-content-center p-4 mb-4'>
            <p
            className=' font-monospace pb-5'>
                {quote}
            </p>
            <p
            className='fw-bold'>
                {title}
            </p>
            <abbr>{name}</abbr>
        </div>
        <div className=' img-card position-relative col-md-6 custom-ap-3 overflow-hidden rounded-5'>
            <img src={image} width={"100%"} height={"100%"} alt='priyank'/>
            <div
            className='w-100 rounded-5 bg-white d-flex justify-content-between align-items-center py-2 px-5 position-absolute bottom-0'>
                <p>
                ⭐⭐⭐⭐⭐<br/>
                50+ Client reviews
                </p>
                <div>
                <NavLink className={"links-2 bb-red"}>VIEW ALL REVIEWS</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
