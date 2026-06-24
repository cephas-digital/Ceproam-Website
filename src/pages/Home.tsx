// import Button from "../components/ui/Button";
import { useMemo, useState } from "react";
import HeroSlider from "../components/home/HeroSlider";
import FilterTabs from "../components/home/Filtertab";
import AboutSection from "../components/home/Aboutus";
import InvestmentCard from "../components/home/InvestmentCard";
import LandAppreciation from "../assets/images/Land appreciation and growth.png";
import {
  investmentCards,
  investments,
  investmentTabs,
} from "../data/investmentData";
import BlogCard from "../components/home/Blog-card";
import { blogs } from "../data/blog";
import ListingSection from "../components/listing/ListingSection";
import { featuredCards, featuredTabs } from "../data/featuredData";
import { FeatureGridSection } from "../components/ui/FeaturedGrid";
import { services } from "../data/services";
import { whyCepromas } from "../data/why-cepromas";
import { investmentPillars } from "../data/investment-pillars";
import TestimonialsSection from "../components/home/Testimonialsection";
import Stats from "../components/home/Stats";

import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/shared/Footer";
import ConsultationSection from "../components/home/Consultation-request";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All Listings");

  const filteredInvestments = useMemo(
    () =>
      activeFilter === "All Listings"
        ? investments
        : investments.filter(
            (investment) => investment.category === activeFilter,
          ),
    [activeFilter],
  );

  const benefits = [
    "Strategic acquisition in high-growth corridors.",
    "Hedge against inflation with tangible assets.",
    "Zero-effort management with high-yield potential.",
  ];

  return (
    <div className="font-Outfit">
      <HeroSlider />

      {/* <section className="bg-[#F7F7FB] px-6 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold text-[#021D49]">
              Investment Opportunities
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Diversify your portfolio with asset-backed projects designed for
              long-term capital appreciation and consistent cash flow.
            </p>
          </div>

          <button className="font-semibold text-[#021D49]">
            View All Listings →
          </button>
        </div>

        <div className="mt-12">
          <FilterTabs
            activeTab={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredInvestments.map((item) => (
            <InvestmentCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </section> */}

      <ListingSection
        title="Investment Opportunities"
        subtitle="Diversify your portfolio..."
        ctaText="View All Listings →"
        tabs={investmentTabs}
        cards={investmentCards}
      />

      <ListingSection
        title="Featured Listings"
        subtitle="Hand-picked premium assets currently open for investment."
        ctaText="View All →"
        tabs={featuredTabs}
        cards={featuredCards}
      />

      <AboutSection />

      <FeatureGridSection
        title="Our Core Services"
        subtitle="Why thousands of investors trust CEPROMAS."
        items={services}
        variant="light"
      />

      <FeatureGridSection
        title="Why CEPROMAS"
        subtitle="Why thousands of investors trust CEPROMAS for their wealth creation."
        items={whyCepromas}
        variant="dark"
      />

      <FeatureGridSection
        title="Strategic Investment Pillars"
        subtitle="Diversified opportunities tailored for growth and stability."
        items={investmentPillars}
        variant="compact"
      />

      <section className="bg-[#FAF9FE] py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:justify-between">
          {/* Content */}
          <div className="max-w-xl">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#00193C]">
              Wealth Creation through Land Banking
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Land banking is the secret of the wealthy. By acquiring land in
              the path of urban expansion, you position yourself for exponential
              capital appreciation as infrastructure develops.
            </p>

            <div className="mb-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-lg text-orange-500" />
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">
              Learn About Land Banking
            </button>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 translate-y-8 " />

            <img
              src={LandAppreciation}
              alt="Land Banking"
              className="relative h-[500px] w-full max-w-[520px] rounded-3xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <Stats />

      <TestimonialsSection />

      <section className="bg-[#F5F5F7] py-24">
        <div className="mx-auto max-w-7xl md:px-0 px-6 ">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-[#00193C]">
                Recent Blogs
              </h2>

              <p className="mt-2 text-[#4A5568]">
                Stay updated with the latest trends in real estate and
                agribusiness.
              </p>
            </div>

            <a
              href="/blog"
              className="
              text-sm
              font-semibold
              text-[#FF6000]
              transition-colors
              hover:text-[#E85F00]
            "
            >
              Read All Posts
            </a>
          </div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {blogs.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </div>
      </section>

      <ConsultationSection />

      <Footer />
    </div>
  );
};

export default Home;
