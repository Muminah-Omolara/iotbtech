import ServiceIcon from "../assets/icons/ServiceIcon.svg"
import ServiceCard from "./ServiceCard"


const Project = () => {
  return (
    
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-48 p-4 ">
      <div className="mt-4">
      <h1 className="text-tt-primary pl-4">Our Services</h1>
      <ServiceCard
       className="w-72 leading-5"
       showButton={false}
       title="UI/UX, Web Design"
       description="With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users"
      />
      </div>
      <img src={ServiceIcon} alt="" className="w-72 h-72 lg:w-48 lg:h-48"/>
    </div>
    
  )
}

export default Project