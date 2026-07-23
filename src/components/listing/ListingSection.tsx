import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import FilterTabs from "./Filtertab";
import ListingCard from "./ListingCard";
import type { ListingSectionProps } from "../../types/types";

interface ExtendedListingSectionProps extends ListingSectionProps {
  loading?: boolean;
}

const ListingSection: React.FC<ExtendedListingSectionProps> = ({
  title,
  subtitle,
  ctaText,
  tabs = [],
  cards = [], // 👈 Default to an empty array to prevent undefined errors
  loading = false,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const visibleCards = useMemo(() => {
    const safeCards = cards || [];
    if (activeTab === 0) return safeCards;

    const rawTabLabel = tabs[activeTab]?.label?.toLowerCase() || "";
    const normalizedTab = rawTabLabel.trim().replace(/\s+/g, "_");

    return safeCards.filter((card) => {
      if (!card?.category) return false;
      const cardCategory = card.category.toLowerCase();

      // Check if card category contains tab label
      return (
        cardCategory.includes(rawTabLabel) ||
        cardCategory.includes(normalizedTab)
      );
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

          <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-500">
            {subtitle}
          </p>
        </div>

        {ctaText && (
          <div className="inline-flex items-center text-sm sm:text-base justify-center gap-2 rounded-full px-4 py-2 text-[#021D49] transition md:hover:bg-[#f8f8f9]">
            {ctaText}
          </div>
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
        {loading ? (
          // Skeleton loaders during API fetch
          [1, 2, 3].map((index) => (
            <div
              key={index}
              className="h-[430px] w-full animate-pulse rounded-2xl bg-gray-100"
            />
          ))
        ) : (visibleCards?.length ?? 0) > 0 ? (
          visibleCards.map((card) => <ListingCard key={card.id} card={card} />)
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
