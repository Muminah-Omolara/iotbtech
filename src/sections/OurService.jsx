import Button from "../components/Button";
import {BsChatLeft} from "react-icons/bs";
import {MdOutlineNavigateNext} from "react-icons/md";
import {Link} from "react-router-dom";

const OurService = () => {
    return (
        <div className="px-4 md:px-8">
            <div className="max-w-screen-xl mx-auto flex-col items-center justify-center text-left lg:text-center space-y-6">
                <h2 className="text-tt-primary text-xl md:text-2xl lg:text-3xl font-bold">
                    Our Services
                </h2>
                <h1 className="text-tt-black text-2xl lg:text-2xl font-bold mt-3">Services we
                    Offer</h1>
                <p className="text-tt-grey text-xl max-w-2xl mx-auto">
                    With Our Awesome team we
                    offers a variety of services from UI/UX design to Video Productions,Our Goal is to help you
                    on your Road to Create your product
                </p>


                <div className="flex flex-col lg:flex-row mx-auto justify-center lg:justify-center gap-5 -z-50">
                    <Link to="/contact">
                        <Button
                            text="Lets Talk"
                            type="solid"
                            icon={<BsChatLeft/>}
                        />
                    </Link>
                    <Link to="/portfolio">
                        <Button text="Check our Services" type="outline" icon={<MdOutlineNavigateNext/>}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurService;
