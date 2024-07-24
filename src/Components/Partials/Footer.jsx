import React from 'react'
import "./Partial.css"
import ContactCard from './ContactCard'
import FooterItems from './FooterItems'

const Footer = () => {
    return (
        <footer
            className=' py-5 bg-warning rounded-top-5 text-white'>
            <div
                className="col-md-10 mx-auto d-flex flex-wrap justify-content-around  align-items-center">

                <section className=' w-md-48 px-3'>
                    <h3
                        className=' display-5 fw-bold'>
                        Get a free consultation to boost your buisness
                    </h3>

                    <p 
                    className=' fw-semibold py-4 border-bottom border-white'>
                        
                    </p>

                    <ul className=' my-3'>
                        <li className=' my-3 lh-lg'>
                            Offer guidance on selecting menu items that suit dietary preferences, budget constraints, and the occasion (e.g., family dinner, office lunch, special event).
                        </li>
                        <li className=' my-3 lh-lg'>
                            Provide information on the nutritional content of menu items and offer advice on making healthier choices based on individual dietary needs and goals.
                        </li>
                        <li className=' my-3 lh-lg'>
                            Offer recommendations for pairing different dishes and beverages to create a harmonious dining experience, whether it's wine and cheese, beer and barbecue, or cocktails and appetizers.
                        </li>
                        <li className=' my-3 lh-lg'>
                            Assist customers in planning catering for special occasions such as weddings, birthdays, anniversaries, and corporate events, including menu selection and portion sizing.
                        </li>
                    </ul>
                </section>

                <section className=' w-md-48'>
                    <ContactCard />
                </section>

            </div>

            <FooterItems/>

        </footer>
    )
}

export default Footer
