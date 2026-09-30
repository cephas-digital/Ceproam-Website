import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import type { FooterLink, ContactItem, SocialLink } from "../types/types";

export const navigationLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const resourceLinks: FooterLink[] = [
  { label: "Our Board", href: "/board" },
  { label: "Contact Support", href: "/support" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const contactItems: ContactItem[] = [
  {
    icon: HiOutlineLocationMarker,
    value: "Lagos, Nigeria",
  },
  {
    icon: HiOutlineMail,
    value: "contact@ceproam.com",
  },
  {
    icon: HiOutlinePhone,
    value: "+234 (0) 900-000-0000",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592629798134",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ceproamreal",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ceproamreal",
    icon: FaInstagram,
  },
];
