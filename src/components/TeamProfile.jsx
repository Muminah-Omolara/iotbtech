import React from 'react';

const TeamProfile = ({ image, name, portfolio }) => {
  return (
  
<div className="bg-white text-left rounded-lg flex flex-col max-w-xs mx-auto">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-40 h-60  mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold ">{name}</h3>
      <p className="text-sm font-semibold">{portfolio}</p>
      
    </div>
   
    
  );
};

export default TeamProfile;
