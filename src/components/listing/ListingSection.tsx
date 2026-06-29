import { useState } from "react";
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

  return (
    <section className=" px-6 md:py-20 py-4  lg:px-28 md:px-14 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h2 className="lg:text-4xl md:text-3xl text-xl font-semibold text-[#00193C]">
            {title}
          </h2>

          <p className="mt-3 text-lg max-w-2xl text-gray-500">{subtitle}</p>
        </div>

        {ctaText && (
          <button className="inline-flex items-center gap-2 rounded-full  px-4 py-2 text-[#021D49] transition hover:bg-[#f8f8f9]">
            {ctaText}
          </button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mt-10"
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
        className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {cards.map((card) => (
          <ListingCard
            key={card.id}
            card={card}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ListingSection;
