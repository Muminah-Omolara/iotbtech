
const TextArea = ({name , placeholder}) => {
  return (
    <textarea name={name} placeholder={placeholder} className="w-full my-4 h-12 p-5 border-2 border-tt-grey focus:outline focus:border-tt-primary rounded-md"></textarea>
  )
}

export default TextArea