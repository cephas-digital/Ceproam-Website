import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import About from "../assets/images/aboutpics.svg";
import vision from "../assets/images/vision.svg";
import mission from "../assets/images/mission.svg";
import RealEsateOne from "../assets/images/real-estateOne.png";
import RealEsateTwo from "../assets/images/Background.png";
import RealEsateThree from "../assets/images/real-esatte-3.png";
import Footer from "../components/shared/Footer";
import { coreValues } from "../data/core-values";
import { FeatureGridSection } from "../components/ui/FeaturedGrid";
import CoreServiceSection from "../components/about/CoreServiceSection";
import { agroManagementService, realEstateService } from "../data/data";
import MeetTheTeam from "../components/team/Meet-the-team";

const AboutUs = () => {
  return (
    <div className="font-Outfit">
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="relative z-10 mx-auto flex  md:min-h-screen h-[420px] sm:h-[520px] md:h-[600px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-0 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b00]">
              Ceproam
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.1]">
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

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="w-full rounded-lg bg-[#ff6b00] px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto">
                Download Prospectus
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/50 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto">
                Our Strategic Model
                <FiArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-7"
            >
              <h2 className="mb-6 text-2xl font-bold text-[#0B3B82] sm:text-3xl">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl lg:col-span-5"
            >
              <img
                src={vision}
                alt="Vision"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="overflow-hidden rounded-2xl lg:col-span-4"
            >
              <img
                src={mission}
                alt="Mission"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="rounded-2xl bg-[#051D47] p-6 text-white sm:p-8 lg:col-span-8"
            >
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
                Our Mission
              </h2>

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
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureGridSection
        title="Our Core Values"
        subtitle=""
        items={coreValues}
        variant="darkValue"
      />

      <CoreServiceSection
        heading="Our Core Services"
        service={realEstateService}
      />

      <CoreServiceSection service={agroManagementService} />

      <section className="bg-[#F7F7FA] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="md:text-3xl text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#00193C] to-[#0044A2] sm:text-4xl">
              Why Agriculture & Real Estate?
            </h2>

            <p className="mt-6 text-sm sm:text-base  max-w-lg leading-8 text-gray-600">
              The Nigerian market presents a unique opportunity: high urban
              expansion rates coupled with an urgent need for food security. We
              invest where the demand is fundamental and inescapable.
            </p>

            <div className="mt-10 rounded-lg bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h4 className="text-sm font-bold uppercase tracking-wide text-[#0B2C66]">
                  Urban Expansion Index
                </h4>

                <span className="font-semibold text-sm sm:text-base  text-orange-500">
                  +5.8x Annual
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-full w-[82%] rounded-full bg-orange-500" />
              </div>

              <p className="mt-3 text-sm sm:text-base   text-gray-500">
                Projected demand for residential housing in Lagos over the next
                10 years.
              </p>
            </div>

            <div className="mt-6 rounded-lg bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h4 className="text-sm sm:text-base  font-bold uppercase tracking-wide text-[#0B2C66]">
                  Agro-Export Demand
                </h4>

                <span className="font-semibold text-orange-500">
                  Strong Growth
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-full w-[75%] rounded-full bg-[#0B2C66]" />
              </div>

              <p className="mt-3 text-sm text-gray-500">
                Global cashew consumption is increasing, making it a high-value
                export hedge against inflation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={RealEsateOne}
              alt="Building"
              className="h-48 w-full rounded-lg object-cover sm:h-56"
            />

            <div className="flex h-48 flex-col items-center justify-center rounded-lg bg-orange-500 text-white sm:h-56">
              <h3 className="md:text-4xl text-2xl font-bold sm:text-5xl">
                22.5%
              </h3>

              <p className="mt-2 md:text-sm text-xs font-semibold uppercase tracking-widest">
                Target Annual ROI
              </p>
            </div>

            <img
              src={RealEsateTwo}
              alt="Construction"
              className="h-56 w-full rounded-lg object-cover sm:h-72"
            />

            <img
              src={RealEsateThree}
              alt="Farm"
              className="h-56 w-full rounded-lg object-cover sm:h-72"
            />
          </motion.div>
        </div>
      </section>

      <MeetTheTeam />

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

export default AboutUs;
