import { titik } from "../assets/icons";

const TeamProfile = ({ image, name, portfolio }) => {
  return (
    <div className="bg-white text-left rounded-lg flex flex-col items-center mx-auto p-4">
      <div className="relative flex flex-col sm:flex-row justify-center items-center w-full mt-4">
       
        <img
          src={titik}
          alt=""
          className="absolute sm:left-36 inset-0 w-[80px] h-[80px] object-cover z-10 hidden sm:block sm:justify-center sm:items-center"
        />

   
        <img
          src={image}
          alt=""
          className="relative w-[250px] sm:w-[300px] md:w-[400px] h-auto object-cover z-10 mx-auto"
        />
      </div>

    
      <h3 className="text-[22px] font-semibold text-tt-black mt-4">{name}</h3>
      <p className="text-[18px] font-semibold text-tt-grey">{portfolio}</p>
    </div>
  );
};

export default TeamProfile;
