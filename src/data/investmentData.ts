// import type { Investment } from "../types/Investment";
// import type { IconType } from "react-icons";
// import CashewImg from "../assets/images/Cashew Farm Investment.png";
// import UrbanResidential from "../assets/images/Urban Residential Property.png";
// import OilPalm from "../assets/images/Oil Palm Plantation (1).png";
// import { FaHome, FaBuilding, FaLeaf } from "react-icons/fa";
// import { GiFarmTractor } from "react-icons/gi";
// import { MdGridView } from "react-icons/md";

// export const investments: Array<Investment & { category: string }> = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
//     badge: "HIGH ROI",
//     title: "CEPROMAS Heights",
//     location: "Epe, Lagos State",
//     leftLabel: "Entry Price",
//     leftValue: "₦1,500,000",
//     rightLabel: "Proj. ROI",
//     rightValue: "22.5% p.a",
//     funded: 75,
//     footerText: "12 Days Left",
//     buttonText: "Buy Acre",
//     category: "Land Banking",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
//     badge: "SECURE ASSET",
//     title: "CEPROMAS Heights",
//     location: "Lekki Phase 1, Lagos",
//     leftLabel: "Unit Price",
//     leftValue: "₦45,000,000",
//     rightLabel: "Yield",
//     rightValue: "15% Rental",
//     funded: 40,
//     footerText: "6 Units Left",
//     buttonText: "Join Pool",
//     category: "Residential",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
//     badge: "HOT DEAL",
//     title: "CEPROMAS Heights",
//     location: "Oyo State",
//     leftLabel: "Plot Price",
//     leftValue: "₦850,000",
//     rightLabel: "Proj. ROI",
//     rightValue: "18% p.a",
//     funded: 90,
//     footerText: "2 Days Left",
//     buttonText: "Invest Now",
//     category: "Agro Projects",
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
//     badge: "LAND BANKING",
//     title: "Coastal Reserve",
//     location: "Akodo, Lagos",
//     leftLabel: "Entry Price",
//     leftValue: "₦2,200,000",
//     rightLabel: "Proj. ROI",
//     rightValue: "20% p.a",
//     funded: 55,
//     footerText: "18 Days Left",
//     buttonText: "Reserve Slot",
//     category: "Land Banking",
//   },
//   {
//     id: 5,
//     image: "https://images.unsplash.com/photo-1486304873000-235643847519",
//     badge: "NEW LAUNCH",
//     title: "Urban Core Towers",
//     location: "Victoria Island, Lagos",
//     leftLabel: "Unit Price",
//     leftValue: "₦58,000,000",
//     rightLabel: "Yield",
//     rightValue: "12% Rental",
//     funded: 30,
//     footerText: "10 Units Left",
//     buttonText: "Join Pool",
//     category: "Residential",
//   },
//   {
//     id: 6,
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
//     badge: "AGRO INVEST",
//     title: "Cocoa Ridge",
//     location: "Ondo State",
//     leftLabel: "Plot Price",
//     leftValue: "₦1,100,000",
//     rightLabel: "Proj. ROI",
//     rightValue: "19.5% p.a",
//     funded: 65,
//     footerText: "24 Days Left",
//     buttonText: "Invest Now",
//     category: "Farmlands",
//   },
// ];

// export const investmentTabs: Array<{ label: string; icon: IconType }> = [
//   {
//     label: "All Listings",
//     icon: MdGridView,
//   },
//   {
//     label: "Residential",
//     icon: FaHome,
//   },
//   {
//     label: "Commercial",
//     icon: FaBuilding,
//   },
//   {
//     label: "Land Banking",
//     icon: FaLeaf,
//   },
//   {
//     label: "Farmlands",
//     icon: GiFarmTractor,
//   },
//   {
//     label: "Agro Projects",
//     icon: GiFarmTractor,
//   },
// ];

// export const investmentCards = [
//   {
//     id: 1,
//     image: CashewImg,
//     title: "CEPROMAS Heights",
//     location: "Epe, Lagos State",

//     priceLabel: "Entry Price",
//     priceValue: "₦1,500,000",

//     secondaryLabel: "Proj. ROI",
//     secondaryValue: "22.5% p.a",

//     progress: 75,
//     progressLeftText: "75% Funded",
//     progressRightText: "12 Days Left",

//     badgeRight: "HIGH ROI",

//     buttonText: "Buy Acre",
//   },
//   {
//     id: 2,
//     image: UrbanResidential,
//     title: "CEPROMAS Heights",
//     location: "Lekki Phase 1, Lagos",

//     priceLabel: "Unit Price",
//     priceValue: "₦45,000,000",

//     secondaryLabel: "Yield",
//     secondaryValue: "15% Rental",

//     progress: 40,
//     progressLeftText: "40% Funded",
//     progressRightText: "6 Units Left",

//     badgeRight: "SECURE ASSET",

//     buttonText: "Join Pool",
//   },

