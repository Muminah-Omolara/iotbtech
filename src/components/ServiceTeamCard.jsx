import React, { useState, useEffect } from 'react';
import TeamProfile from './ServiceTeamProfile';

import profiles from "../data/profiles";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const TeamCard = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const profilesPerPage = 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startIndex = currentPage * profilesPerPage;
  const currentProfiles = profiles.slice(startIndex, startIndex + profilesPerPage);
  const totalPages = Math.ceil(profiles.length / profilesPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : 0));
  };

  return (
    <div className="mx-auto items-center max-w-screen-xl">
      <p className="p-4 sm:p-6 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-tt-primary text-left sm:text-left">
        The Team
      </p>
      <div className="flex flex-col sm:flex-row p-4 gap-6 items-start">
        <div className="w-full sm:w-1/3">
          <h2 className="text-2xl sm:text-4xl font-bold leading-snug text-left sm:text-left">
            Meet The Awesome and Creative Members of Our Team
          </h2>
        </div>
        <div className="w-full sm:w-2/3">
          <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
            {(isMobile ? currentProfiles : profiles).map((profile, index) => (
              <TeamProfile
                key={index}
                image={profile.image}
                name={profile.name}
                portfolio={profile.portfolio}
              />
            ))}
          </div>

          {isMobile && (
           <div className="flex justify-center items-center gap-6 pt-4">
           <button
             onClick={handlePrev}
             disabled={startIndex === 0}
             className="disabled:opacity-50"
           >
             <img src={BsArrowLeftCircle} alt="Previous" />
           </button>
           <button
             onClick={handleNext}
             disabled={startIndex + profilesPerPage >= profiles.length}
             className="disabled:opacity-50"
           >
             <img src={BsArrowRightCircle} alt="Next" />
           </button>
         </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default TeamCard;
