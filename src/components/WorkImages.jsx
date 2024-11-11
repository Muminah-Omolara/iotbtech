import ImagesComponent from "../components/ImagesComponent"

// eslint-disable-next-line react/prop-types
const WorkImages = ({ imgTitle, imgText, imgSrc }) => {
  return (
    <div className="bg-white p-2">
        <ImagesComponent src={imgSrc} alt={imgTitle} className="mb-2 w-72 h-auto" />
        <h4 className="text-tt-primary font-medium text-sm">{imgTitle}</h4>
        <p className="text-tt-grey">{imgText}</p>
    </div>
  )
}

export default WorkImages
