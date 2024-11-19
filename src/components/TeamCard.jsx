const TeamProfile = ({ image, name, portfolio }) => {
  return (
    <div className="bg-white text-left rounded-lg flex flex-col max-w-xs mx-auto">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-40 h-60  mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-tt-black ">{name}</h3>
      <p className="text-sm font-semibold text-tt-grey">{portfolio}</p>
    </div>
  );
};

export default TeamProfile;
