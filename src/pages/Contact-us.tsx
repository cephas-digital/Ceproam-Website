import { motion } from "motion/react";
import ContactImg from "../assets/images/contact-us.svg";
import ContactSection from "../components/contact/Contact";
import CoreServiceSection from "../components/about/CoreServiceSection";
import { realEstateService } from "../data/data";
import Footer from "../components/shared/Footer";
import VirtualTour from "../components/contact/Virtual-tour";
const ContactUs = () => {
  return (
    <div className=" font-Outfit">
      <section
        className="relative h-[440px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,25,60,0.65), rgba(0,25,60,0.65)), url(${ContactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="relative z-10 mt-16 mx-auto flex items-center px-4 py-24 sm:px-6 lg:px-24 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF5500]">
              GET IN TOUCH
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.1]">
              Let's
              <span className="text-[#FF5500]"> Build</span> Your Asset
              Portfolio
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Connect with our investment experts to secure your future through
              diversified real estate and agribusiness opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      <CoreServiceSection
        heading=""
        service={realEstateService}
      />

      <VirtualTour />

      <Footer />
    </div>
  );
};

export default ContactUs;
