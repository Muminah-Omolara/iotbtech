import OurServiceWithImage from "../components/OurServiceWithImage"
import Titik from "../assets/icons/Titik.svg"
import Rectangle from "../assets/icons/Rectangle.svg"

const ServiceWithImage = () => {
  return (
    <div className="flex flex-row mt-12 justify-start lg:my-24 mb-24 gap-4 mx-4 lg:mx-auto max-w-7xl lg:justify-between lg:items-center w-full">
        <div className="flex flex-col lg:flex-row lg:mx-24 items-left w-3/4 ">
          <OurServiceWithImage
           title="Ui /Ux , Web Design" 
          description="With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users"
           />
       
        <div className="relative flex lg:justify-center lg:items-center lg:w-1/2 mt-4">
          <img 
          src={Titik} 
          alt="" 
          className=" left-36 absolute inset-0 w-[250px] h-[200px] object-cover z-10 hidden sm:block sm:items-left mx-4 lg:mt-10 "/>
        <img
          src={Rectangle}
          alt=""
          className="relative h-[250px] w-[250px] z-10 top-12"
        />
        </div>
        </div>
    </div>
  )
}

export default ServiceWithImage