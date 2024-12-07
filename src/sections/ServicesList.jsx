import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import OurServiceWithImage from "../components/OurServiceWithImage";
import Rectangle from "../assets/icons/Rectangle.svg";

const ServicesList = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 my-20">
            <div className="max-w-screen-xl mx-auto">
                <div className="">
                    <OurServiceWithImage
                        title="Ui /Ux , Web Design"
                        img={Rectangle}
                        description="With a team of the best Digital Product Designer In the world at your hand ,
                        their goal is to create usefull andeasy to use products for you potentials users"
                    />
                </div>
                <div className="flex justify-end items-center gap-6 pt-4">
                    <button className="text-tt-primary hidden sm:block">
                        <BsArrowLeftCircle size={28}/>
                    </button>
                    <button className="text-tt-primary hidden sm:block">
                        <BsArrowRightCircle size={28}/>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ServicesList;
