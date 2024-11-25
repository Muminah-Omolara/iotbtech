import Process from "../components/Process";
import { proccessNextArrowDown, proccessNextArrowUp } from "../assets/icons";
import processes from "../data/processCards";
import ProcessCard from "../components/ProcessCard";

const OurProcess = () => {
  return (
    <div>
      <div>
        <Process
          title="Our Working Process help you to get the best from our team skill"
          description="We offer a variaty of services to help you to grow and build your brand and help you with developing your Products"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        {/* <div className="flex justify-center items-center -mb-20">
          <img src={proccessNextArrowDown} alt="" className="md:block hidden" />
        </div> */}
        <div className="flex flex-wrap flex-col lg:flex-row md:flex-row gap-3 items-stretch justify-center w-full">
          {processes.map((s, idx) => (
            <div key={s.title} className="relative">
              {idx == 1 && (
                <img
                  src={proccessNextArrowDown}
                  alt="arrowNextDown"
                  className="hidden lg:block absolute left-1/2 -top-16"
                />
              )}

              <ProcessCard
                key={s.title}
                index={s.index}
                title={s.title}
                description={s.description}
              />

              {(idx == 0 || idx == 2) && (
                <img
                  src={proccessNextArrowUp}
                  alt="arrowNextDown"
                  className="hidden lg:block absolute left-1/2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
