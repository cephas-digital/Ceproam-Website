import { HiArrowLeft } from "react-icons/hi";
import PropertyCard from "./PropertyCard";
import StatsCard from "./StatsCard";
import { properties } from "../../data/data";

export default function SearchResults() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <button className="mb-8 flex items-center gap-2 font-semibold text-[#0E2248]">
            <HiArrowLeft />
            Back to Home
          </button>

          <h1 className="text-5xl font-extrabold text-[#0E2248]">
            Results for <span className="text-orange-500">"Properties"</span>
          </h1>
        </div>

        <StatsCard
          investors="12,450+"
          roi="₦2.4B+"
        />
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}
