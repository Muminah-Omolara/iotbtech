import Button from "../components/Button"
import ImagesComponent from "../components/ImagesComponent"
import FloatingBox from "../components/FloatingBox"
import { cloudIcon, colorPalette, nextIcon, uiUx, webIcon } from "../assets/icons"
import { introBg} from "../assets/images"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 bg-white max-w-6xl mx-auto mt-10">
        <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8">
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
            <ImagesComponent src={introBg} alt="introBg" className="hidden lg:flex hexagon-shape rounded-lg shadow-lg h-[350px]" />
            <FloatingBox icon={uiUx} text="UI/UX Design" position="top-10 -left-10" />
            <FloatingBox icon={cloudIcon} text="Cloud Engineering" position="top-20 -right-6" />
            <FloatingBox icon={webIcon} text="Web Development" position="top-52 -left-2" />
            <FloatingBox icon={colorPalette} text="Graphics Design" position="top-64 -right-6" />
        </div>
    </div>
  )
}

export default Hero
