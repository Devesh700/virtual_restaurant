import React from 'react'
import "./Utilities.css"
const HeroCard = ({dir="ltr",image="/assets/technology-studio-2.webp",contents=
[{title:"Problem-Solving Through Tech Solutions",para:"We thrive on solving intricate problems using technology as our tool. Our solutions streamline processes, optimize workflows, and address challenges in unique and effective ways."},{title:"Agile Development Methodologies",para:"Embracing agile methodologies, we ensure quick iterations and collaboration, adapting to changing requirements and delivering incremental value throughout the development lifecycle."},]
}) => {
  return (
        <div 
        className="w-100 my-5 p-4 text-start d-flex flex-wrap gap-4 justify-content-around align-items-center" 
        dir={dir}>
            <div className="img-container w-md-48">
                <img src={image} width={"100%"} height={"100%"}/>
            </div>
            <section className=' aside w-md-48'>
                {contents.map((val)=>(<>
                    <h2 className=' display-6 fw-bold'>
                    {val.title}
                </h2>
                <p>
                    {val.para}
                </p>
                </>))}
            </section>

        </div>
      
  )
}

export default HeroCard
