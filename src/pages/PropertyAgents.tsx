import AgentHero from "../components/AgentHero";
import AdvantageSection from "../components/AdvantageSection";

const PropertyAgents = () => {
  const advantages = [
    {
      icon: "🏅",
      title: "CEPROMAS Verification Badge",
      description:
        "Once your title documents clear our 7-stage legal screening, you receive an official Verification Badge displayed on every listing. Buyers and tenants trust verified agents 3× more — fewer objections, faster closes.",
    },

    {
      icon: "💼",
      title: "Automated Escrow Closing",
      description:
        "Commission disputes are eliminated by design. Transaction fees and agent payouts are encoded into digital escrow contracts and released automatically at deal completion — no chasing, no delays.",
    },

    {
      icon: "📋",
      title: "Centralized Lead Pipeline",
      description:
        "Manage every inquiry, viewing schedule, tenant screening, and buyer follow-up from one dashboard. Automated reminders and status tracking keep deals from going cold.",
    },

    {
      icon: "📣",
      title: "Premium Listing Exposure",
      description:
        "Verified listings are featured at the top of search results and promoted across CEPROMAS digital channels, giving your properties institutional-grade visibility to qualified buyers.",
    },

    {
      icon: "📄",
      title: "Digital Document Management",
      description:
        "Upload, store, and share survey plans, deeds of assignment, and statutory documents securely. Buyers access them instantly — reducing back-and-forth and accelerating due diligence.",
    },

    {
      icon: "📊",
      title: "Performance Analytics Dashboard",
      description:
        "Track listing views, inquiry conversion rates, time-to-close, and commission earnings in real time. Use the data to refine your portfolio strategy and identify high-demand locations.",
    },
  ];
  return (
    <div className=" font-Outfit">
      <main>
        <AgentHero
          eyebrow="FOR PROPERTY AGENTS & BROKERS"
          title={
            <>
              Close Faster. Earn More. <span>Without the Friction.</span>
            </>
          }
          description="CEPROAM gives property owners/agents a verified marketplace, automated commission handling, and a centralized pipeline so you spend less time on paperwork and more time closing."
          buttonText="Register as a Realtor"
          note="No upfront listing fees · Verified within 48 hours"
        />

        <AdvantageSection
          eyebrow="WHAT YOU GET"
          title="Every Advantage You Need to Win More Business"
          description="A platform built around how agents actually work not how institutions imagine they do."
          advantages={advantages}
        />
      </main>
    </div>
  );
};

export default PropertyAgents;
