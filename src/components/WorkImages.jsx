// eslint-disable-next-line react/prop-types
const WorkImages = ({ imgTitle, imgText, imgSrc }) => {
  return (
    <div className="bg-white p-2 w-96 h-72  ">
      <img src={imgSrc} alt={imgTitle} className="w-full h-full object-cover" />
      <h4 className="text-tt-primary font-medium text-sm">{imgTitle}</h4>
      <p className="text-tt-grey">{imgText}</p>
    </div>
  );
};

export default WorkImages;
