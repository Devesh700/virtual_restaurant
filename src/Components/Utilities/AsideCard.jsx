import React from 'react'

const AsideCard = ({ title, leftPart, rightPart }) => {
    return (
        <div
            className='w-100 d-flex flex-wrap justify-content-between gap-4 align-items-center'>
            <div
                className=' w-md-48'>
                <h2
                    className=' display-6 fw-bold my-4'>
                    {title}
                </h2>
                <p>
                    {leftPart}
                </p>
            </div>

            <div className="w-md-48 d-grid justify-content-center border-md-start">
                {rightPart.map((val, index) => (
                    <>
                        <p className=' lh-lg'>
                            {val}
                        </p>
                    </>
                ))}
            </div>

        </div>
    )
}

export default AsideCard
