import OurServiceWithImage from "../components/OurServiceWithImage"
import Titik from "../assets/icons/Titik.svg"
import Rectangle from "../assets/icons/Rectangle.svg"

const ServiceWithImage = () => {
  return (
    <div className="flex flex-col mt-12 lg:mt-48 lg:flex-row mb-12 gap- lg:gap-48 mx-4 lg:mx-32">
        <div className="flex ">
          <OurServiceWithImage
           title="Ui /Ux , Web Design" 
          description="With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users" />
        </div>
        <div className="relative lg:mr-32">
          <img src={Rectangle} alt="" className="h-[350px] w-[350px] lg:mt-10 right-10"/>
          <img src={Titik} alt="" className="absolute inset-0 w-[150px] h-[150px] object-cover left-20 top-36 -z-10 hidden sm:block sm:items-center"/>
        </div>
        
    </div>
  )
}

export default ServiceWithImage