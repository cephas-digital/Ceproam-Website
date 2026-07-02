import { motion } from "motion/react";
import type { ListingCardData } from "../../types/types";

interface ListingCardProps {
  card: ListingCardData;
}

const ListingCard = ({ card }: ListingCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
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
        <h3 className="text-base font-bold text-[#021D49] sm:text-xl lg:text-2xl">
          {card.title}
        </h3>

        <p className="mt-2 text-sm sm:text-base  text-gray-500">
          {card.location}
        </p>

        <div
          className={`mt-5 text-sm sm:text-base  grid gap-4 ${
            card.secondaryValue ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <div>
            <p className="text-xs uppercase text-gray-400">{card.priceLabel}</p>
            <p className="font-bold text-sm sm:text-base  text-[#021D49]">
              {card.priceValue}
            </p>
          </div>

          {card.secondaryValue && (
            <div>
              <p className="text-xs uppercase text-gray-400">
                {card.secondaryLabel}
              </p>
              <p className="font-bold text-sm sm:text-base  text-orange-500">
                {card.secondaryValue}
              </p>
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

        <button className="mt-6 w-full text-sm sm:text-base  rounded-md bg-[#021D49] py-4 font-semibold text-white transition duration-300 hover:bg-[#16356c]">
          {card.buttonText}
        </button>
      </div>
    </motion.article>
  );
};

export default ListingCard;
