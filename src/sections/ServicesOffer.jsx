import ServiceCard from "../components/ServiceCard"

const ServicesOffer = () => {
  return (
    <div className="mx-auto max-w-5xl p-6 lg:p-0 mt-24">
        <h2 className="text-tt-primary text-lg font-bold mb-0 lg:mb-2">The Services we Offer </h2>
        <div className="flex flex-col lg:flex-row md:flex-row gap-[72px]">
            <h3 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8 max-w-md">
                We offer a variaty of services to help you to grow and build 
                your brand and help you with developing your Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <ServiceCard title="UI/UX Design ,Web Design"
                    description="Makeing your product clean and easy to use it the important thing for us" 
                />
                <ServiceCard title="Web/App Development" 
                    description="Our Team will use the top  technologies to develope your product"
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <ServiceCard title="Marketing Digital,Social Media"
                description="Grow your communty with our inbound marketing and social media merketing"
             />
             <ServiceCard title="Brand Stratgey &Art Diraction"
                description="Help you to create an unique brand that stay in Clients Head"
             />
             <ServiceCard title="Visual Identity Logo Brand"
                description="A logo Can make a big diffrance our team will Help you with that"
             />
             <ServiceCard title="Video / Ads Production"
                description="What better way to reach user then with a good video to win their trust"
             />
        </div>
    </div>
  )
}

export default ServicesOffer
