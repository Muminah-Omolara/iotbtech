import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import Button from "../components/Button";
import ImagesComponent from "../components/ImageContainer";
import FloatingBox from "../components/HomeFloatingSkills";
import {
  cloudIcon,
  colorPalette,
  uiUx,
  vector,
  webIcon,
  titik,
  hexagon,
} from "../assets/icons";
import { heroImage } from "../assets/images";
import "../App.css";
import GreetingsComponent from "../components/GreetingsComponent";
import BadgeComponent from "../components/BadgeComponent";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 max-w-screen-xl mx-auto lg:mt-5 mt-14 ">
      <div className="lg:w-1/2 text-center lg:text-left relative">
        <div className="justify-center items-stretch" >
          <img
            src={vector}
            alt="vector arrow"
            className="hidden lg:block -left-24 text-center h-full absolute"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-xl text-left mb-2 font-semibold text-tt-primary -mt-3">
            <GreetingsComponent />
          </h2>
          <h1 className="text-tt-black text-left text-3xl lg:text-5xl font-bold mb-8"> 
            Unlocking your potential with technological driven skills <BadgeComponent />
          </h1>
          <p className="text-xl text-tt-grey mb-6 text-left">
            Tektariq helps you develop critical hand on digital skills.
          </p>
          <div className="flex flex-col lg:flex-row mx-auto justify-center lg:justify-start mt-9 mb-8 gap-5 -z-50">
            <Link to="/login">
              <Button
                text="Enrol Today"
                type="solid"
                icon={<MdOutlineNavigateNext />}
              />
            </Link>
            <Link to="/services">
              <Button text="Check our Services" type="outline" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2 flex justify-center z-10">
        {/* <div className="absolute hidden lg:block -top-6 left-[100px] w-[310px] h-[305px] bg-tt-primary rounded-hexagon -z-10"></div> */}
        <img
          src={hexagon}
          alt="hexagon background"
          className="absolute hidden lg:block -top-6 w-[310px] -z-10"
        />
        <img
          src={titik}
          alt="pattern circles background"
          className="absolute hidden lg:block top-14 left-[200px] w-[300px] h-[350px] -z-20"
        />
        <ImagesComponent
          src={heroImage}
          alt="hero image"
          className="hidden lg:block h-[350px]"
        />
        <div className="hidden lg:block">
          <FloatingBox
            icon={uiUx}
            text="Technology"
            position="top-16 left-20"
          />
          <FloatingBox
            icon={cloudIcon}
            text="Faith"
            position="top-32 right-24"
          />
          <FloatingBox
            icon={webIcon}
            text="Entreprenuership"
            position="top-56 left-20"
          />
          <FloatingBox
            icon={colorPalette}
            text="Empowerment"
            position="top-72 right-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
