import ServiceIcon from "../assets/icons/ServiceIcon.svg"
import ServiceCard from "./ServiceCard"

const Project = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-10">
      <div className="">
      <h1 className="text-tt-primary">Our Services</h1>
      <ServiceCard text="Ui /Ux , Web Design " description="With a team of the best Digital Product Designer 
In the world at your hand , their goal is to create 
usefull andeasy to use products for you potentials users" className="w-96" />
      </div>
      
      <img src={ServiceIcon} alt="" className="w-32 h-32"/>
    </div>
  )
}

export default Project