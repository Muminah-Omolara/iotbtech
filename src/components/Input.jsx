
const Input = ({type, placeholder}) => {
  return (
<input
      type={type} 
      placeholder={placeholder} required
       className="w-full my-4 h-12 p-5 border-2 border-tt-grey focus:outline focus:border-tt-primary rounded-md"
    />
  )
}

export default Input