import { motion } from "motion/react";
import BlogsImg from "../assets/images/blogs.svg";
import FarmImage from "../assets/images/Cashew Farm Investment.png";
import FilterTabs from "../components/listing/Filtertab";
import FeaturedBlog from "../components/blogs/FeaturedBlogs";
import Footer from "../components/shared/Footer";
import BlogCard from "../components/blogs/BlogCard";
import ListingBanner from "../components/blogs/ListingBanner";
import NewsletterCard from "../components/blogs/NewsletterCard";
import Pagination from "../components/blogs/Pagination";
import SearchBlog from "../components/blogs/searchBlog";
import TrendingTopics from "../components/blogs/Trending-topics";
import { insights } from "../data/data";
import { Filtertabs } from "../data/data";
import { useState } from "react";

const Blogs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featuredInsight = insights.find((item) => item.featured);
  const otherInsights = insights.filter((item) => !item.featured);

  return (
    <div className="font-Outfit">
      <section
        className="relative min-h-[420px] overflow-hidden sm:h-[440px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 25, 60, 0.8), rgba(0, 25, 60, 0.45)), url(${BlogsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundColor: "#00193C",
        }}
      >
        <div className="relative z-10 mx-auto mt-10 flex items-center px-4 py-16 sm:mt-16 sm:px-6 sm:py-24 lg:px-24 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            // className="max-w-4xl"
          >
            <button className="mb-4 rounded-full bg-[#FF5500] px-6 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:w-[188px]">
              INVESTOR EDUCATION
            </button>

            <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.1]">
              Market
              <span className="text-[#FF5500]"> Insights</span> & Financial
              Intelligence
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base">
              Expert perspectives on Nigerian real estate, sustainable
              agribusiness, and strategic land banking. Secure your future with
              data-driven narratives.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="flex flex-col gap-4 bg-[#F4F3F8] px-4 py-6 sm:px-6 sm:py-8 md:px-14 md:py-10 lg:px-28 lg:py-12">
        <p className=" text-[#00193C] text-sm font-semibold">
          Filter by Interest
        </p>

        <FilterTabs
          tabs={Filtertabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <section className="mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-24">
        <div className="grid gap-8 lg:grid-cols-[2fr_360px]">
          <div>
            {featuredInsight && <FeaturedBlog insight={featuredInsight} />}

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {otherInsights.map((insight) => (
                <BlogCard
                  key={insight.id}
                  insight={insight}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Pagination />
            </div>
          </div>

          <aside className="space-y-8 sm:space-y-10">
            <SearchBlog />

            <NewsletterCard />

            <TrendingTopics />

            <ListingBanner image={FarmImage} />
          </aside>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#00193C] to-[#0044A2] py-16 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
          <h2 className="md:text-4xl text-2xl font-bold text-white ">
            Ready to Secure Your CEPROAM?
          </h2>

          <p className="mt-6 md:text-base text-sm  max-w-2xl  leading-7 text-blue-100">
            Join over 5,000+ members building a more resilient financial future
            through the power of collective agro-investment and real estate
            banking.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button
              type="button"
              className="rounded-md bg-[#FF6000] px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Become a Member
            </button>

            <button
              type="button"
              className="rounded-md border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0B3D91]"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
