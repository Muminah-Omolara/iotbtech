import Process from "../components/Process"
import ProcessCard from "../components/ProcessCard"
import pppointedDown from "../assets/icons/pppointedDown.svg"
import pppointedUp from "../assets/icons/pppointedUp.svg"


const OurProcess = () => {
  return (
    <div>
        <div>
        <Process 
        title="Our Working Process help you to get the best from our team skill" 
        description="We offer a variaty of services to help you to grow and build your brand and help you with developing your Products"/>
        </div>
        <div className="flex absolute left-[500px] top-[550px] lg:items-center lg:justify-center mt-10">
           <img src={pppointedDown} alt="" className="md:block hidden w-72"/>
           </div>
        <div className="flex flex-col lg:flex-row lg:px-32 lg:gap-6 ">
        <ProcessCard index="01" title="Web Development" description="Web development helps create fast, user-friendly web applications with modern frameworks, ensuring a seamless user experience across devices."/>
        <ProcessCard index="01" title="Web Development" description="Web development helps create fast, user-friendly web applications with modern frameworks, ensuring a seamless user experience across devices."/>
        <ProcessCard index="01" title="Web Development" description="Web development helps create fast, user-friendly web applications with modern frameworks, ensuring a seamless user experience across devices."/>
        <ProcessCard index="01" title="Web Development" description="Web development helps create fast, user-friendly web applications with modern frameworks, ensuring a seamless user experience across devices."/>
        </div>
        <div className="absolute -bottom-[550px] left-80 flex flex-row lg:gap-96 lg:items-center lg:justify-center">
          <div className="flex flex-row items-center gap-20">
           <img src={pppointedUp} alt=""  className="md:block hidden w-72 "/>
          <img src={pppointedUp} alt="" className="md:block hidden w-72"/> 
          </div>
        </div>
        
    </div>
  )
}

export default OurProcess