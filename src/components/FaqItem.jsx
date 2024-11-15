import { useState } from "react"

const FaqItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState (false);
    const handleClick = () => {setIsOpen(!isOpen)}
  return (
    <div className="flex items-center mt-8 rounded-md gap-16 border-2 border-tt-primary p-2 justify-between px-5">
        <div className="flex-col ">
            <h3 className="text-tt-black font-bold text-[18px]">{question}</h3>
             {isOpen && (
            <p className="text-tt-grey mt-5 mb-6 font-normal text-[16px]">{answer}</p>
        )}
        </div>
        
        <button onClick={handleClick}>
            <span className="text-[20px] font-bold ">{isOpen ? "-" : "+"}</span>

        </button>

    </div>
  )
}

export default FaqItem