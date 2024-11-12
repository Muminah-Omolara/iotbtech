import { delexImg, homeleyImg, webApp } from "../assets/images"
import Button from "../components/Button"
import ServiceWithImageCard from "../components/ServiceWithImageCard"
import { MdOutlineNavigateNext } from "react-icons/md";

const Portfolio = () => {
  return (
    <div>
      <div className="block gap-5">
        <ServiceWithImageCard
          title="UI/UX Design"
          description="Delex Relay, a delivery platform"
          body="Delex is a Delivery Platforme for bussiness owner And indivudial who want to send packages from a point to an other ,Delex offer a tracking system too"
          img={delexImg}        
        />
        <ServiceWithImageCard
          title="Web / app Development"
          description="Cooke Me, Fresh food At your Home"
          body="Cooke me is an platform that offer fresh meal with a cheap price and allow indivudial to sell their meals"
          img={webApp}        
        />
        <ServiceWithImageCard
          title="UI/UX Design"
          description="ADOC, Your Online Medical Appoinments"
          body="ADOC Is an online Medical appoinment 
          That allow user To take an appoinment with a doctor , it alos work as a medical files Holder"
          img={homeleyImg}        
        />
      </div>
      <div className="flex items-center justify-center mt-12 mb-10">
        <Button
          type="outline"
          text="Explore More Projects"
          icon={<MdOutlineNavigateNext />}
        />
      </div>
    </div>
  )
}

export default Portfolio