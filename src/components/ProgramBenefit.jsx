
const ProgramBenefit = ({title, desc, icon}) => {
  return (
    <>
    <div className=" flex flex-col lg:m-4 mt-4 sm:justify-center sm:items-center ">
      <div className="flex flex-row gap-4 sm:justify-center sm:items-center ">
      <div className="w-12 ">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      </div>
            <p className="text-gray-600 mt-2 text-sm">{desc}</p>
       
    </div>
    
</>
  )
}

export default ProgramBenefit