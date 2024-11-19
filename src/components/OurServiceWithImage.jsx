

const OurServiceWithImage = ({title, description}) => {
  return (
    <div className=" mt-4 lg:mt-20 flex flex-col lg:flex-col sm:text-left ">
          <h1 className="text-tt-primary lg:text-left text-left font-bold sans">Our Services</h1>
        <div className="flex flex-col lg:flex-col ">
          <h1 className="text-tt-black font-bold text-[34px]">{title}</h1>
          <p className="text-tt-grey text-[22px]">{description}</p>
        </div>
    </div>
  )
}

export default OurServiceWithImage