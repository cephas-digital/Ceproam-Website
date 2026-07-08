import { HiArrowRight } from "react-icons/hi";
import PropertyCard from "../components/properties/PropertyCard";
import StatsCard from "../components/properties/StatsCard";
import Footer from "../components/shared/Footer";
import { properties } from "../data/data";
import { Link } from "react-router";

const Properties = () => {
  return (
    <div className="font-Outfit">
      <section className="mx-auto lg:px-24 px-4 sm:px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link to="/">
              <button className="mb-8 flex items-center gap-2 font-bold text-[#00193C]">
                Back to Home
                <HiArrowRight />
              </button>
            </Link>

            <h1 className="text-5xl font-extrabold text-[#0E2248]">
              Results for <span className="text-[#FF5500]">"Properties"</span>
            </h1>
          </div>

          <StatsCard
            investors="12,450+"
            roi="₦2.4B+"
          />
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Properties;
