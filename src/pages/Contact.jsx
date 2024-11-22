import line from "../assets/images/line.svg";
import CustomInput from "../components/CustomInput";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import Testimonials from "../sections/Testimonials";

function Contact() {
  return (
    <div>
      <div className="mx-auto leading-snug max-w-screen-lg px-4 sm:px-6 lg:px-8 gap-9 flex flex-col md:flex-row justify-center items-center">
        <img src={line} alt="" className="absolute w-full" />
        <div className="lg:w-[537px] md:w-[398px] relative  p-11">
          <div className="justify-center items-center mb-4">
            <p className="lg:text-center md: text-left font-bold text-tt-primary text-[22px]">
              Let's have a chat
            </p>
            <h1 className="lg:text-center md: text-left font-bold text-tt-black text-[30px]">
              An expert at your services
            </h1>
          </div>

          <form action="">
            <CustomInput
              type="text"
              placeholder="Adekunle Ciroma Chukwuma"
              label="Full Name"
              name="full-name"
            />
            <CustomInput
              type="email"
              placeholder="shehu-shagari@yahoo.com"
              label="Email"
              name="email"
            />
            <CustomInput
              type="number"
              placeholder="2348100000009"
              label="Phone"
              name="phone"
            />
            <label htmlFor="">Message</label> <br />
            <TextArea placeholder="Type in your message" />
            <div className="flex justify-center items-center">
              <Button text="Send a message" icon={<MdOutlineNavigateNext />} />
            </div>
          </form>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default Contact;
