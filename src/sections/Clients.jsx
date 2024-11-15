import { mentorCompnies } from "../data/companies";

const Clients = () => {
  return (
    <div className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-sm text-gray-600 text-center">
          MENTORS FROM COMPANIES FROM AROUND THE WORLD
        </h3>
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {mentorCompnies.map((c) => (
              <li key={c.name}>
                <img src={c.logo} alt={c.name} className="w-32" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clients;
