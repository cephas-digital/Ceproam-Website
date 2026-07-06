import type { ServiceItem } from "../components/about/CoreServiceSection";
import Property from "../assets/images/property.svg";
import Industry from "../assets/images/industry.svg";
import Vetted from "../assets/icons/vetted.png";
import Transparent from "../assets/icons/transparent.png";
import Community from "../assets/icons/community.png";

export const realEstateService: ServiceItem = {
  id: 1,
  category: "Real Estate Solutions",

  title: "Property Sales, Leasing & Land Banking",
  description:
    "We identify high-growth corridors in Lagos and across Nigeria before they peak. Our members benefit from off-market land banking opportunities and premium residential leasing portfolios managed by our internal property desk.",

  image: Property,

  features: [
    "Strategic Acquisition Analytics",
    "Comprehensive Legal Due Diligence",
    "Managed Leasing Programs",
  ],
};

export const agroManagementService: ServiceItem = {
  id: 2,
  category: "Agro-Management",
  title: "Industrial Scale Farm Management",

  description:
    "Our Cashew Farm Estate and Lagos Housing programs aren't just plots on a map; they are active, revenue-generating ecosystems. We handle the planting, harvesting, and international logistics, while you receive the dividends.",

  image: Industry,

  features: [],

  quote:
    "Our mission is to turn the soil beneath your feet into a resilient financial fortress.",

  imagePosition: "right",
};

export const whyInvestWithUs = [
  {
    title: "Vetted Assets",
    description:
      "Every asset undergoes rigorous legal and physical due diligence before listing.",
    image: Vetted,
  },
  {
    title: "Community Led",
    description:
      "Owned and governed by members, ensuring your interests always come first.",
    image: Community,
  },

  {
    title: "Transparent Tracking",
    description:
      "Real-time reporting and physical visitations scheduled for all investors.",
    image: Transparent,
  },

  // {
  //   title: "Secure",
  //   description:
  //     "Cooperative structure ensures investor protection and collective bargaining power.",
  //   image: Transparent,
  // },
];