//   {
//     id: 3,
//     image: OilPalm,
//     title: "CEPROMAS Heights",
//     location: "Lekki Phase 1, Lagos",

//     priceLabel: "Unit Price",
//     priceValue: "₦45,000,000",

//     secondaryLabel: "Yield",
//     secondaryValue: "15% Rental",

//     progress: 40,
//     progressLeftText: "40% Funded",
//     progressRightText: "6 Units Left",

//     badgeRight: "SECURE ASSET",

//     buttonText: "Join Pool",
//   },
// ];

import type { IconType } from "react-icons";
import CashewImg from "../assets/images/Cashew Farm Investment.png";
import UrbanResidential from "../assets/images/Urban Residential Property.png";
import OilPalm from "../assets/images/Oil Palm Plantation (1).png";
import { FaHome, FaBuilding, FaLeaf } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { MdGridView } from "react-icons/md";

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
    category: "Land Banking",

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

    category: "Residential",

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
    category: "Commercial",

    buttonText: "Join Pool",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Coastal Reserve",
    location: "Akodo, Lagos",

    priceLabel: "Entry Price",
    priceValue: "₦2,200,000",

    secondaryLabel: "Proj. ROI",
    secondaryValue: "20% p.a",

    progress: 55,
    progressLeftText: "55% Funded",
    progressRightText: "18 Days Left",

    badgeRight: "LAND BANKING",
    category: "Land Banking",

    buttonText: "Reserve Slot",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1486304873000-235643847519",
    title: "Urban Core Towers",
    location: "Victoria Island, Lagos",

    priceLabel: "Unit Price",
    priceValue: "₦58,000,000",

    secondaryLabel: "Yield",
    secondaryValue: "12% Rental",

    progress: 30,
    progressLeftText: "30% Funded",
    progressRightText: "10 Units Left",

    badgeRight: "NEW LAUNCH",
    category: "Residential",

    buttonText: "Join Pool",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Cocoa Ridge",
    location: "Ondo State",

    priceLabel: "Plot Price",
    priceValue: "₦1,100,000",

    secondaryLabel: "Proj. ROI",
    secondaryValue: "19.5% p.a",

    progress: 65,
    progressLeftText: "65% Funded",
    progressRightText: "24 Days Left",

    badgeRight: "AGRO INVEST",
    category: "Agro Projects",

    buttonText: "Invest Now",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
    title: "Golden Green Farms",
    location: "Iseyin, Oyo State",

    priceLabel: "Entry Price",
    priceValue: "₦980,000",

    secondaryLabel: "Proj. ROI",
    secondaryValue: "21% p.a",

    progress: 48,
    progressLeftText: "48% Funded",
    progressRightText: "14 Days Left",

    badgeRight: "NEW FARMING",
    category: "Farmlands",

    buttonText: "Invest Now",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    title: "Harbor Commerce Hub",
    location: "Ikeja, Lagos",

    priceLabel: "Unit Price",
    priceValue: "₦32,000,000",

    secondaryLabel: "Yield",
    secondaryValue: "14% Rental",

    progress: 62,
    progressLeftText: "62% Funded",
    progressRightText: "8 Units Left",

    badgeRight: "COMMERCIAL",
    category: "Commercial",

    buttonText: "Book Unit",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    title: "Riverstone Estates",
    location: "Ajah, Lagos",

    priceLabel: "Entry Price",
    priceValue: "₦3,400,000",

    secondaryLabel: "Proj. ROI",
    secondaryValue: "18.8% p.a",

    progress: 72,
    progressLeftText: "72% Funded",
    progressRightText: "11 Days Left",

    badgeRight: "PREMIUM",
    category: "Land Banking",

    buttonText: "Reserve Plot",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    title: "Lagos Green Terrace",
    location: "Mende, Maryland",

    priceLabel: "Unit Price",
    priceValue: "₦24,500,000",

    secondaryLabel: "Yield",
    secondaryValue: "13% Rental",

    progress: 58,
    progressLeftText: "58% Funded",
    progressRightText: "9 Units Left",

    badgeRight: "EARLY ACCESS",
    category: "Residential",

    buttonText: "Reserve Unit",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Sunrise Agro Park",
    location: "Iwo, Osun State",

    priceLabel: "Plot Price",
    priceValue: "₦760,000",

    secondaryLabel: "Proj. ROI",
    secondaryValue: "20.5% p.a",

    progress: 81,
    progressLeftText: "81% Funded",
    progressRightText: "7 Days Left",

    badgeRight: "HOT DEAL",
    category: "Agro Projects",

    buttonText: "Invest Now",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    title: "Prime Office Plaza",
    location: "Allen Avenue, Ikeja",

    priceLabel: "Unit Price",
    priceValue: "₦41,000,000",

    secondaryLabel: "Yield",
    secondaryValue: "16% Rental",

    progress: 67,
    progressLeftText: "67% Funded",
    progressRightText: "5 Units Left",

    badgeRight: "INCOME READY",
    category: "Commercial",

    buttonText: "Book Office",
  },
];
