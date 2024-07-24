import React from 'react'
import "../whoweare.css"
import HeroCard from '../../../Utilities/HeroCard';
import CustomCard3 from '../../../Utilities/CustomCard3';
import InformationCard from '../../../Utilities/InformationCard';
import BrandsContainer from '../../../Utilities/BrandsContainer';

const About = () => {
    return (
        <>
            <div className=' col-md-10 mx-auto my-5 p-4'>
                <p className=' fw-semibold'>
                    About us
                </p>
                <HeroCard image='/assets/abouthero.jpg'
                    contents={[{ title: "Welcome to CauseConnect, where culinary dreams come to life! We're passionate about connecting talented chefs, aspiring restaurateurs, and food enthusiasts with a platform to showcase their culinary creations and delight diners around the world." }]}
                    dir='rtl' />
            </div>
            <div className=' col-md-10 mx-auto p-4'>
                <p className=' fw-bold fs-3 col-md-8 mx-auto mb-5'>
                    At CauseConnect, our mission is simple: to empower individuals with a passion for food to turn their culinary dreams into reality. Whether you're a seasoned chef looking to expand your reach or a home cook with a flair for flavors, we provide the tools and support you need to launch and grow your virtual restaurant business.
                </p>

                <img src='/assets/about-hero-2.jpg' alt='about-hero' width={"100%"} className='rounded-5 custom-ap-2' />
            </div>

            <div className=' col-md-10 mx-auto my-5 '>
                <h2 className=' fw-bold display-6 text-center mb-5'>
                    Why Choose Us?
                </h2>

                <div
                    className="d-flex flex-wrap justify-content-center gap-4">
                    <CustomCard3
                        title='Accessibility'
                        Description='We believe that everyone should have the opportunity to share their passion for food with the world. Our platform is open to individuals of all culinary backgrounds and skill levels, making it easy for anyone to start their own virtual restaurant.' />
                    <CustomCard3
                        title='Flexibility'
                        Description="Whether you're looking to launch a full-scale restaurant concept or specialize in a niche cuisine, our platform offers the flexibility to customize your menu, pricing, and offerings to suit your unique vision and target audience." />
                    <CustomCard3
                        title='Support'
                        Description="From our dedicated customer support team to a thriving community of fellow restaurateurs, you'll never feel alone on your culinary journey. We're here to provide guidance, answer questions, and offer support whenever you need it." />
                    <CustomCard3
                        title='Empowerment'
                        Description="We believe in the transformative power of social media. Our goal is to empower chefs and enthusisasts to achieve their full potential." />
                </div>
            </div>

            <div className=' col-md-11 mx-auto custom-my-10'>
                <InformationCard
                    title={"Join Our Community"}
                    heading={"CauseConnect is a best platform to grow your buisness"}
                    description={"Ready to take the next step on your culinary journey? Join the [Your Platform Name] community today and unlock the potential of your culinary creativity. Whether you're a chef, home cook, or food lover, there's a place for you here."}
                    link={"Join our community"} />
            </div>

        </>
    )
}

export default About
