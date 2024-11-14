import ImagesComponent from "../components/ImagesComponent"

// eslint-disable-next-line react/prop-types
const WorkImages = ({ imgTitle, imgText, imgSrc }) => {
  return (
    <div className="bg-white lg:p-2">
        <ImagesComponent src={imgSrc} alt={imgTitle} className="mb-2 w-full lg:w-72 h-auto flex-shrink-0" />
        <h4 className="text-tt-primary font-medium text-sm">{imgTitle}</h4>
        <p className="text-tt-grey">{imgText}</p>
    </div>
  )
}

export default WorkImages
