import { useState } from "react";
import { Link } from "react-router";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Slideone from "../assets/images/slide-one.svg";
import Slidetwo from "../assets/images/slide-two.svg";
import Slidethree from "../assets/images/slide-three.svg";

type TabKey = "propertyAgents" | "investmentSponsors" | "buyersInvestors";

interface TabContent {
  label: string;
  path: string;
  quote: string;
  features: {
    title: string;
    description: string;
  }[];
  button: string;
  footnote: string;
  image: string;
}

const tabContent: Record<TabKey, TabContent> = {
  propertyAgents: {
    label: "Property Agents",
    path: "/property-agents",

    quote:
      '"Expand your reach, eliminate commission disputes, and close faster with verified listings."',

    features: [
      {
        title: "Verified Listing Status",
        description:
          "Receive an official CEPROMAS Verification Badge once your title documents clear our legal screening, boosting buyer trust by 3x.",
      },
      {
        title: "Automated Escrow Closing",
        description:
          "Never chase commissions again. Transaction fees and payouts are handled securely through digital escrow contracts.",
      },
      {
        title: "Centralized Lead Pipeline",
        description:
          "Manage tenant screening, viewing schedules, and buyer inquiries directly from one dashboard.",
      },
    ],

    button: "View Details",

    footnote:
      "No upfront listing fees. Verification completed within 48 hours.",

    image: Slideone,
  },

  investmentSponsors: {
    label: "Investment Sponsors",
    path: "/investment-sponsors",

    quote:
      "Raise syndicated capital and manage project milestones with full investor confidence.",

    features: [
      {
        title: "Institutional Due Diligence",
        description:
          "Package your real estate developments or agricultural cycles with compliant legal, financial, and agronomic frameworks.",
      },
      {
        title: "Automated Investor Updates & Reporting",
        description:
          "Disburse milestone reports, farm activity logs, drone footage, and financial audits directly to your backers.",
      },
      {
        title: "Automated Yield Distribution",
        description:
          "Pay out dividends, rental incomes, or commodity returns systematically upon project maturity.",
      },
    ],

    button: "Explore Sponsorship",

    footnote:
      "Requires verifiable operational history and asset ownership documentation.",

    image: Slidetwo,
  },

  buyersInvestors: {
    label: "Buyers & Investors",
    path: "/buyers-investors",

    quote:
      '""Own tangible land, buy verified properties, and co-invest in high-yield agribusiness.""',

    features: [
      {
        title: "De-Risked Asset Selection",
        description:
          "Every asset undergoes a 7-stage title and ground-truth verification before hitting your feed.",
      },
      {
        title: "Digital Document Safe",
        description:
          "Access and store your signed Deeds of Assignment, Survey Plans, and Certificates of Ownership online.",
      },
      {
        title: "Yield & Valuation Tracker",
        description:
          "Monitor land capital appreciation and agricultural cycle payouts in real time from your private investor portal.",
      },
    ],

    button: "Explore Opportunities",

    footnote:
      "Minimum allocations starting from ₦20,000 for syndicated agro-projects.",

    image: Slidethree,
  },
};

const tabs: { key: TabKey; label: string }[] = [
  {
    key: "propertyAgents",
    label: "Property Agents",
  },
  {
    key: "investmentSponsors",
    label: "Investment Sponsors",
  },
  {
    key: "buyersInvestors",
    label: "Buyers & Investors",
  },
];

export default function MarketParticipants() {
  const [activeTab, setActiveTab] = useState<TabKey>("propertyAgents");

  const content = tabContent[activeTab];

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-tr from-[#00193C] to-[#0044A2] px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[8px] font-medium uppercase tracking-[0.22em] text-[#FF6000] sm:text-[12px]">
          Custom Workflows
        </p>

        <h2 className="max-w-[700px] text-[30px] font-light leading-[1.15] tracking-[-0.035em] text-[#E8E2D4] sm:text-[38px] lg:text-[42px]">
          A Purpose-Built Ecosystem for All Market Participants
        </h2>

        <p className="mt-4 max-w-[570px] font-Outfit text-[9px] leading-[1.6] text-[#E8E2D4] sm:text-[14px]">
          Choose your role to see how CEPROMAS optimizes your transactions,
          security, and project tracking.
        </p>

        <div className="mt-8 inline-flex font-Outfit overflow-hidden rounded-[5px] bg-[#0c3a79]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-[8px] font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                  isActive
                    ? "bg-[#FF6000] text-white"
                    : "text-white/80 hover:bg-[#124585] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid items-center font-Outfit gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div
            key={activeTab}
            className="animate-[fadeIn_0.4s_ease-out]"
          >
            <p className="max-w-[410px] text-[12px] font-light leading-[1.65] text-white sm:text-[13px]">
              {content.quote}
            </p>

            <div className="mt-6 font-Outfit space-y-4">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3"
                >
                  <FiCheckCircle
                    size={12}
                    className="mt-[2px] shrink-0 text-[#ff6712]"
                  />

                  <div>
                    <h3 className="text-xs font-semibold text-white sm:text-[14px]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 max-w-[400px] text-xs leading-relaxed text-white/80 sm:text-[14px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to={content.path}
              className="mt-6 inline-flex items-center gap-3 rounded-[3px] bg-[#FF6000] px-4 py-2.5 text-[8px] md:text-sm font-medium text-white transition-all duration-200 hover:bg-[#FF7B32]"
            >
              {content.button}

              <FiArrowRight size={11} />
            </Link>

            <p className="mt-3 text-[7px] md:text-xs text-white/45">
              {content.footnote}
            </p>
          </div>

          <div
            key={`${activeTab}-image`}
            className="overflow-hidden rounded-[6px] animate-[fadeIn_0.5s_ease-out]"
          >
            <img
              src={content.image}
              alt={content.label}
              className="h-[245px] w-full object-cover transition-all duration-500 sm:h-[290px] lg:h-[443px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
