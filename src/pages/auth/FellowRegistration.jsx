import CustomInput from "../../components/CustomInput"
import NigeriaStates from "../../components/NigeriaStates"
import SelectOptions from "../../components/SelectOptions"
import cohortList from "../../data/cohortList"
import genderOptions from "../../data/genderOptions"
import stackLists from "../../data/stackLists"
import line from "../../assets/images/line.svg";
import { iotbTech } from "../../assets/images"
import Button from "../../components/Button"

const FellowRegistration = () => {
  return (
    <div className="mx-auto leading-snug max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">
        <img src={line} alt="" className="absolute w-full -left-10 -right-10 -bottom-44 -z-10 hidden md:block" />
        <div className="max-w-2xl mx-auto mb-10 space-y-5 relative z-50">
            <img src={iotbTech} alt="iotb" className="w-96 mx-auto" />
            <div className="text-left lg:text-center">
                <h2 className="text-tt-primary text-2xl font-bold">Register for the next cohort</h2>
                <p className="text-base text-tt-black">
                    Kindly complete this form and proceed to apply for the cohort.
                    We will email your form print-out after submission.
                </p>
            </div>
            <form className="space-y-4">
                <h3 className="text-2xl text-tt-black">Personal Details</h3>
                <CustomInput 
                    type="text"
                    placeholder="Enter your first name"
                    label="First Name"
                    name="first-name"
                />
                <CustomInput 
                    type="text"
                    placeholder="Enter your last name"
                    label="Last Name"
                    name="last-name"
                />
                <CustomInput 
                    type="text"
                    placeholder="Enter your other name"
                    label="Other Name"
                    name="other name"
                />
                <CustomInput 
                    type="email"
                    placeholder="iotbtech@example.com"
                    label="Email"
                    name="email"
                />
                <CustomInput 
                    type="number"
                    placeholder="2349060609721"
                    label="Phone Number"
                    name="Phone Number"
                />
                    <CustomInput 
                    type="number"
                    placeholder="2349060609721"
                    label="Alternate Phone Number"
                    name="Alternate Phone Number"
                />
                <SelectOptions label="Gender" options={genderOptions}/>
                <CustomInput 
                    type="date"
                    placeholder="DD/MM/YYYY"
                    label="Date of Birth"
                    name="Date of Birth"
                />
                <NigeriaStates label="States" />
                <h3 className="text-2xl text-tt-black">Occupations</h3>
                <CustomInput 
                    type="number"
                    placeholder="Enter your answer"
                    name="Years of Experience"
                />
                <CustomInput 
                    type="text"
                    placeholder="Enter your answer"
                    label="Prior Tech Experience"
                    name="Prior Tech Experience"
                />
                <h3 className="text-2xl text-tt-black">Application Details</h3>
                <SelectOptions label="Stack/Programme" options={stackLists} />
                <SelectOptions label="Cohort" options={cohortList} />

                <div className="flex justify-center items-center">
                    <Button text="Submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default FellowRegistration
