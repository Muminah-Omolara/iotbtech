
const Input = ({type, placeholder}) => {
  return (
<input
      type={type} 
      placeholder={placeholder}
       className="w-96 h-12 border-2 border-tt-grey focus:outline focus:border-tt-primary rounded-md"
    />
  )
}

export default Input