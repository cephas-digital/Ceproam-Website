// AboutSection.tsx
import { motion } from "motion/react";
import About from "../../assets/images/About1.png";
import AboutTwo from "../../assets/images/About2.png";
import AboutThree from "../../assets/images/About3.png";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center lg:text-4xl md:text-3xl text-2xl font-bold"
        >
          About US
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-4 lg:text-2xl md:text-2xl text-xl font-semibold">
                About CEPROMAS
              </h3>

              <p className="leading-8 text-gray-700">
                <span className="font-semibold">CEPROMAS</span> is a
                technology-driven agro and real asset management system designed
                to connect investors, individuals, businesses, and institutions
                with profitable opportunities in property solutions, strategic
                asset acquisition, and agriculture investments.
              </p>

              <p className="mt-4 leading-8 text-gray-700">
                It's an integrated asset management and development platform
                focused on agricultural, real estate, and infrastructure
                investments.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 lg:text-2xl md:text-2xl text-xl font-semibold">
                Our Mission
              </h3>

              <p className="leading-8 text-gray-700">
                To democratize access to real estate and agricultural
                investments through secure technology, transparency, and
                innovative financing models.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 lg:text-2xl md:text-2xl text-xl font-semibold">
                Our Vision
              </h3>

              <p className="leading-8 text-gray-700">
                To become Africa's leading digital ecosystem for real estate
                access, property ownership, and agricultural investment
                opportunities.
              </p>

              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 flex items-center gap-2 font-semibold text-orange-500 transition hover:text-orange-600"
              >
                Learn More about CEPROMAS
                <span>→</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid h-fit grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={imageVariants}
              className="overflow-hidden rounded-2xl"
            >
              <motion.img
                src={About}
                alt="Luxury Property"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="overflow-hidden rounded-2xl"
            >
              <motion.img
                src={AboutTwo}
                alt="Agriculture"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl bg-orange-500 text-white"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 107, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4
                className="text-5xl font-bold"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                22.5%
              </motion.h4>
              <motion.p
                className="mt-2 text-sm uppercase tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Target Annual ROI
              </motion.p>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="overflow-hidden rounded-2xl"
            >
              <motion.img
                src={AboutThree}
                alt="Modern Building"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
