import Copyright from "./Copyright";
import Logo from "../assets/icons/tektariq.png"
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { SiLinkedin } from "react-icons/si";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-tt-grey">
      <div className=" mx-auto flex justify-between text-tt-black pt-8 mb-8 w-auto max-w-6xl lg:px-0 px-6 ">
        <div className="">
          <img src= {Logo} alt="" className="w-[120px] mb-5"/>
          <p className=" font-normal text-[16px] leading-[27.44px] w-[155px] lg:w-[255px] mb-2">
            DigitUx is a Digital agencay that create User centred Product that
            help her client to evolve
            help her client to evolve  
          </p>
        </div>
        <ul className="flex-col hidden md:block">
          <li className="font-[600] text-[18px] mb-4 ">About</li>
          <li className="leading-[27.44px] mb-2">About Us</li>
          <li className="leading-[27.44px] mb-2">Study Case</li>
          <li className="leading-[27.44px] mb-2">Blogs</li>
          <li className="leading-[27.44px] mb-2">Portfolio</li>
          <li className="leading-[27.44px] mb-2">careers</li>
        </ul>
        <ul className="hidden md:block">
            <li className="font-[600] text-[18px] mb-4">Follow Us</li>
            <li className="flex items-center gap-2 mb-4 ">
              <SlSocialFacebook className="text-tt-primary" />
              <p>facebook page</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <SiInstagram className="text-tt-primary" />
              <p>instagram page</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <SlSocialTwitter className="text-tt-primary" />
              <p>twitter handle</p>
            </li>
              <li className="flex items-center gap-2 mb-4">
              <SiLinkedin className="text-tt-primary" />
              <p>linkedin</p>
            </li>
          </ul>

        <div className="">
          <ul>
            <li className="font-[600] text-[18px] mb-4">Get In touch with Us</li>
            <li className="leading-[27.44px] mb-2 w-[255px]">
              Need Answers? Need help ? Just email us{" "}
            </li>
            <div className="flex w-[252px] h-[48px] bg-tt-white justify-between items-center px-2 ">
              <input type="email" placeholder= " Your email" />
              <BsSend className="text-tt-primary w-[20px]" />
            </div>
          </ul>
        </div>
      </div>
      <div>
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;