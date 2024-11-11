import Button from "../components/Button"
import ImagesComponent from "../components/ImagesComponent"
import FloatingBox from "../components/FloatingBox"
import { cloudIcon, colorPalette, nextIcon, uiUx, webIcon } from "../assets/icons"
import { heroImage } from "../assets/images"
import "../App.css";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 max-w-6xl mx-auto mt-10">
        <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-tt-black text-3xl lg:text-5xl font-bold mb-8">
                Unlocking your potential with technological driven skills
            </h1>
            <p className="text-xl text-tt-grey mb-6">
                Tektariq helps you develop critical hand on digital skills.
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start  mb-8 gap-5">
                <Button text="Enrol Today" type="solid"
                    icon={<ImagesComponent src={nextIcon} alt="next icon" className="h-5 w-5" />} />
                <Button text="Check our Services" type="outline"/>
            </div>
        </div>
        <div className="relative lg:w-1/2 flex justify-center">
            <div className="absolute hidden lg:block -top-6 left-[100px] w-[310px] h-[305px] bg-tt-primary rounded-hexagon -z-10"></div>
            <ImagesComponent src={heroImage} alt="hero image" className="hidden lg:block h-[350px]" />
            <div className="hidden lg:block">
                <FloatingBox icon={uiUx} text="UI/UX Design" position="top-16 left-14" />
                <FloatingBox icon={cloudIcon} text="Cloud Engineering" position="top-32 right-6" />
                <FloatingBox icon={webIcon} text="Web Development" position="top-56 left-10" />
                <FloatingBox icon={colorPalette} text="Graphics Design" position="top-72 right-14" />
            </div>
        </div>
    </div>
  )
}

export default Hero
