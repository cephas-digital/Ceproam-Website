import AdvantageSection from "../components/AdvantageSection";
import AgentHero from "../components/AgentHero";
import { FiShield, FiCheckCircle, FiDollarSign, FiHome } from "react-icons/fi";

const InvestmentSponsors = () => {
  const advantages = [
    {
      icon: "🏗️",
      title: "Institutional Due Diligence Framework",
      description:
        "Package your real estate developments or agricultural cycles with CEPROMAS-compliant legal, financial, and agronomic documentation. Investors see a credible, structured proposal — not a raw pitch deck.",
    },

    {
      icon: "📡",
      title: "Automated Investor Reporting",
      description:
        "Disburse milestone reports, farm activity logs, drone footage, and financial audits directly to your investor base on a schedule. Transparency builds trust and reduces inbound queries.",
    },

    {
      icon: "💸",
      title: "Automated Yield Distribution",
      description:
        "Dividends, rental income, and commodity returns are distributed systematically at project maturity. No manual wire transfers, no disputes — just automated, verifiable payouts.",
    },

    {
      icon: "🧾",
      title: "Compliant Capital Raising",
      description:
        "Raise syndicated capital through CEPROMAS's regulated framework, ensuring your investment offering meets legal disclosure standards and investor protection requirements.",
    },

    {
      icon: "🔒",
      title: "Milestone-Gated Escrow",
      description:
        "Investor capital is held in regulated escrow and released phase by phase against independently audited operational milestones — protecting both sides and enforcing project discipline.",
    },

    {
      icon: "📈",
      title: "Investor Relationship Dashboard",
      description:
        "Track capital allocations, investor commitments, reporting history, and payout schedules from one unified dashboard. Keep every stakeholder informed without manual updates.",
    },
  ];
  return (
    <div className=" font-Outfit">
      <main>
        <AgentHero
          eyebrow="BUILT FOR PROPERTY PROFESSIONALS"
          title={
            <>
              Manage More Deals. <span>Close With Confidence.</span>
            </>
          }
          description="Everything you need to manage verified properties, clients, commissions, and transactions from one centralized platform."
          buttonText="Join the Platform"
          note="Simple onboarding · Secure transactions"
          stats={[
            {
              value: "100%",
              label: "Verified property listings",
              icon: FiShield,
            },
            {
              value: "24/7",
              label: "Access to your property pipeline",
              icon: FiCheckCircle,
            },
            {
              value: "0%",
              label: "Hidden transaction charges",
              icon: FiDollarSign,
            },
            {
              value: "1",
              label: "Centralized property workspace",
              icon: FiHome,
            },
          ]}
        />

        <AdvantageSection
          eyebrow="WHAT YOU GET"
          title="The Infrastructure to Raise, Execute, and Deliver"
          description="Everything a credible project sponsor needs from due diligence packaging to automated investor distribution."
          advantages={advantages}
        />
      </main>
    </div>
  );
};

export default InvestmentSponsors;
