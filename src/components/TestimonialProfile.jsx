import React from 'react';

const TestimonialProfile = ({ testimonial, image, name, portfolio }) => {
  return (
  
<div className=" text-left rounded-lg flex flex-col max-w-xs mx-auto">
    <p className='font-normal text-base text-[#0E0E2C99] pb-5'>{testimonial}</p>
    <div className='flex flex-row gap-3'>
        <div>
        <img
        src={image}
        alt={`${name}'s profile`}
        className="w-12 h-12 rounded-full  mb-4 object-cover"
      />

        </div>
        <div>

        <h3 className="text-lg font-semibold ">{name}</h3>
        <p className="text-base font-medium text-[#0E0E2CCC]">{portfolio}</p>
        </div>
    </div>
     
      
      
    </div>
   
    
  );
};

export default TestimonialProfile;
