const ServiceTeamCard = ({ image, name, portfolio }) => {
  return (
    <div className="bg-white text-left rounded-lg mx-auto">
      <div className="w-40 lg:w-44 h-60 lg:h-64">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-full mb-4 object-cover object-center"
        />
      </div>
      <div className="max-w-48">
        <h3 className="text-lg font-semibold text-tt-black ">{name}</h3>
        <p className="text-sm font-semibold text-tt-grey">{portfolio}</p>
      </div>
    </div>
  );
};

export default ServiceTeamCard;
