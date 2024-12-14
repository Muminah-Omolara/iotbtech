import { titik } from "../assets/icons";

const OurServiceWithImage = ({ title, description, img }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
      <div className="flex flex-col space-y-6">
        <h2 className="text-tt-primary lg:text-left text-left text-xl md:text-2xl lg:text-3xl font-bold">
          Our Services
        </h2>

        <h1 className="text-tt-black font-bold text-4xl">{title}</h1>
        <p className="text-tt-grey text-lg max-w-2xl">{description}</p>
      </div>
      <div className="relative max-w-[350px] h-[352px]">
        <img
          src={img}
          alt="the things we do"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <img
          src={titik}
          alt="pattern"
          className="absolute hidden sm:block -top-7 left-44 -z-10 w-4/5"
        />
      </div>
    </div>
  );
};

export default OurServiceWithImage;
