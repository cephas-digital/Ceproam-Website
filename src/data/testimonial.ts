// data/testimonials.ts

import {
  HiOutlineOfficeBuilding,
  HiOutlineTrendingUp,
  HiOutlineUsers,
} from "react-icons/hi";

import type { StatCard, Testimonial } from "../types/types";

export const stats: StatCard[] = [
  {
    id: 1,
    icon: HiOutlineOfficeBuilding,
    value: "1,200+",
    label: "Acres Managed",
  },
  {
    id: 2,
    icon: HiOutlineUsers,
    value: "4,500+",
    label: "Active Investors",
    highlighted: true,
  },
  {
    id: 3,
    icon: HiOutlineTrendingUp,
    value: "24.5%",
    label: "Average Annual ROI",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "OO",
    name: "Olawale O.",
    role: "Investor since 2021",
    review:
      "CEPROAM has completely changed my view on agricultural investment. The transparency and regular updates on my Cashew farm progress give me total peace of mind.",
  },
  {
    id: 2,
    initials: "EJ",
    name: "Emeka J.",
    role: "Real Estate Client",
    review:
      "As a professional living abroad, I needed a trustworthy partner to manage my real estate portfolio in Nigeria. CEPROAM'S institutional approach is world-class.",
  },
  {
    id: 3,
    initials: "TA",
    name: "Titilayo A.",
    role: "Wealth Partner",
    review:
      "The land banking project in Epe exceeded my ROI expectations within just 18 months. Their selection of growth areas is spot on.",
  },
];
