import type { ListingCardData } from "../../types/types";

interface ListingCardProps {
  card: ListingCardData;
}

const ListingCard = ({ card }: ListingCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200">
      <div className="relative h-56 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
        />

        {card.badgeLeft && (
          <span className="absolute left-3 top-3 rounded bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">
            {card.badgeLeft}
          </span>
        )}

        {card.badgeRight && (
          <span className="absolute right-3 top-3 rounded bg-[#021D49] px-2 py-1 text-[10px] font-semibold text-white">
            {card.badgeRight}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="lg:text-2xl md:text-2xl text-lg font-bold text-[#021D49]">
          {card.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{card.location}</p>

        <div
          className={`mt-5 grid gap-4 ${
            card.secondaryValue ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <div>
            <p className="text-xs uppercase text-gray-400">{card.priceLabel}</p>
            <p className="font-bold text-[#021D49]">{card.priceValue}</p>
          </div>

          {card.secondaryValue && (
            <div>
              <p className="text-xs uppercase text-gray-400">
                {card.secondaryLabel}
              </p>
              <p className="font-bold text-orange-500">{card.secondaryValue}</p>
            </div>
          )}
        </div>

         {card.progress !== undefined && (
          <>
            <div className="mt-6 h-2 rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{ width: `${card.progress}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>{card.progressLeftText}</span>
              <span>{card.progressRightText}</span>
            </div>
          </>
        )}

        <button className="mt-6 w-full rounded-md bg-[#021D49] py-4 font-semibold text-white transition duration-300 hover:bg-[#16356c]">
          {card.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
