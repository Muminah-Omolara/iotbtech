
import Button from './Button'


const Admission = ({title, desc,img}) => {
  return (
    <div className=" lg:py-12 lg:px-10  px-4 pb-12">
        <div className="flex flex-row lg:justify-center lg:items-center lg:gap-12">
        <div className="gap-2">
              <img src={img} alt="" className="rounded hidden md:block"/>
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-2xl font-bold pb-6 mt-10 ">{title}</h1>
                <p className="pb-4 text-gray-600">{desc}</p>
                <Button text="Apply Now"/>
            </div>
            
        </div>
        
    </div>
  )
}

export default Admission