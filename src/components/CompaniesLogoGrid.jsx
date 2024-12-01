import { mentorCompnies } from "../data/companies";

const CompaniesLogoGrid = () => {
  return (
    <div className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-sm text-gray-600 ">
          MENTORS FROM COMPANIES FROM AROUND THE WORLD
        </h3>
        <div className="mt-6">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center">
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

export default CompaniesLogoGrid;
