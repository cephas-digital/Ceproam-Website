import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import { FiAward, FiFileText, FiCreditCard } from "react-icons/fi";

export interface AgentHeroStat {
  value: string;
  label: string;
  icon: IconType | string;
}

export interface AgentHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;

  buttonText?: string;
  onButtonClick?: () => void;

  note?: string;

  stats?: AgentHeroStat[];
}

const defaultStats: AgentHeroStat[] = [
  {
    value: "3×",
    label: "Higher buyer trust with verified badge",
    icon: FiAward,
  },
  {
    value: "48h",
    label: "Title verification turnaround",
    icon: FiFileText,
  },
  {
    value: "0%",
    label: "Commission disputes on escrow closes",
    icon: FiFileText,
  },
  {
    value: "100%",
    label: "Digital, paperless transaction flow",
    icon: FiCreditCard,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AgentHero({
  eyebrow = "FOR PROPERTY AGENTS & BROKERS",
  title,
  description,
  buttonText = "Register as a Realtor",
  onButtonClick,
  note = "No upfront listing fees · Verified within 48 hours",
  stats = defaultStats,
}: AgentHeroProps) {
  return (
    <section className="w-full font-Outfit overflow-hidden bg-[#f8f8fc]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[570px]">
            {/* Eyebrow */}
            <motion.div variants={fadeUpVariants}>
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-[#eef0f7]
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#00193C]
                "
              >
                {eyebrow}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUpVariants}
              className="
                mt-8
                max-w-[540px]
                text-[42px]
                font-normal
                leading-[1.25]
                tracking-[-0.035em]
                text-[#00193C]
                sm:text-[50px]
                lg:text-[54px]
                xl:text-[58px]
              "
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="
                mt-6
                max-w-[535px]
                text-[14px]
                font-normal
                leading-[1.75]
                text-[#00193C]
                sm:text-[15px]
              "
            >
              {description}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-7"
            >
              <motion.button
                type="button"
                onClick={onButtonClick}
                whileHover={{
                  scale: 1.025,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  rounded-[4px]
                  bg-[#ff6200]
                  px-6
                  py-3.5
                  text-[13px]
                  font-medium
                  text-white
                  shadow-[0_8px_20px_rgba(255,98,0,0.12)]
                  transition-shadow
                  hover:shadow-[0_12px_28px_rgba(255,98,0,0.2)]
                "
              >
                {buttonText}
              </motion.button>
            </motion.div>

            {/* Small note */}
            {note && (
              <motion.p
                variants={fadeUpVariants}
                className="
                  mt-4
                  text-[11px]
                  tracking-[0.01em]
                  text-[#a1aabd]
                "
              >
                {note}
              </motion.p>
            )}
          </div>

          {/* RIGHT STAT CARDS */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={`${stat.value}-${index}`}
                  variants={fadeUpVariants}
                  whileHover={{
                    y: -4,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="
                    group
                    min-h-[175px]
                    rounded-[12px]
                    border
                    border-[#dfe1e9]
                    bg-[#eeeff5]
                    p-5
                    transition-shadow
                    duration-300
                    hover:shadow-[0_12px_30px_rgba(15,35,70,0.07)]
                    sm:p-6
                  "
                >
                  {/* Value */}
                  <div
                    className="
                      text-[25px]
                      font-normal
                      leading-none
                      tracking-[-0.03em]
                      text-[#08234d]
                    "
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p
                    className="
                      mt-3
                      max-w-[220px]
                      text-[13px]
                      leading-[1.45]
                      text-[#8290a9]
                    "
                  >
                    {stat.label}
                  </p>

                  {/* Icon */}
                  <div className="mt-7">
                    <Icon
                      size={43}
                      strokeWidth={1.15}
                      className="
                        text-[#10264b]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
