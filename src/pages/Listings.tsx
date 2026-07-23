import { useEffect, useMemo, useState } from "react";
import ListingTile from "../components/listing/ListingTile";
import FilterTabs from "../components/listing/Filtertab";
import GrowthCalculator from "../components/listing/Listing-calculator";
import { FeatureGridSection } from "../components/ui/FeaturedGrid";
import { whyInvestWithUs } from "../data/data";
import Footer from "../components/shared/Footer";

// API Helpers & Transformers
import { getAllInvestments } from "../api/investments";
import { getAllProperties } from "../api/properties";
import { transformBackendInvestmentToCard } from "../utils/transformInvestment";
import { transformBackendPropertyToCard } from "../utils/transformProperty";
import type { ListingCardData } from "../types/types";

const Listings = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [allItems, setAllItems] = useState<ListingCardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Define tab categories
  const marketplaceTabs = [
    { label: "All" },
    { label: "Investments" },
    { label: "Properties" },
    { label: "Real Estate" },
    { label: "Agriculture" },
    { label: "Sale" },
    { label: "Rent" },
  ];

  useEffect(() => {
    const fetchMarketplaceData = async () => {
      try {
        setLoading(true);

        const [investmentsRes, propertiesRes] = await Promise.allSettled([
          getAllInvestments(),
          getAllProperties(),
        ]);

        const rawInvestments =
          investmentsRes.status === "fulfilled"
            ? investmentsRes.value.data || []
            : [];
        const rawProperties =
          propertiesRes.status === "fulfilled"
            ? propertiesRes.value.data || []
            : [];

        const investmentCards = rawInvestments.map(
          transformBackendInvestmentToCard,
        );
        const propertyCards = rawProperties.map(transformBackendPropertyToCard);

        setAllItems([...investmentCards, ...propertyCards]);
      } catch (error) {
        console.error("Failed to fetch marketplace assets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketplaceData();
  }, []);

  const filteredListings = useMemo(() => {
    let result = allItems;

    // 1. Tab Filter
    if (activeTab !== 0) {
      const selectedTab =
        marketplaceTabs[activeTab]?.label?.toLowerCase().trim() || "";

      result = result.filter((item) => {
        // Check discriminator OR itemType string matching
        if (selectedTab === "investments" || selectedTab === "investment") {
          return (
            item.itemType === "INVESTMENT" ||
            item.category?.toLowerCase().includes("investment")
          );
        }

        if (selectedTab === "properties" || selectedTab === "property") {
          return (
            item.itemType === "PROPERTY" ||
            item.category?.toLowerCase().includes("property")
          );
        }

        // Sub-category matching (e.g. "real estate", "agriculture", "sale", "rent")
        const itemCategory = item.category?.toLowerCase() || "";
        const itemBadgeLeft = item.badgeLeft?.toLowerCase() || "";
        const itemBadgeRight = item.badgeRight?.toLowerCase() || "";

        return (
          itemCategory.includes(selectedTab) ||
          itemBadgeLeft.includes(selectedTab) ||
          itemBadgeRight.includes(selectedTab)
        );
      });
    }

    // 2. Search Query Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query),
      );
    }

    return result;
  }, [activeTab, allItems, searchQuery]);

  return (
    <main className="relative min-h-screen bg-slate-50 py-16 font-Outfit sm:py-20">
      <div>
        <div className="mb-10 flex flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 md:px-14 lg:px-28">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-[#00193C] sm:text-4xl lg:text-5xl">
                Marketplace of <span className="text-[#FF5500]">Secure</span>{" "}
                Assets
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
                Discover vetted real estate, outright properties, and high-yield
                agro-projects designed for sustainable wealth creation.
              </p>
            </div>

            <div className="w-full xl:max-w-[420px]">
              <div className="flex flex-col gap-4 rounded-[32px] bg-[#F4F3F8] p-5 text-center shadow-sm sm:flex-row sm:gap-6 sm:p-6 sm:text-left">
                <div className="flex-1 sm:border-r sm:border-r-slate-200 sm:pr-6">
                  <p className="text-sm font-medium uppercase text-slate-500">
                    Active Investors
                  </p>
                  <p className="mt-3 text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl">
                    12,450+
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium uppercase text-slate-500">
                    Total Paid ROI
                  </p>
                  <p className="mt-3 text-2xl font-bold text-orange-500 sm:mt-4 sm:text-3xl">
                    2.4B+
                  </p>
                </div>
              </div>
            </div>
          </div>

          <FilterTabs
            tabs={marketplaceTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="mt-8 grid gap-4 xl:grid-cols-[1.45fr_0.95fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="grow">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                    Search by title or location
                  </p>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search e.g. Lagos, Abuja, Agro..."
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 sm:px-5 sm:py-4"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-orange-500 p-5 text-white shadow-xl sm:p-6">
              <p className="text-sm uppercase tracking-[0.25em]">New Launch</p>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Cashew Farm III
              </h2>
              <p className="mt-3 text-sm leading-6 text-orange-100">
                High-yield cashew cultivation project with offtake agreements
                and attractive exit terms.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 sm:px-6 sm:py-4 cursor-pointer">
                Explore Launch
              </button>
            </div>
          </div>
        </div>

        {/* Listings Display Grid */}
        <div className="mb-10 grid gap-6 px-4 sm:px-6 md:grid-cols-2 md:px-14 lg:px-28 xl:grid-cols-3">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="h-[420px] w-full animate-pulse rounded-2xl bg-slate-200"
              />
            ))
          ) : filteredListings.length > 0 ? (
            filteredListings.map((card) => (
              <ListingTile key={card.id} card={card} />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-600">
              No investments or properties found matching your search criteria.
            </div>
          )}
        </div>

        <GrowthCalculator />

        <FeatureGridSection
          title="Why Invest With Us?"
          subtitle="Why thousands of investors trust CEPROMAS."
          items={whyInvestWithUs}
          variant="light"
        />

        <Footer />
      </div>
    </main>
  );
};

export default Listings;
