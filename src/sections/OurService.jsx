import OurServices from "../components/OurServices"

const OurService = () => {
  return (
    <div className="text-left px-4 ">
      <h2 className="text-tt-primary lg:text-center text-left font-bold ">Our Services</h2>
        <div>
        <OurServices 
        title="Services we Offer"
        description="With Our Awesome team we offres a variaty of services from UI/UX design to Video Productions,Our Goal is to help you on your Road to Create your product" 
        desc="Check Our Projects" />
        </div>
    </div>
  )
}

export default OurService