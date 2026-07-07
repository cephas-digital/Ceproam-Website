import { motion } from "motion/react";
import ContactImg from "../assets/images/contact-us.svg";
import ContactSection from "../components/contact/Contact";

import Footer from "../components/shared/Footer";
import VirtualTour from "../components/contact/Virtual-tour";
const ContactUs = () => {
  return (
    <div className=" font-Outfit">
      <section
        className="relative h-[440px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(#00193C, #00193C00), url(${ContactImg})`,
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
            <p className="mb-4 text-sm font-semibold uppercase text-[#FF5500]  py-1 px-3 rounded-full">
              GET IN TOUCH
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.1]">
              Let's
              <span className="text-[#FF5500]"> Build</span> Your Asset
              Portfolio
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Expert perspectives on Nigerian real estate, sustainable
              agribusiness, and strategic
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* <CoreServiceSection
        heading=""
        service={realEstateService}
      /> */}

      <VirtualTour />

      <Footer />
    </div>
  );
};

export default ContactUs;
