// data/blogs.ts

import type { BlogPost } from "../types/types";

export const blogs: BlogPost[] = [
  {
    id: 1,
    category: "Real Estate",
    title: "The Future of Urban Housing in Nigeria",
    excerpt:
      "How emerging infrastructure projects are shifting the demand for residential property in Lagos...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    href: "/blog/future-of-urban-housing",
  },
  {
    id: 2,
    category: "Agribusiness",
    title: "Maximizing Returns on Cash Crop Farming",
    excerpt:
      "A guide to investing in high-yield crops like Oil Palm and Cashew for sustainable long-term growth...",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    href: "/blog/cash-crop-farming",
  },
  {
    id: 3,
    category: "Wealth Management",
    title: "Land Banking vs. Fixed Deposits",
    excerpt:
      "Why physical asset appreciation often outperforms traditional banking instruments in the long run...",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
    href: "/blog/land-banking-vs-fixed-deposit",
  },
];
