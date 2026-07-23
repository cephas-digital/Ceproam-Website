import type { Property } from "../api/properties";
import type { ListingCardData } from "../types/types";

export const transformBackendPropertyToCard = (
  property: Property,
): ListingCardData => {
  const formattedPrice = property?.price
    ? `₦${Number(property.price).toLocaleString()}`
    : "Price on Request";

  // Combine types array and category so filter can match any tag
  const typeTags = (property.types || []).map((t) => t.toLowerCase());
  if (property.category) {
    typeTags.push(property.category.toLowerCase());
  }

  // Join into a space/comma-separated string for easy string includes matching
  const categorySearchString = typeTags.join(" ");

  const primaryType =
    property.types && property.types.length > 0
      ? property.types[0]
      : property.category || "PROPERTY";

  return {
    id: property.id,
    itemType: "PROPERTY",
    image:
      property.images && property.images.length > 0
        ? property.images[0]
        : "/fallback-property.jpg",
    title: property.title,
    location: property.location || "Location on Request",
    // 👈 Stores all tags (e.g. "commercial sale active") so FilterTabs finds matches
    category: categorySearchString,
    badgeLeft: primaryType.replace(/_/g, " "),
    badgeRight: property.category ? `FOR ${property.category}` : "AVAILABLE",
    priceLabel: property.category === "RENT" ? "Rent Price" : "Price",
    priceValue: formattedPrice,
    secondaryLabel: "Specs",
    secondaryValue: property.bedrooms
      ? `${property.bedrooms} Bed${property.bedrooms > 1 ? "s" : ""}`
      : property.area
        ? `${property.area} sqm`
        : property.category || "Outright",
    buttonText: "View Details",
  };
};
