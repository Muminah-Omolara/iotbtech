import { mentorCompnies } from "../data/companies";

const Clients = () => {
  return (
    <div className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col items-start">
        <h3 className="font-semibold text-sm text-gray-600 ">
          MENTORS FROM COMPANIES FROM AROUND THE WORLD
        </h3>
        <div className="mt-6">
          <ul className="flex gap-x-32 gap-y-6 flex-wrap items-center justify-center">
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
