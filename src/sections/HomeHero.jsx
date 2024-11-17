import Button from "../components/Button";
import ImagesComponent from "../components/ImageContainer";
import FloatingBox from "../components/HomeFloatingSkills";
import {
  cloudIcon,
  colorPalette,
  nextIcon,
  uiUx,
  webIcon,
} from "../assets/icons";
import { heroImage, patternCircles } from "../assets/images";
import "../App.css";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 max-w-6xl mx-auto lg:mt-5 mt-14">
      <div className="lg:w-1/2 text-center lg:text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          // eslint-disable-next-line react/no-unknown-property
          xmlns:xlink="http://www.w3.org/1999/xlink"
          // xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="hidden lg:block absolute -left-[120px] w-[400px] h-[400px] lg:w-[520px] lg:h-[380px] z-0"
        >
          <g
            strokeWidth="7"
            stroke="#008080"
            fill="none"
            strokeLinecap="square"
            strokeDasharray="13 24"
            transform="matrix(0.6427876096865394,0.766044443118978,-0.766044443118978,0.6427876096865394,462.30273337297547,-197.532821122207)"
          >
            <path
              d="M151.3367612361908 150.03457641601562Q132.3367612361908 681.0345764160156 649.3367612361908 648.0345764160156 "
              markerEnd="url(#SvgjsMarker8558)"
            ></path>
          </g>
          <defs>
            <marker
              markerWidth="5"
              markerHeight="5"
              refX="2.5"
              refY="2.5"
              viewBox="0 0 5 5"
              orient="auto"
              id="SvgjsMarker8558"
            >
              <polygon
                points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                fill="#008080"
              ></polygon>
            </marker>
          </defs>
        </svg>
        <h2 className="text-xl text-left mb-2 font-semibold text-tt-primary -mt-3">
          Hello,
        </h2>
        <h1 className="text-tt-black text-left text-3xl lg:text-5xl font-bold mb-8">
          Unlocking your potential with technological driven skills
        </h1>
        <p className="text-xl text-tt-grey mb-6 text-left">
          Tektariq helps you develop critical hand on digital skills.
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start mt-9 mb-8 gap-5">
          <Button
            text="Enrol Today"
            type="solid"
            icon={
              <ImagesComponent
                src={nextIcon}
                alt="next icon"
                className="h-5 w-5"
              />
            }
          />
          <Button text="Check our Services" type="outline" />
        </div>
      </div>
      <div className="relative lg:w-1/2 flex justify-center z-10">
        <div className="absolute hidden lg:block -top-6 left-[100px] w-[310px] h-[305px] bg-tt-primary rounded-hexagon -z-10"></div>
        <img
          src={patternCircles}
          alt="patter circles background"
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
            text="UI/UX Design"
            position="top-16 left-14"
          />
          <FloatingBox
            icon={cloudIcon}
            text="Cloud Engineering"
            position="top-32 right-6"
          />
          <FloatingBox
            icon={webIcon}
            text="Web Development"
            position="top-56 left-10"
          />
          <FloatingBox
            icon={colorPalette}
            text="Graphics Design"
            position="top-72 right-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
