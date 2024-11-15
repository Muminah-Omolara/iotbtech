import { MdOutlineChatBubbleOutline, MdOutlineNavigateNext } from "react-icons/md"
import Button from "../components/Button"
import StatCard from "../components/StatCard"
import stats from "../data/stats"



const ProjectStats = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex gap-x-20 gap-y-6 mb-5 flex-wrap items-center justify-center md:gap-x-16 order-10 lg:order-1">
            {stats.map((stat) => (
                <StatCard 
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                />
            ))}
        </div>
        <div className="flex items-center mb-5 justify-center w-full gap-10 order-5 lg:order-1">
            <Button text="Let’s Talk" type="solid" icon={<MdOutlineChatBubbleOutline /> } />
            <div className="lg:hidden">
                <Button text="Let’s Talk" type="outline" icon={<MdOutlineNavigateNext /> } />
            </div>
        </div>
    </div>
  )
}

export default ProjectStats
