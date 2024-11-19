import ProcessCard from "../components/ProcessCard"

const Process = ({title, description}) => {
    return (
      <div className="lg:px-32 px-4 sans mt-20">
                <h2 className="text-tt-primary lg:text-left lg:pt-12 text-left font-bold ">Our Process</h2>
        <div className="flex flex-col w-72 lg:w-auto lg:flex-row gap-6">
          <h1 className="font-bold text-[40px] ">{title}</h1>
          <p className="font-normal text-[22px]">{description}</p>
        </div>
        <ProcessCard/>
      </div>
    )
  }
  
  export default Process