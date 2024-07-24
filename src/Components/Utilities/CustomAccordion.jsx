import React, { useState } from 'react';
import './Utilities.css';

const CustomAccordion = ({data}) => {
  const [accordion, setAccordion] = useState("");

  const toggleAccordion = (item) => {
    setAccordion(item === accordion ? "" : item);
  };

  return (
    <div className='w-100 accordion-container'>
      <div className='custom-accordion-item-container'>
        {data.map((val,index)=>(<>
          <p className={`border-top border-bottom py-4 custom-accordion-item ${accordion === index ? "active" : ""}`}
           onClick={() => toggleAccordion(index)}>
          {val.title}
        </p>
        <p className={` ${accordion === index ? "animate-h" : "item-value"}`}>
          {val.description}
        </p>

        </>))}
      </div>
    </div>
  );
}

export default CustomAccordion;
