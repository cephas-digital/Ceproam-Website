import AgentHero from "../components/AgentHero";
import { FiShield, FiCheckCircle, FiDollarSign, FiHome } from "react-icons/fi";

const InvestmentSponsors = () => {
  return (
    <div>
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
      </main>
    </div>
  );
};

export default InvestmentSponsors;
