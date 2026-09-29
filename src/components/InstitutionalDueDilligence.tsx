import React from "react";

const cards = [
  {
    number: "01",
    title: "100% Unencumbered Titles",
    description:
      "Comprehensive physical and archival searches across Land Registries, checking against master plans and acquisition zones to confirm dispute-free ownership.",
  },
  {
    number: "02",
    title: "Ground-Truth Farm Validation",
    description:
      "Soil composition testing, water table validation, agronomy team vetting, and guaranteed off-take contracts before any agricultural cycle is approved.",
  },
  {
    number: "03",
    title: "Capital Released on Performance",
    description:
      "Capital for development projects on farm cycles is held in regulated escrow and released in phases based on independently audited operational milestones.",
  },
  {
    number: "04",
    title: "Shielded Downside Protection",
    description:
      "Key agricultural ventures are backed by agricultural and weather-index insurance partners to safeguard against climate and biological risks.",
  },
];

const InstitutionalDueDiligence: React.FC = () => {
  const slidingCards = [...cards];

  return (
    <section className="w-full bg-[#f7f7fa] font-Outfit px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <div className="grid gap-8 py-6 md:grid-cols-[1.4fr_1fr] md:py-7">
            <div>
              <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#111827]">
                Trust & Compliance
              </p>

              <h2 className="max-w-xl text-[24px] font-normal leading-[1.15] tracking-[-0.03em] text-[#00193C] md:text-[46px]">
                Institutional Due Diligence
                <br />
                at Every Step
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-[1.55] text-[#172033] md:pt-1 md:text-[16px]">
              We treat real assets with absolute legal scrutiny. Every parcel,
              building, and farm cycle passes strict verification protocols
              before listing.
            </p>
          </div>

          <div className="relative overflow-hidden pb-5">
            <div className="due-diligence-track flex w-max items-stretch">
              {slidingCards.map((card, index) => (
                <article
                  key={`${card.number}-${index}`}
                  className="mr-[7px] flex w-[308px] flex-col rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-4 min-h-[135px] md:min-h-[303px]"
                >
                  <span className="mb-5 text-[12px] font-medium text-[#00193C]">
                    {card.number}
                  </span>

                  <h3 className="mb-3 max-w-[200px] text-base font-medium leading-[1.3] text-[#00193C] md:text-lg">
                    {card.title}
                  </h3>

                  <p className="text-[10px] leading-[1.6] text-[#00193C] md:text-[14px]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalDueDiligence;
