import {titik} from "../assets/icons";

const OurServiceWithImage = ({title, description, img}) => {
 
    return (
        <div className="mt-12 lg:mt-36">
            <div className=" space-y-6">
                <h2 className="text-tt-primary lg:text-left text-left text-xl md:text-2xl lg:text-3xl font-bold">
                    Our Services
                </h2>
                </div>
     
      <div className="flex flex-col  lg:flex-row mt-8 lg:gap-64 gap-10">
      <div className="lg:w-1/2 ">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      
        <div className="relative ">
        <img
          src={img}
          alt="title"
          className="lg:w-56 lg:h-56  object-cover w-84 h-84"
          
        />
        <img
          src={titik}
          alt="pattern"
          className="absolute hidden sm:block -top-6 left-28 -z-10"
        />
      </div>
      </div>
     
           
        </div>
    );
};

export default OurServiceWithImage;
