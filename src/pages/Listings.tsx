import { useMemo, useState } from "react";
import ListingTile from "../components/listing/ListingTile";
import { investmentCards, investmentTabs } from "../data/investmentData";
import FilterTabs from "../components/listing/Filtertab";
import GrowthCalculator from "../components/listing/Listing-calculator";
import { FeatureGridSection } from "../components/ui/FeaturedGrid";
import { whyInvestWithUs } from "../data/data";
import Footer from "../components/shared/Footer";

const Listings = () => {
  const [activeTab, setActiveTab] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);

  const listings = useMemo(() => {
    if (activeTab === 0) {
      return investmentCards;
    }

    const selectedCategory = investmentTabs[activeTab]?.label;
    return investmentCards.filter((card) => card.category === selectedCategory);
  }, [activeTab]);

  // useEffect(() => {
  //   const timeout = window.setTimeout(() => setIsVisible(true), 20);
  //   return () => window.clearTimeout(timeout);
  // }, []);

  return (
    <main className="relative min-h-screen bg-slate-50 py-16 font-Outfit sm:py-20">
      {/* transition-transform duration-700 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } */}
      <div>
        <div className="mb-10 flex flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 md:px-14 lg:px-28">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-[#00193C] sm:text-4xl lg:text-5xl">
                Marketplace of <span className="text-[#FF5500]">Secure</span>
                Assets
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
                Discover vetted real estate and agro-projects designed for
                sustainable wealth preservation. Each listing is backed by legal
                frameworks and physical land assets.
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
            tabs={investmentTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="mt-8 grid gap-4 xl:grid-cols-[1.45fr_0.95fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="grow">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                    Search by location
                  </p>
                  <input
                    type="text"
                    placeholder="Search by location..."
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 sm:px-5 sm:py-4"
                  />
                </div>
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                  <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:py-4">
                    Min Budget
                  </button>
                  <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:py-4">
                    ROI Range
                  </button>
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
              <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 sm:px-6 sm:py-4">
                Explore Launch
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 grid gap-6 px-4 sm:px-6 md:grid-cols-2 md:px-14 lg:px-28 xl:grid-cols-3">
          {listings.map((card) => (
            <ListingTile
              key={card.id}
              card={card}
            />
          ))}
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
