import type { ServiceItem } from "../components/about/CoreServiceSection";
import Property from "../assets/images/property.svg";
import Industry from "../assets/images/industry.svg";
import Vetted from "../assets/icons/vetted.png";
import Transparent from "../assets/icons/transparent.png";
import Community from "../assets/icons/community.png";
import type { Insight } from "../types/types";

import featured from "../assets/images/featured.svg";
import realEstate from "../assets/images/real-estate.svg";
import finance from "../assets/images/finance.svg";
import farmland from "../assets/images/farmaland.svg";
import resort from "../assets/images/resort.svg";

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

export const Filtertabs: Array<{ label: string }> = [
  {
    label: "All Articles",
    // icon: MdGridView,
  },
  {
    label: "Real Estate",
    // icon: FaHome,
  },
  {
    label: "Agribusiness News",
    // icon: FaBuilding,
  },
  {
    label: "Land Banking",
  },
  {
    label: "Property Management",
  },
];

export const insights: Insight[] = [
  {
    id: 1,
    title: "Why Agribusiness is the Next Frontier for Savvy Investors",
    description:
      "Traditional stocks are volatile. Discover how agricultural land provides a hedge against inflation while generating consistent quarterly returns.",
    image: featured,
    category: "FEATURED INSIGHT",
    readTime: "8 min read",
    author: "Olufunso Akinsanya",
    date: "Mar 16, 2024",
    featured: true,
  },

  {
    id: 2,
    title: "Navigating Lagos Real Estate in 2024",
    description:
      "The current landscape of property acquisition in high-growth corridors of Lagos.",
    image: realEstate,
    category: "Real Estate",
    readTime: "6 min read",
  },

  {
    id: 3,
    title: "The Power of Compound Interest in Savings",
    description:
      "How our USD savings program leverages global financial instruments.",
    image: finance,
    category: "Financial Growth",
    readTime: "12 min read",
  },

  {
    id: 4,
    title: "Future-Proofing through Land Acquisition",
    description:
      "Understanding the strategic importance of title documents and zoning.",
    image: farmland,
    category: "Land Banking",
    readTime: "5 min read",
  },

  {
    id: 5,
    title: "Farm Resorts: The Future of Eco-Tourism",
    description:
      "The intersection of agriculture and hospitality as a high-yield investment.",
    image: resort,
    category: "Hospitality",
    readTime: "9 min read",
  },
];
