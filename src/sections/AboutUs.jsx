import Button from "../components/Button";
import { CiChat1 } from "react-icons/ci";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
      <div className="px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto flex-col items-center justify-center text-left lg:text-center space-y-6">
              <h3 className="text-tt-primary mb-0 lg:mb-3 text-xl md:text-2xl lg:text-3xl font-bold">About Us</h3>
              <h2 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8">
                  What we do is what make us Who we are
              </h2>
              <p className="text-tt-grey text-xl max-w-2xl mx-auto">
                  DigitUx is a Digital agencay founded 2022, that create User Centred
                  Product that help her client to evolve ,our core idealogy is Perfection
                  , our goal is to make usefull and easy to use products And help people
                  to grow their business,
              </p>
              <div className="flex mx-auto justify-center gap-4 flex-col lg:flex-row">
                  <Link to="/login" onClick={() => {
                      window.scrollTo(0, 0);
                  }}>
                      <Button text="Let’s Talk" type="solid" icon={<CiChat1/>}/>
                  </Link>
                  <Link to="/services" onClick={() => {
                      window.scrollTo(0, 0);
                  }}>
                      <Button
                          text="Check our Services"
                          type="outline"
                          icon={<RiArrowRightLine/>}
                      />
                  </Link>
              </div>
          </div>
      </div>
  );
};

export default AboutUs;
