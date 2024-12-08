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
                <p className="text-tt-grey text-base lg:text-xl text-justify">
                    The IOTB TECH Fellowship is a yearly program that focuses on training beginners in selected tech fields
                    for a period of six months. The fellowship program, an initiative of the International Organization of
                    Tijaniyyah Brotherhood (IOTB) - the largest alumni body of TIMSAN organization focused on empowering
                    the Nigerian youths (irregardless of backgrounds and affiliations) with in-demand tech skills in a bid
                    to chart a defined career trajectory for interested and dedicated individuals in the Tech ecosystem.
                    <br />
                    Currently, we train our fellos in graphic design, product design, full-stack web development, and
                    cloud engineering tech stacks. The training involves instructor-led sessions, hands-on learning as
                    well as project work upon completion of the training. As part of our programs, we also have a webinar
                    series that focuses on soft skills training and expert insight sessions for each learning track.
                    These sessions cumulatively will contribute to the overall success of the fellows of IOTB TECH and
                    their subsequent integration into the career spaces as qualified professionals in their respectives niches.
                </p>
                <div className="flex mx-auto justify-center gap-4 flex-col lg:flex-row">
                    <Link to="/login" onClick={() => {window.scrollTo(0, 0);}}>
                        <Button text="Let’s Talk" type="solid" icon={<CiChat1/>}/>
                    </Link>
                    <Link to="/services" onClick={() => {window.scrollTo(0, 0);}}>
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
