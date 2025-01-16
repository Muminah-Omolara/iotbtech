import Timeline from "../components/Timeline"
import timeline from "../data/timeline"




const Timelines = () => {
  return (
    <div className="lg:items-center lg:justify-center pt-10 lg:pt-6 flex lg:flex-row flex-col lg:gap-24 sm:justify-center sm:items-center gap-12">
        {timeline.map ((timeline, index) => (
            <Timeline 
            key={index}
            icon={timeline.icon}
            title={timeline.title}
            desc={timeline.desc}/>
        )
        )}
    </div>
  )
}

export default Timelines