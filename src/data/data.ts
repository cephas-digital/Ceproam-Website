import type { ServiceItem } from "../components/about/CoreServiceSection";
import Property from "../assets/images/property.png";
import Industry from "../assets/images/industrypics.png";

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
