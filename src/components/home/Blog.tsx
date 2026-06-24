// components/TestimonialsSection.tsx

import { FaStar } from "react-icons/fa";

import { testimonials } from "../../data/testimonial";

export default function Blog() {
  return (
    <section className="bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0A2540]">Recent Blogs</h2>

            <p className="mt-3 text-slate-500">
              Stay updated with the latest trends in real estate and
              agribusiness.
              <span className="font-semibold">CEPROAM.</span>
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-xl border border-[#C4C6D1] bg-[#FAF9FE] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
