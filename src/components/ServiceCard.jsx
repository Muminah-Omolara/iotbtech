const ServiceCard = ({text, description, className=""}) => {
  return (
   <div>
    <div>
      <h1 >{text}</h1>
      <p className={ `${className}`}> {description} </p>
    </div>
   </div>

  )
}

export default ServiceCard