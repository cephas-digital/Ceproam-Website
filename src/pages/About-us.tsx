import { FiArrowRight } from "react-icons/fi";
import About from "../assets/images/aboutpics.png";
import vision from "../assets/images/vision.png";
import mission from "../assets/images/mission.png";
import Footer from "../components/shared/Footer";
import { coreValues } from "../data/core-values";
import { FeatureGridSection } from "../components/ui/FeaturedGrid";
import CoreServiceSection from "../components/about/CoreServiceSection";
import { realEstateService } from "../data/data";

const AboutUs = () => {
  return (
    <div className=" font-Outfit">
      <section
        className="relative min-h-screen font-Outfit overflow-hidden "
        style={{
          backgroundImage: `url(${About})`, // replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* <div className="absolute inset-0" /> */}

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-0">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b00]">
              Ceproam
            </p>

            <h1 className="text-4xl font-bold leading-[60px] text-white sm:text-5xl lg:text-6xl">
              The Intersection of{" "}
              <span className="text-[#ff6b00]">Agriculture</span>,
              <br />
              <span className="text-[#ff6b00]">Investment</span> and{" "}
              <span className="text-[#ff6b00]">Asset</span> Management
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Bridging the gap between traditional agricultural yields and
              modern real estate security through a data-driven investment
              ecosystem designed for the forward-thinking investor.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-[#ff6b00] px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600">
                Download Prospectus
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-white/50 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                Our Strategic Model
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb]  py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-7">
              <h2 className="mb-6 text-3xl font-bold text-[#0B3B82]">
                Our Vision
              </h2>

              <div className="space-y-6 text-[15px] leading-8 text-gray-600">
                <p>
                  To become Africa's leading digital ecosystem for real estate
                  access, property ownership, and agricultural investment
                  opportunities.
                </p>

                <p>
                  To define the new standard of African leadership in
                  sustainable asset management. We envision a future where every
                  Nigerian has seamless access to wealth-generating land assets
                  and technologically advanced agricultural ventures, secured by
                  institutional-grade governance.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl lg:col-span-5">
              <img
                src={vision}
                alt="Vision"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl lg:col-span-4">
              <img
                src={mission}
                alt="Mission"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-2xl bg-[#051D47] p-8 text-white lg:col-span-8">
              <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>

              <div className="space-y-6 text-[15px] leading-8 text-gray-300">
                <p>
                  To democratize access to real estate and agricultural
                  investments through secure technology, transparency, and
                  innovative financing models.
                </p>

                <p>
                  To empower our members through high-yield real estate
                  portfolios and managed agro-investments. We leverage
                  collective bargaining, expert risk assessment, and transparent
                  operations to turn "rainy day" savings into generational
                  wealth anchors.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-orange-500"></span>

                <span className="text-xs font-semibold uppercase tracking-[3px] text-gray-300">
                  Strategic Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureGridSection
        title="Our Core Values"
        subtitle=""
        // subtitle="Why thousands of investors trust CEPROMAS."
        items={coreValues}
        variant="darkValue"
      />

      <CoreServiceSection service={realEstateService} />

      <Footer />
    </div>
  );
};

export default AboutUs;
