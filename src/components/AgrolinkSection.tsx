import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  Handshake,
  Lightbulb,
  Building2,
  Truck,
  Warehouse,
} from "lucide-react";

const participants = [
  {
    icon: Sprout,
    title: "Farmers",
  },
  {
    icon: Handshake,
    title: "Buyers & Sellers",
  },
  {
    icon: Lightbulb,
    title: "Consultants",
  },
  {
    icon: Building2,
    title: "Financial Institutions",
  },
  {
    icon: Truck,
    title: "Logistics",
  },
  {
    icon: Warehouse,
    title: "Warehouse Owners",
  },
];

const steps = [
  {
    number: "01",
    label: "DISCOVERY",
    title: "Browse Vetted Listings & Portfolios",
    description:
      "Filter through legal-checked properties or open agro-investment syndicates with upfront financials, tenors, and risk profiles.",
  },
  {
    number: "02",
    label: "EXECUTION",
    title: "Execute Contracts via Digital Escrow",
    description:
      "Sign legal documentation digitally and complete secure transactions. Funds are safeguarded in regulated escrow accounts.",
  },
  {
    number: "03",
    label: "MANAGEMENT",
    title: "Track Appreciations & Harvest Distributions",
    description:
      "Receive live milestones, inspect seasonal performance reports, and withdraw earnings or rental yields directly to your bank account.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AgroLinkSection() {
  return (
    <main className="w-full overflow-hidden font-Outfit bg-[#f5f4f8]">
      <section className="px-5 py-10 md:py-12 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid overflow-hidden rounded-xl bg-white md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              custom={0}
              className="px-7 py-9 md:px-10 md:py-10"
            >
              <div className="mb-4 inline-flex rounded-full bg-[#f5eddb] px-3 py-1">
                <span className="text-[7px] bg-[#C8A84E26] font-medium uppercase tracking-[0.18em] text-[#C8A84E]">
                  From the Ceproam Ecosystem
                </span>
              </div>

              <h1 className="font-serif text-[30px] font-normal italic leading-none tracking-[-0.04em] text-[#ef5b24] md:text-[34px]">
                Agro<span className="text-[#10284a]">Link</span>
              </h1>

              <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#506078]">
                Agricultural Market Network
              </p>

              <p className="mt-6 max-w-[365px] text-[10px] md:text-sm leading-[1.65] text-[#00193CF4]">
                AgroLink bridges every node of the agricultural value chain
                —connecting people and institutions who grow, move, store, fund,
                and trade commodities on a single verified marketplace.
              </p>

              <a
                href="https://agrolink-phi-seven.vercel.app/"
                target="_blank"
              >
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-flex items-center gap-3 rounded-sm bg-[#00193CF4] px-4 py-2.5 md:text-[12px] text-[9px] font-medium text-white"
                >
                  Explore AgroLink
                  <ArrowRight
                    size={12}
                    strokeWidth={1.5}
                  />
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.15}
              className="px-7 pb-9 md:px-8 md:py-10"
            >
              <p className="mb-3 md:text-[12px] font-medium uppercase tracking-[0.18em] text-[#00193CB2]">
                Who It Connects
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {participants.map((participant, index) => {
                  const Icon = participant.icon;

                  return (
                    <motion.div
                      key={participant.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 + index * 0.07,
                      }}
                      whileHover={{
                        y: -3,
                        transition: { duration: 0.2 },
                      }}
                      className="flex min-h-[105px] flex-col space-y-4 rounded-md border border-[#dfe2e7] bg-[#f7f8f9] p-3"
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#a1a94b]"
                      />

                      <p className="text-[8px] md:text-[14px] font-medium text-[#00193CF4]">
                        {participant.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <p className="mt-4 md:text-[12px] text-[8px] leading-[1.5] text-[#00193CF4]">
                One platform. Every participant. Zero friction between harvest
                and transaction.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-tr from-[#00193C] to-[#0044A2]  px-6 py-16 md:py-20 ">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[#0754aa]/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mb-10"
          >
            <p className="mb-3 text-[7px] font-semibold uppercase tracking-[0.2em] text-[#ef6b2b]">
              How It Works
            </p>

            <h2 className="max-w-[750px] text-[27px] font-normal leading-[1.15] tracking-[-0.035em] text-white md:text-[30px] lg:text-[32px]">
              From Selection to Settlement in Three Steps
            </h2>
          </motion.div>

          <div className="grid border-t border-white/10 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                custom={index * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`relative px-0 py-7 md:px-7 md:py-7 ${
                  index !== 0 ? "border-t md:border-l md:border-t-0" : ""
                } border-white/10`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-serif text-[48px] font-normal text-white/25">
                    {step.number}
                  </span>

                  <span className="text-[7px] font-medium uppercase tracking-[0.16em] text-white">
                    {step.label}
                  </span>
                </div>

                <h3 className="max-w-[220px] font-serif text-[15px] font-normal leading-[1.2] text-white md:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[300px] text-[8px] md:text-sm  text-white/75">
                  {step.description}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.15,
                  }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/10 md:hidden"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
