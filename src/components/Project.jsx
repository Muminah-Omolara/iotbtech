import ServiceIcon from "../assets/icons/ServiceIcon.svg"


const Project = () => {
  return (
    <div className="flex flex-row ">
      <ServiceCard text="" description="" />
      <img src={ServiceIcon} alt="" className="w-48 h-48"/>
    </div>
  )
}

export default Project