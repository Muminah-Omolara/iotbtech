import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

const ServicesOffer = () => {
  return (
    <div className="mx-auto max-w-5xl p-6 lg:p-0 mt-24">
      <h2 className="text-tt-primary text-lg font-bold mb-0 lg:mb-2">
        The Services we Offer
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="col-span-1 sm:col-span-2">
          <h3 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8 max-w-md">
            We offer a variaty of services to help you to grow and build your
            brand and help you with developing your Products
          </h3>
        </div>
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.body} />
        ))}
      </div>
    </div>
  );
};

export default ServicesOffer;
