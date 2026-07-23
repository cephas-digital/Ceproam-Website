import { motion } from "motion/react";
import About from "../../assets/images/About1.png";
import AboutTwo from "../../assets/images/About2.png";
import AboutThree from "../../assets/images/About3.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-16 md:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-2xl font-bold md:mb-12 md:text-3xl lg:mb-14 lg:text-4xl"
        >
          About US
        </motion.h2>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-xl font-semibold md:mb-8 md:text-2xl lg:mb-10 lg:text-2xl">
                About CEPROAM
              </h3>

              <p className="text-sm leading-8 text-gray-700 md:text-base">
                <span className="font-semibold">CEPROAM</span> is a
                technology-driven agro and real asset management system designed
                to connect investors, individuals, businesses, and institutions
                with profitable opportunities in property solutions, strategic
                asset acquisition, and agriculture investments.
              </p>

              <p className="mt-4 text-sm leading-8 text-gray-700 md:text-base">
                It's an integrated asset management and development platform
                focused on agricultural, real estate, and infrastructure
                investments.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
                Our Mission
              </h3>

              <p className="text-sm leading-8 text-gray-700 md:text-base">
                To democratize access to real estate and agricultural
                investments through secure technology, transparency, and
                innovative financing models.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
                Our Vision
              </h3>

              <p className="text-sm leading-8 text-gray-700 md:text-base">
                To become Africa's leading digital ecosystem for real estate
                access, property ownership, and agricultural investment
                opportunities.
              </p>
            </motion.div>

            <Link to="about">
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-600"
              >
                Learn More about CEPROMAS
                <FaArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#F5F5F8] px-3 py-10 sm:px-4 md:px-5 md:py-12 lg:py-16"
          >
            <div className="relative mx-auto max-w-6xl">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-[160px] sm:h-[200px] md:h-[260px] overflow-hidden rounded-2xl"
                >
                  <motion.img
                    src={About}
                    alt="Properties"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-sm sm:text-xl md:text-3xl font-semibold text-white">
                    Properties
                  </h3>
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-[160px] sm:h-[200px] md:h-[260px] overflow-hidden rounded-2xl"
                >
                  <motion.img
                    src={AboutTwo}
                    alt="Agriculture"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-sm sm:text-xl md:text-3xl font-semibold text-white">
                    Agriculture
                  </h3>
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="absolute md:left-[200px] left-20 sm:left-14 top-[100px] sm:top-[200px] md:top-[200px] z-20 flex h-32 w-32 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-xl sm:h-36 sm:w-36 md:h-44 md:w-44"
              >
                {/* <div className="text-center">
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    22.5%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
                    TARGET ANNUAL ROI
                  </div>
                </div> */}
                <div className="flex h-full w-full flex-col items-center justify-center text-center px-3">
                  <span className="text-xl font-bold sm:text-3xl md:text-4xl leading-none">
                    22.5%
                  </span>

                  <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase leading-tight">
                    TARGET ANNUAL
                    <br />
                    ROI
                  </span>
                </div>
              </motion.div>

              <div className="md:mt-4 mt-4 sm:mt-4">
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-[160px] sm:h-[200px] md:h-[260px] overflow-hidden rounded-2xl"
                >
                  <motion.img
                    src={AboutThree}
                    alt="Investments"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-sm sm:text-xl md:text-3xl font-semibold text-white">
                    Investments
                  </h3>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
