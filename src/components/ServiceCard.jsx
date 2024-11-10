import { nextIcon } from "../assets/icons"
import Button from "../components/Button"
import ImagesComponent from "./ImagesComponent"

const ServiceCard = ({title, description, className="", showButton = true}) => {
  return (
   <div className="bg-tt-white w-48 p-4">
    <div className="flex flex-col lg:flex-col">
      <h1 className="text-tt-primary text-sm mb-4">{title}</h1>
      <p className={`text-tt-grey text-sm mb-2 ${className} `}>{description}</p>
    </div>
    {
      showButton && (
        <Button text="Learn More" type="outline"  
    icon={<ImagesComponent src={nextIcon} className="w-5 h-5" />}
     />
      )
    }
    
   </div>

  )
}

export default ServiceCard