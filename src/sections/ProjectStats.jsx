import { MdOutlineChatBubbleOutline } from "react-icons/md"
import Button from "../components/Button"
import StatCard from "../components/StatCard"
import stats from "../data/stats"



const ProjectStats = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 max-w-5xl mx-auto">
        {/* flex gap-x-20 gap-y-6 mb-5 md:flex-col flex-wrap items-center justify-between px-10 md:gap-x-16 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-5 gap-x-32 lg:gap-x-20 gap-y-8 order-10 lg:order-1">
            {stats.map((stat) => (
                <StatCard 
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                />
            ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center mb-5 w-full lg:w-auto px-5 justify-center gap-3 order-5 lg:order-1">
            <Button text="Let’s Talk" type="solid" icon={<MdOutlineChatBubbleOutline /> } />
            <div className="lg:hidden w-full lg:w-auto">
                <Button text="Check our services" type="outline" />
            </div>
        </div>
    </div>
  )
}

export default ProjectStats
