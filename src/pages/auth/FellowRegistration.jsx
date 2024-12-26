import CustomInput from "../../components/CustomInput"
import SelectOptions from "../../components/SelectOptions"
import genderOptions from "../../data/genderOptions"
import stackLists from "../../data/stackLists"
import line from "../../assets/images/line.svg";
import { iotbTech } from "../../assets/images"
import Button from "../../components/Button"
import { useState } from "react"
import stateLists from "../../data/StateLists";

const FellowRegistration = () => {
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        otherName: "",
        email: "",
        phoneNumber: "",
        altPhoneNumber: "",
        dob: "",
        yearOfExperience: "",
        priorTechExperience: "",
        cohort: "",
        gender: "Male",
        stateOfOrigin: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Button Clicked", formData)
    }
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
            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl text-tt-black">Personal Details</h3>
                <CustomInput 
                    type="text"
                    placeholder="Enter your first name"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={true}
                />
                <CustomInput 
                    type="text"
                    placeholder="Enter your last name"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required={true}
                />
                <CustomInput 
                    type="text"
                    placeholder="Enter your other name"
                    label="Other Name"
                    name="otherName"
                    value={formData.otherName}
                    onChange={handleInputChange}
                    required={false}
                />
                <CustomInput 
                    type="email"
                    placeholder="iotbtech@example.com"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required={true}
                />
                <CustomInput 
                    type="number"
                    placeholder="2349060609721"
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required={true}
                />
                    <CustomInput 
                    type="number"
                    placeholder="2349060609721"
                    label="Alternate Phone Number"
                    name="altPhoneNumber"
                    value={formData.altPhoneNumber}
                    onChange={handleInputChange}
                    required={false}
                />
                <SelectOptions label="Gender" options={genderOptions} onChange={handleInputChange} name="gender"/>
                <CustomInput 
                    type="date"
                    placeholder="DD/MM/YYYY"
                    label="Date of Birth"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required={false}
                />
                <SelectOptions label="States" options={stateLists} onChange={handleInputChange} name="stateOfOrigin" />
                <h3 className="text-2xl text-tt-black">Occupations</h3>
                <CustomInput 
                    type="text"
                    placeholder="Enter your answer"
                    label="Prior Tech Experience"
                    name="priorTechExperience"
                    value={formData.priorTechExperience}
                    onChange={handleInputChange}
                    required={true}
                />
                <CustomInput 
                    type="number"
                    placeholder="Enter your answer"
                    label="Years of Experience"
                    name="yearOfExperience"
                    value={formData.yearOfExperience}
                    onChange={handleInputChange}
                    required={true}
                />
                <h3 className="text-2xl text-tt-black">Application Details</h3>
                <SelectOptions label="Stack/Programme" options={stackLists} />
                <CustomInput 
                    type="text"
                    placeholder="Cohort"
                    label="Cohort"
                    name="cohort"
                    value={formData.cohort}
                    onChange={handleInputChange}
                    required={true}
                />

                <div className="flex justify-center items-center">
                    <Button text="Submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default FellowRegistration
