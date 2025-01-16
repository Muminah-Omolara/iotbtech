import { hairyGuy} from '../assets/images';
import ProgramBenefit from '../components/ProgramBenefit'
import benefits from '../data/benefits';

const Program = () => {
  return (
    <div className="my-20 lg:mb-24 lg:mt-12 py-10 bg-tt-grey bg-opacity-10 flex flex-row lg:justify-center lg:items-center ">
     
      <div className="gap-10 ">
      <div className=" lg:pl-10 px-4">
      <h1 className="text-xl font-bold">Program Benefits</h1>
      </div> 
       {benefits.map((benefits)=>(
        <ProgramBenefit 
        icon={benefits.icon}
        title={benefits.title}
        desc={benefits.desc} 
        />
        
       ))}
       </div>
       <div className="w-auto  mt-4">
        <img src={hairyGuy} alt="picture" className="rounded hidden md:block"/>
      </div>
    </div>
  )
}

export default Program