import ServiceCard from "../components/HomeServiceCard";
import services from "../data/services";

const ServicesOffer = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-tt-primary mb-0 lg:mb-3 text-xl md:text-2xl lg:text-3xl font-bold">
        The Services we Offer
      </h2>
      <div className="col-span-1 lg:col-span-2">
        <h3 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8 max-w-screen-lg">
          We offer a variaty of services to help you to grow and build your
          brand and help you with developing your Products
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
        {services.map((s) => (
          <ServiceCard key={s.id} title={s.title} description={s.body} />
        ))}
      </div>
    </div>
  );
};

export default ServicesOffer;
