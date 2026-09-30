import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import urbanImage from "../assets/images/urbanImage.svg";
import agricultureImage from "../assets/images/agricultural farmland.svg";
import { Link } from "react-router";

interface OpportunityCard {
  tag: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  linkText: string;
}

const opportunities: OpportunityCard[] = [
  {
    tag: "TANGIBLE ASSET PRESERVATION",
    title: "Urban & Commercial Real Estate",
    description:
      "Secure capital against inflation with verified residential, commercial, and strategic land acquisitions across emerging urban corridors.",
    image: urbanImage,
    features: [
      "Property Sales & Direct Acquisition: Freehold residential and commercial parcels with clear title transfers.",
      "Leasing & Rental Management: Guaranteed lease agreements for commercial properties and managed housing.",
      "Strategic Land Banking: High-appreciation greenfield sites primed for infrastructural expansion.",
      "Turnkey Property Development: Full lifecycle project management, from site analysis to build delivery.",
    ],
    linkText: "Browse Real Estate Inventory",
  },
  {
    tag: "SUSTAINABLE PRODUCTION YIELDS",
    title: "Agricultural Projects & Infrastructure",
    description:
      "Direct capital into food security and commodity value chains—from cultivated farmlands to processing facilities and commodity trade.",
    image: agricultureImage,
    features: [
      "Farmland Acquisition & Leasing: High-fertility, surveyed arable land with access to water and transport corridors.",
      "Agricultural Project Syndication: Co-funded mechanized crop, livestock, and tree crop plantations managed by agronomists.",
      "Commodity Aggregation & Trading: Trade-backed by harvest storage, processing hubs, and guaranteed off-takers.",
      "Agro-Processing & Infrastructure: Capital enters cold chains, milling centers, and logistics hubs.",
    ],
    linkText: "Browse Agricultural Projects",
  },
];

const RealEstateAgriculture: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#f5f4f7] font-Outfit px-4 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto pt-8 max-w-7xl">
        <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#00193C] sm:text-[10px]">
          Two High-Growth Sectors. One Unified Platform.
        </p>

        <h1 className="max-w-[700px] text-[20px] font-medium md:leading-[60px] tracking-[-0.035em] text-[#00193C] sm:text-[40px] lg:text-[46px]">
          Unlocking Real Estate & Agricultural Opportunities by Connecting
          People and Assets
        </h1>

        <p className="mt-5 max-w-[650px] text-[11px] leading-[1.65] text-[#273854] sm:text-[12px]">
          A unified marketplace where owners list and manage assets, while
          buyers, renters, and investors discover verified property and
          agricultural opportunities.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.title}
              opportunity={opportunity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface OpportunityCardProps {
  opportunity: OpportunityCard;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[12px] bg-[#00193C]">
      <div className="h-[175px] w-full shrink-0 overflow-hidden sm:h-[280px]">
        <img
          src={opportunity.image}
          alt={opportunity.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
        <div className="mb-3 self-start">
          <span className="inline-flex rounded-full border border-[#d86d16]/40 bg-[#b9510b]/20 px-2.5 py-1 text-[7px] font-medium uppercase tracking-[0.14em] text-[#f47b20]">
            {opportunity.tag}
          </span>
        </div>

        <h2 className="min-h-[2.5rem] text-sm font-semibold leading-tight text-white sm:min-h-[3.5rem] sm:text-[14px]">
          {opportunity.title}
        </h2>

        <p className="mt-3 text-xs leading-relaxed text-white sm:text-[14px]">
          {opportunity.description}
        </p>

        <ul className="mt-4 space-y-3">
          {opportunity.features.map((feature) => {
            const [heading, ...rest] = feature.split(":");

            return (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs leading-relaxed text-white sm:text-[12px]"
              >
                <FiCheckCircle
                  className="mt-1 shrink-0 text-[#f26b16]"
                  size={12}
                />

                <span className="min-w-0">
                  <span className="font-medium text-white">{heading}:</span>{" "}
                  {rest.join(":")}
                </span>
              </li>
            );
          })}
        </ul>

        <Link
          className="mt-auto pt-6 inline-flex w-fit items-center gap-2 text-[14px] font-medium text-[#FF6000] transition-all duration-200 hover:gap-3 hover:text-[#ff984d]"
          to="/home"
        >
          {opportunity.linkText}
          <FiArrowRight size={11} />
        </Link>
      </div>
    </article>
  );
};

export default RealEstateAgriculture;
