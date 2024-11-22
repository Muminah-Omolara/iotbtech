import WorkImages from "../components/WorkImages";
// import { adocImg, bookingImg, delexImg, homeleyImg, webApp } from "../assets/images"
import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import workImages from "../data/workimages";

const WorkRealised = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-tt-primary text-lg font-bold mb-2">
        The work we realised
      </h2>
      <h3 className="text-tt-black text-3xl font-bold mb-8">
        The work we did that made our <br /> Client happy and satisfied
      </h3>

      <div className="flex flex-col lg:flex-row md:flex-row items-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {workImages.slice(0, 4).map((image) => (
            <WorkImages
              key={image.imgText}
              imgSrc={image.imgSrc}
              imgTitle={image.imgTitle}
              imgText={image.imgText}
            />
          ))}
        </div>

        <div>
          {workImages.slice(4).map((image) => (
            <WorkImages
              key={image.imgText}
              imgSrc={image.imgSrc}
              imgTitle={image.imgTitle}
              imgText={image.imgText}
            />
          ))}
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
  );
};

export default WorkRealised;
