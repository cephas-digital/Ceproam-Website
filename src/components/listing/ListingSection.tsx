import { useState } from "react";
import FilterTabs from "./Filtertab";
import ListingCard from "./ListingCard";
import type { ListingSectionProps } from "../../types/types";

const ListingSection = ({
  title,
  subtitle,
  ctaText,
  tabs,
  cards,
}: ListingSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" px-6 py-20 md:px-16">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-bold text-[#021D49]">{title}</h2>

          <p className="mt-3 max-w-2xl text-gray-500">{subtitle}</p>
        </div>

        {ctaText && (
          <button className="font-semibold text-[#021D49]">{ctaText}</button>
        )}
      </div>

      <div className="mt-10">
        <FilterTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <ListingCard
            key={card.id}
            card={card}
          />
        ))}
      </div>
    </section>
  );
};

export default ListingSection;
