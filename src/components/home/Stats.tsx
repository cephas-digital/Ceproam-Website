import { stats } from "../../data/testimonial";

const Stats = () => {
  return (
    <section className=" bg-[#F6F6F8] py-12">
      <div className=" max-w-7xl mx-auto md:px-0 px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className={`
                            relative overflow-hidden rounded-xl border
                            px-6 py-5 shadow-sm transition-all duration-300
                            hover:-translate-y-1 hover:shadow-md
                            ${
                              stat.highlighted
                                ? "border-[#001F54] bg-[#001F54] text-white"
                                : "border-gray-200 bg-white text-[#0A2540]"
                            }
                          `}
              >
                <div
                  className={`
                              absolute left-0 top-0 h-1 w-full
                              ${
                                stat.highlighted
                                  ? "bg-[#001F54]"
                                  : stat.id === 3
                                    ? "bg-[#FF6B00]"
                                    : "bg-[#0A2540]"
                              }
                            `}
                />

                <Icon
                  size={20}
                  className={
                    stat.highlighted ? "text-[#FF6B00]" : "text-[#0A2540]"
                  }
                />

                <h3 className="mt-6 md:text-5xl text-2xl font-bold tracking-tight">
                  {stat.value}
                </h3>

                <p
                  className={`mt-1 text-sm font-medium uppercase tracking-wider ${
                    stat.highlighted ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
