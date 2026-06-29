import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import type { ListingCardData } from "../../types/types";
import { Link } from "react-router";

interface ListingTileProps {
  card: ListingCardData;
}

const ListingTile = ({ card }: ListingTileProps) => {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {card.badgeRight && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg">
            {card.badgeRight}
          </span>
        )}

        {card.secondaryValue && (
          <span className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700 shadow-lg">
            {card.secondaryValue}
          </span>
        )}
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              {card.title}
            </h3>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>{card.location}</span>
            </div>
          </div>
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800">
            <FaArrowRight />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {card.priceLabel}
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              {card.priceValue}
            </p>
          </div>
          {card.secondaryLabel && (
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {card.secondaryLabel}
              </p>
              <p className="mt-2 text-xl font-semibold text-orange-500">
                {card.secondaryValue}
              </p>
            </div>
          )}
        </div>

        {card.progress !== undefined && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>{card.progressLeftText}</span>
              <span>{card.progress}% Funded</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-orange-500 transition-all duration-500"
                style={{ width: `${card.progress}%` }}
              />
            </div>
            <p className="text-sm text-slate-500">{card.progressRightText}</p>
          </div>
        )}

        <Link
          to={`/listing/${card.id}`}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
        >
          {card.buttonText}
        </Link>
      </div>
    </article>
  );
};

export default ListingTile;
