import React, { useState } from 'react'
import Tabs from './Tabs'

const TabCard = ({ tabvalues = ["Technology Studio", "Digital Marketting Studio", "Crative Studio", "OnDemand Resource Studio"] }) => {
    const [tab, settab] = useState(tabvalues[0])
    return (
        <div className='custom-col-md-10 rounded-5 bg-black justify-content-center align-items-center mx-auto '>
            <div
                className='custom-col-md-3 ps-md-4 d-flex flex-column justify-content-around'>
                {tabvalues.map((val) => (
                    <>
                        <p tabIndex={0}
                            id={tab === val ? "active" : ""}
                            onClick={() => { settab(val) }}
                            className=' text-white py-4 px-5 cursor-pointer rounded-5 fw-bold'>
                            {val}
                        </p>
                    </>
                ))}

            </div>
            {tab === tabvalues[0] ? <Tabs description={""} listitems={""} circle="" extra={""} /> : <></>}
            {tab === tabvalues[1] ? <Tabs description={""} listitems={""} circle="" extra={""} /> : <></>}
            {tab === tabvalues[2] ? <Tabs description={""} listitems={""} circle="" extra={""} /> : <></>}
            {tab === tabvalues[3] ? <Tabs description={""} listitems={""} circle="" extra={""} /> : <></>}
        </div>
    )
}

export default TabCard;
