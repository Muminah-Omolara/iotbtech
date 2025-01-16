
const Timeline = ({title, desc,icon}) => {
  return (

        <div className=" gap-4">
            <div className="flex flex-row px-4 gap-4">
            
            <div className="w-12 flex-shrink-0 ">
                <img src={icon} alt="" />
            </div>
        <div className="">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-gray-600">{desc}</p>
        </div>

        </div>
        </div>

       
   
  )
}

export default Timeline