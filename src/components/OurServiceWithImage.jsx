import {titik} from "../assets/icons";

const OurServiceWithImage = ({title, description, img}) => {
    return (
        <div
            className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-64 "
        >
            <div className="flex flex-col space-y-6">
                <h2 className="text-tt-primary lg:text-left text-left text-xl md:text-2xl lg:text-3xl font-bold">
                    Our Services
                </h2>
                <div className="">
                <h1 className="text-tt-black font-bold text-4xl">{title}</h1>
                <p className="text-tt-grey text-lg max-w-3xl lg:mt-4">{description}</p>

                </div>
                
            </div>
            <div className="relative lg:w-1/2 mt-12 ">
                <img src={img} alt="the things we do" className="object-contain" width={300} height={350}/>
                <img
                    src={titik}
                    alt="pattern"
                    className="absolute hidden lg:w-48 lg:h-48 lg:block -top-3 left-52 -z-10 "
                />
            </div>
        </div>
    );
};

export default OurServiceWithImage;
