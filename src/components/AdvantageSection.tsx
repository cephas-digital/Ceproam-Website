import { motion, type Variants } from "framer-motion";

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface AdvantageSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  advantages: Advantage[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const isImage = (icon: string) => {
  return (
    icon.startsWith("/") ||
    icon.startsWith("http://") ||
    icon.startsWith("https://") ||
    icon.startsWith("data:image") ||
    /\.(png|jpg|jpeg|svg|webp|gif)$/i.test(icon)
  );
};

const AdvantageSection = ({
  eyebrow = "WHAT YOU GET",
  title,
  description,
  advantages,
}: AdvantageSectionProps) => {
  return (
    <section className="w-full bg-[#f8f8fc]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-9"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="
              mb-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#122b52]
            "
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="
              max-w-[700px]
              text-[27px]
              font-normal
              leading-[1.25]
              tracking-[-0.025em]
              text-[#0b2850]
              sm:text-[30px]
              lg:text-[32px]
            "
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="
                mt-2
                max-w-[580px]
                text-[11px]
                leading-[1.55]
                text-[#526580]
                sm:text-[12px]
              "
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={`${advantage.title}-${index}`}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
              className="
                min-h-[158px]
                rounded-md
                border
                border-[#e5e5eb]
                bg-white
                p-4
                shadow-[0_2px_8px_rgba(20,35,60,0.02)]
                transition-shadow
                duration-300
                hover:shadow-[0_12px_30px_rgba(20,35,60,0.07)]
                sm:p-5
              "
            >
              <div className="mb-4 flex h-7 items-center">
                {isImage(advantage.icon) ? (
                  <img
                    src={advantage.icon}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                ) : (
                  <span
                    className="
                      text-[20px]
                      leading-none
                    "
                  >
                    {advantage.icon}
                  </span>
                )}
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[18px]
                  font-medium
                  leading-[1.4]
                  text-[#00193C]
                "
              >
                {advantage.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-2
                  max-w-[310px]
                  text-[9px]
                  leading-[1.65]
                  text-[#00193C]
                  sm:text-[14px]
                "
              >
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;
