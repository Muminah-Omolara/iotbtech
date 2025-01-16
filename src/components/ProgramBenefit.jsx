
const ProgramBenefit = ({title, desc, icon}) => {
  return (
    <>
    <div className=" flex flex-col px-4 lg:m-4 mt-4">
      <div className="flex flex-row gap-4 ">
      <div className="w-12 flex-shrink-0 ">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      </div>
            <p className="text-gray-600 w-3/4 mt-2 text-sm">{desc}</p>
       
    </div>
    
</>
  )
}

export default ProgramBenefit