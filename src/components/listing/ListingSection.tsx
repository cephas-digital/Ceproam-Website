import { useMemo, useState } from "react";
import { motion } from "motion/react";
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

  const visibleCards = useMemo(() => {
    if (activeTab === 0) return cards;

    const selectedLabel = tabs[activeTab]?.label?.toLowerCase();
    if (!selectedLabel) return cards;

    return cards.filter((card) => {
      const cardCategory = card.category?.toLowerCase();
      return cardCategory === selectedLabel;
    });
  }, [activeTab, cards, tabs]);

  return (
    <section className="mx-auto px-4 py-10 sm:px-6 sm:py-14 md:px-14 md:py-16 lg:px-28 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h2 className="text-2xl font-semibold text-[#00193C] sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-2xl text-sm sm:text-base  text-gray-500">
            {subtitle}
          </p>
        </div>

        {ctaText && (
          <button className="inline-flex items-center text-sm sm:text-base  justify-center gap-2 rounded-full px-4 py-2 text-[#021D49] transition md:hover:bg-[#f8f8f9]">
            {ctaText}
          </button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mt-8 sm:mt-10"
      >
        <FilterTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3"
      >
        {visibleCards.length > 0 ? (
          visibleCards.map((card) => (
            <ListingCard
              key={card.id}
              card={card}
            />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center text-sm text-gray-600 sm:text-base">
            No listings match this category yet.
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ListingSection;
