import type { Investment } from "../types/Investment";
import type { IconType } from "react-icons";
import CashewImg from "../assets/images/Cashew Farm Investment.png";
import UrbanResidential from "../assets/images/Urban Residential Property.png";
import OilPalm from "../assets/images/Oil Palm Plantation (1).png";
import { FaHome, FaBuilding, FaLeaf } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { MdGridView } from "react-icons/md";

export const investments: Array<Investment & { category: string }> = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    badge: "HIGH ROI",
    title: "CEPROMAS Heights",
    location: "Epe, Lagos State",
    leftLabel: "Entry Price",
    leftValue: "₦1,500,000",
    rightLabel: "Proj. ROI",
    rightValue: "22.5% p.a",
    funded: 75,
    footerText: "12 Days Left",
    buttonText: "Buy Acre",
    category: "Land Banking",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    badge: "SECURE ASSET",
    title: "CEPROMAS Heights",
    location: "Lekki Phase 1, Lagos",
    leftLabel: "Unit Price",
    leftValue: "₦45,000,000",
    rightLabel: "Yield",
    rightValue: "15% Rental",
    funded: 40,
    footerText: "6 Units Left",
    buttonText: "Join Pool",
    category: "Residential",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    badge: "HOT DEAL",
    title: "CEPROMAS Heights",
    location: "Oyo State",
    leftLabel: "Plot Price",
    leftValue: "₦850,000",
    rightLabel: "Proj. ROI",
    rightValue: "18% p.a",
    funded: 90,
    footerText: "2 Days Left",
    buttonText: "Invest Now",
    category: "Agro Projects",
  },
];

export const investmentTabs: Array<{ label: string; icon: IconType }> = [
  {
    label: "All Listings",
    icon: MdGridView,
  },
  {
    label: "Residential",
    icon: FaHome,
  },
  {
    label: "Commercial",
    icon: FaBuilding,
  },
  {
    label: "Land Banking",
    icon: FaLeaf,
  },
  {
    label: "Farmlands",
    icon: GiFarmTractor,
  },
  {
    label: "Agro Projects",
    icon: GiFarmTractor,
  },
];

export const investmentCards = [
  {
    id: 1,
    image: CashewImg,
    title: "CEPROMAS Heights",
    location: "Epe, Lagos State",

    priceLabel: "Entry Price",
    priceValue: "₦1,500,000",

    secondaryLabel: "Proj. ROI",
    secondaryValue: "22.5% p.a",

    progress: 75,
    progressLeftText: "75% Funded",
    progressRightText: "12 Days Left",

    badgeRight: "HIGH ROI",

    buttonText: "Buy Acre",
  },
  {
    id: 2,
    image: UrbanResidential,
    title: "CEPROMAS Heights",
    location: "Lekki Phase 1, Lagos",

    priceLabel: "Unit Price",
    priceValue: "₦45,000,000",

    secondaryLabel: "Yield",
    secondaryValue: "15% Rental",

    progress: 40,
    progressLeftText: "40% Funded",
    progressRightText: "6 Units Left",

    badgeRight: "SECURE ASSET",

    buttonText: "Join Pool",
  },

  {
    id: 3,
    image: OilPalm,
    title: "CEPROMAS Heights",
    location: "Lekki Phase 1, Lagos",

    priceLabel: "Unit Price",
    priceValue: "₦45,000,000",

    secondaryLabel: "Yield",
    secondaryValue: "15% Rental",

    progress: 40,
    progressLeftText: "40% Funded",
    progressRightText: "6 Units Left",

    badgeRight: "SECURE ASSET",

    buttonText: "Join Pool",
  },
];
