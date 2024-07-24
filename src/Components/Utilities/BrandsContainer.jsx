import React from 'react'

const BrandsContainer = ({ images = ["/assets/jockey-logo.png", ""] }) => {
    return (
        <section
            className=' d-flex flex-wrap justify-content-around gap-3 py-3 mx-auto'>
            {images.map((val) => (
                <div className=' logo-container py-4  custom-w-flex-2'>
                    <img src={val} width={"60%"} height={"90%"} alt='logo' />
                </div>
            ))}
        </section>
    )
}

export default BrandsContainer
