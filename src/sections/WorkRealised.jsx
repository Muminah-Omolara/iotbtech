import WorkImages from "../components/WorkImages"
import { adocImg, bookingImg, delexImg, homeleyImg, webApp } from "../assets/images"
import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";

const WorkRealised = () => {
  return (
    <div className="mx-auto max-w-5xl p-6 lg:p-0 mt-24">
        <h2 className="text-tt-primary text-lg font-bold mb-2">The work we realised</h2>
        <h3 className="text-tt-black text-3xl font-bold mb-8">
            The work we did that made our <br /> Client happy and satisfied
        </h3>

        <div className="flex flex-col lg:flex-row md:flex-row items-center gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <WorkImages imgSrc={delexImg} imgTitle="UI/UX" imgText="Delix Relay" />
                <WorkImages imgSrc={webApp} imgTitle="Web App Development" imgText="Cookie" />
                <WorkImages imgSrc={bookingImg} imgTitle="UI/UX Design" imgText="Booking.com" />
                <WorkImages imgSrc={homeleyImg} imgTitle="UI/UX Design" imgText="Homley" />
            </div>
            <div>
                <WorkImages imgSrc={adocImg} imgTitle="UI/UX Design" imgText="ADOC" />
            </div>
        </div>
        <div className="flex items-center justify-center mt-12 mb-10">
            <Button
                type="outline"
                text="Explore More Projects"
                icon={<MdOutlineNavigateNext />}
            />
        </div>
    </div>
  )
}

export default WorkRealised
