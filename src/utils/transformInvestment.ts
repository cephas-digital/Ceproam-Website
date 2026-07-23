import type { InvestmentPackage } from "../api/investments";
import type { ListingCardData } from "../types/types";

export const transformBackendInvestmentToCard = (
  pkg: InvestmentPackage,
): ListingCardData => {
  const minPriceFormatted = pkg?.minAmount
    ? `₦${Number(pkg.minAmount).toLocaleString()}`
    : "₦0";

  return {
    id: pkg.id,
    itemType: "INVESTMENT",
    image:
      pkg.images && pkg.images.length > 0
        ? pkg.images[0]
        : "/fallback-property.jpg",
    title: pkg.name,
    location: pkg.location || "Location on Request",
    category: pkg.category?.toLowerCase() || "all",
    badgeLeft: pkg.category ? pkg.category.replace("_", " ") : "INVESTMENT",
    badgeRight: pkg.durationMonths ? `${pkg.durationMonths} Months` : undefined,
    priceLabel: "Min Investment",
    priceValue: minPriceFormatted,
    secondaryLabel: "Expected ROI",
    secondaryValue: pkg.roi ? `${pkg.roi}%` : "Variable",
    buttonText: "View Details",
  };
};
