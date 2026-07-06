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
    <section className="bg-[#f4f4f4] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center lg:text-4xl md:text-3xl text-2xl font-bold"
        >
          About US
        </motion.h2>

        <div className="grid gap-12 items-center lg:grid-cols-2">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-10 lg:text-2xl md:text-2xl text-xl font-semibold">
                About CEPROAM
              </h3>

              <p className="leading-8 md:text-base text-sm text-gray-700">
                <span className="font-semibold">CEPROAM</span> is a
                technology-driven agro and real asset management system designed
                to connect investors, individuals, businesses, and institutions
                with profitable opportunities in property solutions, strategic
                asset acquisition, and agriculture investments.
              </p>

              <p className="mt-4 md:text-base text-sm leading-8 text-gray-700">
                It's an integrated asset management and development platform
                focused on agricultural, real estate, and infrastructure
                investments.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 lg:text-2xl md:text-2xl text-xl font-semibold">
                Our Mission
              </h3>

              <p className="leading-8 md:text-base text-sm text-gray-700">
                To democratize access to real estate and agricultural
                investments through secure technology, transparency, and
                innovative financing models.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 lg:text-2xl md:text-2xl text-xl font-semibold">
                Our Vision
              </h3>

              <p className="leading-8 md:text-base text-sm text-gray-700">
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
            className="bg-[#F5F5F8] py-16 px-4"
          >
            <div className="relative mx-auto max-w-6xl">
              {/* Top two cards - keep two columns even on small screens to match example */}
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
                className=" absolute md:left-[200px] left-[60px] top-[100px] sm:top-[200px] md:top-[200px] z-20 flex h-32 w-32 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-xl sm:h-36 sm:w-36 md:h-44 md:w-44
  "
              >
                <div className="text-center">
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    22.5%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
                    TARGET ANNUAL ROI
                  </div>
                </div>
              </motion.div>

              <div className="md:mt-12 mt-8 sm:mt-12">
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
