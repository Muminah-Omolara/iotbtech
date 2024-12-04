import Button from "../components/Button";
import { CiChat1 } from "react-icons/ci";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className=" mx-auto lg:w-[768px] sm:w-[398px] px-6 flex-col mt-16 text-left lg:text-center mb-16">
      <h3 className="font-bold text-[22px] text-tt-primary">About Us</h3>
      <h2 className="font-bold text-2xl text-tt-black mt-8  ">
        What we do is what make us Who we are
      </h2>
      <p className="text-tt-grey mx-auto mt-8">
        DigitUx is a Digital agencay founded 2022, that create User Centred
        Product that help her client to evolve ,our core idealogy is Perfection
        , our goal is to make usefull and easy to use products And help people
        to grow their business,
      </p>
      <div className="flex mx-auto justify-center gap-4 mt-8 flex-col lg:flex-row">
        <Link to="/login" onClick={() => { window.scrollTo(0, 0); }}>
          <Button text="Let’s Talk" type="solid" icon={<CiChat1 />} />
        </Link>
        <Link to="/services
        " onClick={() => { window.scrollTo(0, 0); }}>
          <Button
            text="Check our Services"
            type="outline"
            icon={<RiArrowRightLine />}
          />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
