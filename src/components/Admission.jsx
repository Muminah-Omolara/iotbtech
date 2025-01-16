
import Button from './Button'


const Admission = ({title, desc,img}) => {
  return (
    <div className=" lg:py-12 lg:px-10  px-4 py-12">
        <div className="flex flex-row lg:justify-center lg:items-center lg:gap-12">
        <div className="gap-2">
              <img src={img} alt="" className="rounded hidden md:block"/>
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-3xl font-bold pb-6 mt-10 ">{title}</h1>
                <p className="pb-4 text-gray-600">{desc}</p>
                <Button text="Apply Now"/>
            </div>
            
        </div>
        {/* <div>
            <div>
                <ul className="flex flex-row gap-20 text-xl pl-10 bg-tt-primary text-tt-white">
                    <li>First Month</li>
                    <li>Second Month</li>
                    <li>Third Month</li>
                    <li>Fourth Month</li>
                    <li>Fifth Month</li>
                    <li>Six Month</li>
                </ul>
            </div>

            <div className="flex flex-row justify-center gap-4">

            <div className="flex flex-col">
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                <h1 className="text-tt-black font-semibold">First Webinar, first week.</h1>
                <p className="text-tt-black">Welcome meeting, to welcome fellows and introduce them to their mentors</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>First class, Saturdays and Sundays</h1>
                    <p>Introduction to the course and fellows</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>Stand-Up Meetings, Wednesdays</h1>
                    <p>Brief discussions on the weeks progress </p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                <h1 className="text-tt-black font-semibold">First Webinar, first week.</h1>
                <p className="text-tt-black">Welcome meeting, to welcome fellows and introduce them to their mentors</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>First class, Saturdays and Sundays</h1>
                    <p>Introduction to the course and fellows</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>Stand-Up Meetings, Wednesdays</h1>
                    <p>Brief discussions on the weeks progress </p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                <h1 className="text-tt-black font-semibold">First Webinar, first week.</h1>
                <p className="text-tt-black">Welcome meeting, to welcome fellows and introduce them to their mentors</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>First class, Saturdays and Sundays</h1>
                    <p>Introduction to the course and fellows</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>Stand-Up Meetings, Wednesdays</h1>
                    <p>Brief discussions on the weeks progress </p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                <h1 className="text-tt-black font-semibold">First Webinar, first week.</h1>
                <p className="text-tt-black">Welcome meeting, to welcome fellows and introduce them to their mentors</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>First class, Saturdays and Sundays</h1>
                    <p>Introduction to the course and fellows</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>Stand-Up Meetings, Wednesdays</h1>
                    <p>Brief discussions on the weeks progress </p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                <h1 className="text-tt-black font-semibold">First Webinar, first week.</h1>
                <p className="text-tt-black">Welcome meeting, to welcome fellows and introduce them to their mentors</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>First class, Saturdays and Sundays</h1>
                    <p>Introduction to the course and fellows</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>Stand-Up Meetings, Wednesdays</h1>
                    <p>Brief discussions on the weeks progress </p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                <h1 className="text-tt-black font-semibold">First Webinar, first week.</h1>
                <p className="text-tt-black">Welcome meeting, to welcome fellows and introduce them to their mentors</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>First class, Saturdays and Sundays</h1>
                    <p>Introduction to the course and fellows</p>
                </div>
                <div className="flex flex-col w-48 mt-10 bg-tt-grey">
                    <h1>Stand-Up Meetings, Wednesdays</h1>
                    <p>Brief discussions on the weeks progress </p>
                </div>
            </div>

            </div>
        </div> */}
    </div>
  )
}

export default Admission