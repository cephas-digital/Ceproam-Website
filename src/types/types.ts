import React from "react";
import type { IconType } from "react-icons";

export interface TabItem {
  label: string;
  icon?: React.ReactNode;
}

export interface ListingCardData {
  id: number;
  image: string;

  title: string;
  location: string;

  priceLabel: string;
  priceValue: string;

  secondaryLabel?: string;
  secondaryValue?: string;

  progress?: number;
  progressLeftText?: string;
  progressRightText?: string;

  badgeLeft?: string;
  badgeRight?: string;

  buttonText: string;
}

export interface ListingSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;

  tabs: TabItem[];
  cards: ListingCardData[];
}

type Variant = "light" | "dark" | "compact";

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FeatureGridSectionProps {
  title: string;
  subtitle: string;
  items: FeatureItem[];
  variant?: Variant;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactItem {
  icon: IconType;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface StatCard {
  id: number;
  icon: IconType;
  value: string;
  label: string;
  highlighted?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  review: string;
}
