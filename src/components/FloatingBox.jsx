import ImagesComponent from "./ImagesComponent"

// eslint-disable-next-line react/prop-types
const FloatingBox = ({ text, position, icon }) => {
  return (
    <div className={`absolute ${position} bg-white p-2 rounded-md shadow-lg flex items-center space-x-2`}>
        <ImagesComponent src={icon} alt="icons" className="w-5 h-5" />
        <span className="text-sm text-tt-primary">{text}</span>
    </div>
  )
}

export default FloatingBox
