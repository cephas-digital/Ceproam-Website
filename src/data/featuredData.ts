import { investmentTabs } from "./investmentData";
import FarmImg from "../assets/images/Farm project.png";
import UrbanProperty from "../assets/images/Urban property.png";
import OilPalmImg from "../assets/images/Oil Palm Plantation.png";

export const featuredTabs = investmentTabs;

export const featuredCards = [
  {
    id: 1,
    image: FarmImg,
    title: "Ibeju-Lekki Agro-Hub",
    location: "Lagos, Nigeria",

    priceLabel: "Price",
    priceValue: "₦1,500,000 / Acre",

    badgeLeft: "22.5% ROI",
    badgeRight: "OPEN",

    buttonText: "Buy Now",
  },
  {
    id: 2,
    image: UrbanProperty,
    title: "The Peninsula Suites",
    location: "Lekki Phase 1, Lagos",

    priceLabel: "Price",
    priceValue: "₦45,000,000 / Unit",

    badgeLeft: "15% Rental Yield",
    badgeRight: "SELLING FAST",

    buttonText: "Buy Now",
  },
  {
    id: 3,
    image: OilPalmImg,
    title: "Heritage Palm Estate",
    location: "Oyo State",

    priceLabel: "Price",
    priceValue: "₦850,000 / Plot",

    badgeLeft: "18% ROI",
    badgeRight: "LAND BANKING",

    buttonText: "Buy Now",
  },
];
