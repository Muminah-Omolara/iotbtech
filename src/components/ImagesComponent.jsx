
// eslint-disable-next-line react/prop-types
const ImagesComponent = ({ src, alt, className="" }) => {
  return (
    <div>
        <img src={src} alt={alt} className={`${className}`} />
    </div>
  )
}

export default ImagesComponent
