import { motion } from "motion/react";
import type { FeatureGridSectionProps } from "../../types/types";

export function FeatureGridSection({
  title,
  subtitle,
  items,
  variant = "light",
}: FeatureGridSectionProps) {
  const styles = {
    light: {
      section: "bg-[#F4F3F8]",
      card: "transition-all duration-300 ease-out hover:scale-[1.01] hover:border-l-4 hover:border-t-4 hover:border-[#00193C] hover:shadow-[-8px_-8px_20px_rgba(59,130,246,0.3)] rounded-lg",
      iconWrapper: "bg-[#00193C0D] mx-auto",
      title: "text-[#00193C]",
      text: "text-slate-500",
      cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center",
    },

    dark: {
      section: "bg-gradient-to-t from-[#00193C] to-[#0044A2]",
      card: "bg-white/2 border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out hover:scale-[1.01] hover:border-l-4 hover:border-t-4 hover:border-b[#00193C] hover:shadow-[-8px_-8px_20px_rgba(147,197,253,0.4)]",
      iconWrapper: "text-orange-500 font-bold w-20",
      title: "text-white",
      text: "text-slate-300",
      cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },

    darkValue: {
      section: "bg-gradient-to-t from-[#00193C] to-[#0044A2]",
      card: "bg-white/2 border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out hover:scale-[1.01] hover:border-l-4 hover:border-t-4 hover:border-b[#00193C] hover:shadow-[-8px_-8px_20px_rgba(147,197,253,0.4)]",
      iconWrapper:
        "text-[#7796D1] bg-gradient-to-t from-[#00193C] to-[#0044A2] font-bold ",
      title: "text-white",
      text: "text-slate-300",
      cols: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
    },

    compact: {
      section: "bg-[#F4F3F8]",
      card: "bg-white rounded-xl p-6 shadow-sm transition-all duration-300 ease-out hover:scale-[1.01] hover:border-l-4 hover:border-t-4 hover:border-[#00193C] hover:shadow-[-8px_-8px_20px_rgba(59,130,246,0.3)]",
      iconWrapper: "text-orange-500 mx-auto font-bold",
      title: "text-[#00193C]",
      text: "text-slate-500",
      cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-center",
    },
  };

  const current = styles[variant];
  const isLightCompact = variant === "light" && items.length <= 3;
  const sectionBg = isLightCompact ? "bg-white" : current.section;
  const gridCols = isLightCompact
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center"
    : current.cols;

  return (
    <section className={`${sectionBg} py-14 sm:py-16 lg:py-20`}>
      <div className="mx-auto w-full px-4 sm:px-6 md:px-14 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-14"
        >
          <h2 className={`text-2xl font-bold  md:text-4xl ${current.title}`}>
            {title}
          </h2>

          <p className={`mt-2 md:text-base text-sm ${current.text}`}>
            {subtitle}
          </p>
        </motion.div>

        <div className={`grid gap-8 sm:gap-6 ${gridCols}`}>
          {items.map((item, index) => {
            const Icon = item.icon as React.ElementType | undefined;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={current.card}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${current.iconWrapper}`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : Icon ? (
                    <Icon size={30} />
                  ) : null}
                </div>

                <h3
                  className={`mb-2 md:text-xl font-semibold ${current.title}`}
                >
                  {item.title}
                </h3>

                <p className={`mt-2 text-sm sm:text-base ${current.text}`}>
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
