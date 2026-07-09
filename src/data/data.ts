import type { ServiceItem } from "../components/about/CoreServiceSection";
import PropertyImg from "../assets/images/property.svg";
import Industry from "../assets/images/industry.svg";
import cashewFarm from "../assets/images/cashew-farm.svg";
import urbanHub from "../assets/images/urban-hub.svg";
import Greenfield from "../assets/images/greenfield.svg";
import Vetted from "../assets/icons/vetted.png";
import Transparent from "../assets/icons/transparent.png";
import Community from "../assets/icons/community.png";
import type { Insight } from "../types/types";
import type { Property } from "../types/types";
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

  image: PropertyImg,

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

export const properties: Property[] = [
  {
    id: 1,
    title: "Cashew Farm",
    image: cashewFarm,
    badge: "Selling Fast",
    badgeColor: "bg-orange-500",
    roi: "22.5%",
    location: "Ogbomosho",
    description:
      "High-yield cashew cultivation project with guaranteed off-take agreements and titled land.",
    leftLabel: "Unit Size",
    leftValue: "1 Acre",
    rightLabel: "Duration",
    rightValue: "24 Months",
    priceLabel: "Price per Unit",
    price: "₦1,100,000",
  },

  {
    id: 2,
    title: "Urban Hub",
    image: urbanHub,
    badge: "Available",
    badgeColor: "bg-slate-900",
    roi: "18%",
    location: "Ibeju-Lekki",
    description:
      "Prime residential land banking opportunity in the heart of the fastest growing district.",
    leftLabel: "Unit Size",
    leftValue: "500sqm",
    rightLabel: "Hold Period",
    rightValue: "12 Months",
    priceLabel: "Investment",
    price: "₦4,500,000",
  },

  {
    id: 3,
    title: "Greenfield Agro Hub",
    image: Greenfield,
    badge: "New Listing",
    badgeColor: "bg-orange-500",
    roi: "25%",
    location: "Ogun State",
    description:
      "Smart greenhouse technology designed for year-round vegetable cultivation.",
    leftLabel: "Risk Level",
    leftValue: "Moderate",
    rightLabel: "Cycle",
    rightValue: "9 Months",
    priceLabel: "Slot Price",
    price: "₦250,000",
  },

  {
    id: 4,
    title: "Palm Plantation",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
    roi: "20%",
    location: "Ondo",
    description:
      "Commercial palm plantation with high annual dividend potential.",
    leftLabel: "Land Size",
    leftValue: "2 Acres",
    rightLabel: "Duration",
    rightValue: "18 Months",
    priceLabel: "Investment",
    price: "₦2,000,000",
  },

  {
    id: 5,
    title: "Luxury Estate",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    badge: "Available",
    badgeColor: "bg-slate-900",
    roi: "15%",
    location: "Abuja",
    description:
      "Premium residential estate with excellent infrastructure and secure documentation.",
    leftLabel: "Plot",
    leftValue: "600sqm",
    rightLabel: "Hold",
    rightValue: "18 Months",
    priceLabel: "Price",
    price: "₦8,500,000",
  },

  {
    id: 6,
    title: "Cocoa Farm",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    badge: "Best ROI",
    badgeColor: "bg-green-700",
    roi: "28%",
    location: "Ekiti",
    description:
      "Large-scale cocoa plantation with export-ready processing facilities.",
    leftLabel: "Land",
    leftValue: "3 Acres",
    rightLabel: "Cycle",
    rightValue: "30 Months",
    priceLabel: "Investment",
    price: "₦3,300,000",
  },

  {
    id: 7,
    title: "Smart Estate",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    badge: "Selling Fast",
    badgeColor: "bg-orange-500",
    roi: "17%",
    location: "Lekki",
    description:
      "Technology-enabled residential development with modern amenities.",
    leftLabel: "Plot",
    leftValue: "450sqm",
    rightLabel: "Hold",
    rightValue: "12 Months",
    priceLabel: "Price",
    price: "₦6,200,000",
  },

  {
    id: 8,
    title: "Rice Farm",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    badge: "New",
    badgeColor: "bg-blue-600",
    roi: "24%",
    location: "Kebbi",
    description:
      "Mechanized rice production scheme supported by government initiatives.",
    leftLabel: "Unit",
    leftValue: "2 Acres",
    rightLabel: "Cycle",
    rightValue: "8 Months",
    priceLabel: "Investment",
    price: "₦900,000",
  },

  {
    id: 9,
    title: "Urban Hub",
    image: urbanHub,
    badge: "Available",
    badgeColor: "bg-slate-900",
    roi: "18%",
    location: "Ibeju-Lekki",
    description:
      "Prime residential land banking opportunity in the heart of the fastest growing district.",
    leftLabel: "Unit Size",
    leftValue: "500sqm",
    rightLabel: "Hold Period",
    rightValue: "12 Months",
    priceLabel: "Investment",
    price: "₦4,500,000",
  },

  {
    id: 10,
    title: "Luxury Estate",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    badge: "Available",
    badgeColor: "bg-slate-900",
    roi: "15%",
    location: "Abuja",
    description:
      "Premium residential estate with excellent infrastructure and secure documentation.",
    leftLabel: "Plot",
    leftValue: "600sqm",
    rightLabel: "Hold",
    rightValue: "18 Months",
    priceLabel: "Price",
    price: "₦8,500,000",
  },

  {
    id: 11,
    title: "Cashew Farm",
    image: cashewFarm,
    badge: "Selling Fast",
    badgeColor: "bg-orange-500",
    roi: "22.5%",
    location: "Ogbomosho",
    description:
      "High-yield cashew cultivation project with guaranteed off-take agreements and titled land.",
    leftLabel: "Unit Size",
    leftValue: "1 Acre",
    rightLabel: "Duration",
    rightValue: "24 Months",
    priceLabel: "Price per Unit",
    price: "₦1,100,000",
  },

  {
    id: 12,
    title: "Cocoa Farm",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    badge: "Best ROI",
    badgeColor: "bg-green-700",
    roi: "28%",
    location: "Ekiti",
    description:
      "Large-scale cocoa plantation with export-ready processing facilities.",
    leftLabel: "Land",
    leftValue: "3 Acres",
    rightLabel: "Cycle",
    rightValue: "30 Months",
    priceLabel: "Investment",
    price: "₦3,300,000",
  },
];
