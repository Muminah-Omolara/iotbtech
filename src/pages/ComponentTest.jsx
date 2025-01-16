import Admission from "../components/Admission";
// import Button from "../components/Button";
// import { MdOutlineNavigateNext } from "react-icons/md";
import Testimonials from "../sections/Testimonials";
import ProgramBenefit from "../components/ProgramBenefit";

import Timelines from "../sections/Timelines"
import AdmissionHero from "../sections/AdmissionHero";
import Program from "../sections/Program";


const ComponentTest = () => {
  return (
    <div>
      {/* <h1>Test your components on this page</h1>
      <div>
        <h2>Buttons</h2>
        <div>
          <Button
            type="outline"
            text="Learn More"
            icon={<MdOutlineNavigateNext />}
          />
          <Button
            type="solid"
            text="Learn More"
            icon={<MdOutlineNavigateNext />}
          />
        </div>
      </div> */}
      <AdmissionHero />
      <Timelines />
      <Program />
      <Testimonials />
    </div>
  );
};

export default ComponentTest;
