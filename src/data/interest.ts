// data/interests.ts

export const investmentInterests = [
  "Real Estate Portfolios",
  "Land Banking",
  "Agribusiness",
  "Wealth Management",
  "Fixed Income Investments",
] as const;

export type InvestmentInterest = (typeof investmentInterests)[number];
