import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import HeroSlider from "../components/home/HeroSlider";
import AboutSection from "../components/home/Aboutus";
import LandAppreciation from "../assets/images/Land appreciation and growth.svg";
import BlogCard from "../components/home/Blog-card";
import { blogs } from "../data/blog";
import ListingSection from "../components/listing/ListingSection";
import { FeatureGridSection } from "../components/ui/FeaturedGrid";
import { services } from "../data/services";
import { whyCepromas } from "../data/why-cepromas";
import { investmentPillars } from "../data/investment-pillars";
import TestimonialsSection from "../components/home/Testimonialsection";
import Stats from "../components/home/Stats";
import Footer from "../components/shared/Footer";
import ConsultationSection from "../components/home/Consultation-request";

// API Helpers & Transformers
import { getAllInvestments } from "../api/investments";
import { getAllProperties } from "../api/properties";
import { transformBackendInvestmentToCard } from "../utils/transformInvestment";
import { transformBackendPropertyToCard } from "../utils/transformProperty";
import type { ListingCardData } from "../types/types";

const Home = () => {
  const benefits = [
    "Strategic acquisition in high-growth corridors.",
    "Hedge against inflation with tangible assets.",
    "Zero-effort management with high-yield potential.",
  ];

  // States
  const [investments, setInvestments] = useState<ListingCardData[]>([]);
  const [properties, setProperties] = useState<ListingCardData[]>([]);
  const [loadingInvestments, setLoadingInvestments] = useState<boolean>(true);
  const [loadingProperties, setLoadingProperties] = useState<boolean>(true);

  useEffect(() => {
    // 1. Fetch Investment Packages
    const fetchInvestments = async () => {
      try {
        setLoadingInvestments(true);
        const response = await getAllInvestments();
        const data = response.data || [];
        const transformedData = data.map(transformBackendInvestmentToCard);
        setInvestments(transformedData);
      } catch (error) {
        console.error("Failed to load investment packages from API:", error);
      } finally {
        setLoadingInvestments(false);
      }
    };

    // 2. Fetch Properties
    const fetchProperties = async () => {
      try {
        setLoadingProperties(true);
        const response = await getAllProperties();
        const data = response.data || [];

        // 1. Inspect raw response from NestJS
        console.log("🏢 Raw Properties Backend Response:", data);

        // 2. Log extracted categories and types to see exact string casing/formatting
        data.forEach((item, index) => {
          console.log(`Property #${index + 1} (${item.title}):`, {
            category: item.category, // e.g. "SALE", "RENT"
            types: item.types, // e.g. ["COMMERCIAL", "RESIDENTIAL"]
          });
        });

        const transformedData = data.map(transformBackendPropertyToCard);

        // 3. Inspect transformed cards ready for UI filtering
        console.log("🎨 Transformed Property Cards:", transformedData);

        setProperties(transformedData);
      } catch (error) {
        console.error("Failed to load properties from API:", error);
      } finally {
        setLoadingProperties(false);
      }
    };

    fetchInvestments();
    fetchProperties();
  }, []);

  // Filter tabs
  const investmentTabs = [
    { label: "All" },
    { label: "Real Estate" },
    { label: "Agriculture" },
  ];

  const propertyTabs = [
    { label: "All" },
    { label: "Land" },
    { label: "Residential" },
    { label: "Commercial" },
  ];

  return (
    <div className="font-Outfit">
      <HeroSlider />

      {/* 1. Dynamic Investment Opportunities Section */}
      <ListingSection
        title="Investment Opportunities"
        subtitle="Diversify your portfolio with asset-backed projects designed for long-term capital appreciation and consistent cash flow."
        ctaText={
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-[#021D49]"
          >
            View All Investments
            <FaArrowRight />
          </Link>
        }
        tabs={investmentTabs}
        cards={investments.slice(0, 6)}
        loading={loadingInvestments}
      />

      {/* 2. Dynamic Featured Property Listings Section */}
      <ListingSection
        title="Featured Properties"
        subtitle="Hand-picked premium property assets currently available for outright purchase."
        ctaText={
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-[#021D49]"
          >
            View All Properties
            <FaArrowRight />
          </Link>
        }
        tabs={propertyTabs}
        cards={properties.slice(0, 6)}
        loading={loadingProperties}
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

      <section className="bg-[#FAF9FE] py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl md:flex-row flex-col items-center gap-8 px-4 sm:px-6 sm:gap-10 lg:flex-row lg:justify-between lg:gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-[#00193C] sm:mb-6 sm:text-3xl md:text-4xl">
              Wealth Creation through Land Banking
            </h2>

            <p className="mb-6 text-base leading-relaxed text-slate-600 sm:mb-8 sm:text-lg">
              Land banking is the secret of the wealthy. By acquiring land in
              the path of urban expansion, you position yourself for exponential
              capital appreciation as infrastructure develops.
            </p>

            <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-lg text-orange-500" />
                  <p className="text-left text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="w-full rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:w-auto sm:px-8 sm:py-4">
              Learn About Land Banking
            </button>
          </div>

          <div className="group relative w-full max-w-[520px]">
            <div className="absolute inset-0 translate-y-6 sm:translate-y-8" />

            <img
              src={LandAppreciation}
              alt="Land Banking"
              className="relative h-[280px] w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-[360px] md:h-[500px]"
            />
          </div>
        </div>
      </section>

      <Stats />

      <TestimonialsSection />

      <section className="bg-[#F5F5F7] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-4">
          <div className="mb-8 flex flex-col gap-3 text-center sm:mb-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-[#00193C] sm:text-3xl md:text-4xl">
                Recent Blogs
              </h2>

              <p className="mt-2 text-sm text-[#4A5568] sm:text-base">
                Stay updated with the latest trends in real estate and
                agribusiness.
              </p>
            </div>

            <a
              href="/blog"
              className="text-sm font-semibold text-[#FF6000] transition-colors hover:text-[#E85F00]"
            >
              Read All Posts
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
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
