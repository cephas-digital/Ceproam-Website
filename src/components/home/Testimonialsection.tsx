// components/TestimonialsSection.tsx

import { FaStar } from "react-icons/fa";

import { stats, testimonials } from "../../data/testimonial";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F6F6F8]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
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

                <h3 className="mt-6 text-5xl font-bold tracking-tight">
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

        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0A2540]">
              What Our Partners and Clients Say
            </h2>

            <p className="mt-3 text-slate-500">
              Real stories from real investors who have built wealth with{" "}
              <span className="font-semibold">CEPROAM.</span>
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#FF6B00]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      size={14}
                    />
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  "{testimonial.review}"
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#001F54] text-sm font-semibold text-white">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0A2540]">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
