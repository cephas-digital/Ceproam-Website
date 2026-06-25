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
      card: "transition-all duration-300 ease-out hover:scale-105 hover:border-l-4 hover:border-t-4 hover:border-[#00193C] hover:shadow-[-8px_-8px_20px_rgba(59,130,246,0.3)] rounded-lg",
      iconWrapper: "bg-[#00193C0D] mx-auto",
      title: "text-[#00193C]",
      text: "text-slate-500",
      cols: "lg:grid-cols-4 text-center",
    },

    dark: {
      section: "bg-gradient-to-t from-[#00193C] to-[#0044A2]",
      card: "bg-white/2 border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out hover:scale-105 hover:border-l-4 hover:border-t-4 hover:border-b[#00193C] hover:shadow-[-8px_-8px_20px_rgba(147,197,253,0.4)]",
      iconWrapper: "text-orange-500 font-bold w-20",
      title: "text-white",
      text: "text-slate-300",
      cols: "lg:grid-cols-4",
    },

    compact: {
      section: "bg-[#F4F3F8]",
      card: "bg-white rounded-xl p-6 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:border-l-4 hover:border-t-4 hover:border-[#00193C] hover:shadow-[-8px_-8px_20px_rgba(59,130,246,0.3)]",
      iconWrapper: "text-orange-500 mx-auto font-bold",
      title: "text-[#00193C]",
      text: "text-slate-500",
      cols: "lg:grid-cols-5 text-center",
    },
  };

  const current = styles[variant];

  return (
    <section className={`${current.section} py-20`}>
      <div className="mx-auto w-full lg:px-28 md:px-14 px-6 ">
        <div className="mb-14 text-center">
          <h2 className={`text-4xl font-bold ${current.title}`}>{title}</h2>

          <p className={`mt-2 ${current.text}`}>{subtitle}</p>
        </div>

        <div className={`grid gap-6  md:grid-cols-2 ${current.cols}`}>
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={current.card}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${current.iconWrapper}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className={`mb-2 text-xl font-semibold ${current.title}`}>
                  {item.title}
                </h3>

                <p className={current.text}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
