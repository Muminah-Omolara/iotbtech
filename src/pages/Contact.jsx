import React from "react";
import line from "../assets/images/line.svg";
import Input from "../components/CustomInput";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";

function Contact() {
  return (
    <div className="mx-auto leading-snug w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-2 sm:px-4 gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen">
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
          <label htmlFor="">Your Name</label>
          <Input type="text" placeholder="Your Full Name" />
          <label htmlFor="">Your Email</label>
          <Input type="email" placeholder="Your email" />
          <label htmlFor="">Your Phone Number</label>
          <Input type="number" placeholder="Enter your phone number" />
          <label htmlFor="">Message</label> <br />
          <TextArea placeholder="Type in your message" />
          <div className="flex justify-center items-center">
            <Button text="Send a message" icon={<MdOutlineNavigateNext />} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
