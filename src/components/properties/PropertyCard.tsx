import { HiArrowRight } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import type { Property } from "../../types/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#C4C6D1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-48 w-full object-cover sm:h-56 md:h-60"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-4 py-1 text-xs font-semibold text-white ${property.badgeColor}`}
        >
          {property.badge}
        </span>

        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 font-semibold">
          <BsGraphUpArrow className="text-orange-500" />
          {property.roi} ROI
        </div>
      </div>

      <div className="space-y-5 p-4 sm:p-6">
        <div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-[#00193C] md:text-2xl">
              {property.title}
            </h3>

            <span className="flex items-center gap-1 text-sm text-[#4A5568]">
              <IoLocationOutline />
              {property.location}
            </span>
          </div>

          <p className="mt-3 text-[#4A5568] font-normal text-sm md:text-base">
            {property.description}
          </p>
        </div>

        <div className="border-t border-[#C4C6D1] pt-5">
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-gray-500">{property.leftLabel}</p>

              <p className="font-bold">{property.leftValue}</p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">{property.rightLabel}</p>

              <p className="font-bold">{property.rightValue}</p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-[#C4C6D1] pt-5">
          <div>
            <p className="text-xs text-gray-500">{property.priceLabel}</p>

            <p className="text-3xl font-bold text-[#00193C] md:text-2xl">
              {property.price}
            </p>
          </div>

          <button className="rounded-xl bg-[#00193C] p-3 text-white transition hover:bg-[#132e5f] w-auto md:w-auto">
            <HiArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
