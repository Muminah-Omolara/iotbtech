import Process from "../components/Process"
import VectorUp from "../assets/icons/VectorUp.svg"
import VectorDown from "../assets/icons/VectorDown.svg"
import processCards from "../data/processCards"
import ProcessCard from "../components/ProcessCard"

const OurProcess = () => {
  return (
    <div>
        <div>
        <Process 
        title="Our Working Process help you to get the best from our team skill" 
        description="We offer a variaty of services to help you to grow and build your brand and help you with developing your Products"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center items-center -mb-20">
           <img src={VectorDown} alt="" className="md:block hidden"/>
           </div>
<div className="flex flex-wrap flex-col lg:flex-row md:flex-row gap-3 items-stretch justify-center w-full">
        {processCards.map((s) => (
          <ProcessCard 
          key={s.title}
          index={s.index} 
          title={s.title} 
          description={s.description} />
        ))}
      </div>
        <div className="flex justify-center items-center -mt-16 gap-16 lg:gap-64">
           <img src={VectorUp} alt=""  className="md:block hidden"/>
          <img src={VectorUp} alt="" className="md:block hidden"/> 
        </div>
        </div>
        
    </div>
  )
}

export default OurProcess