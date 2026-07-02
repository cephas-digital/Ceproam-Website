// components/TestimonialsSection.tsx

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

import { testimonials } from "../../data/testimonial";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-[#ffffff]">
      <div className="mx-auto max-w-7xl md:px-0 px-6 md:py-16 py-8">
        <div className="mt-24">
          <div className="text-center">
            <h2 className="md:text-4xl text-2xl font-bold  text-[#0A2540]">
              What Our Partners and Clients Say
            </h2>

            <p className="mt-3 text-slate-500">
              Real stories from real investors who have built wealth with{" "}
              <span className="font-semibold">CEPROAM.</span>
            </p>
          </div>

          <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-xl border border-[#C4C6D1] bg-[#FAF9FE] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
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

          <div className="mt-14 lg:hidden">
            <div className="rounded-xl border border-[#C4C6D1] bg-[#FAF9FE] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    aria-label="Show previous testimonial"
                    onClick={showPrevious}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C4C6D1] bg-white text-[#0A2540] transition hover:bg-[#001F54] hover:text-white"
                  >
                    <FaArrowLeft size={14} />
                  </button>
                  <button
                    aria-label="Show next testimonial"
                    onClick={showNext}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C4C6D1] bg-white text-[#0A2540] transition hover:bg-[#001F54] hover:text-white"
                  >
                    <FaArrowRight size={14} />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mt-6 flex gap-1 text-[#FF6B00]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        size={14}
                      />
                    ))}
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-slate-600">
                    "{activeTestimonial.review}"
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#001F54] text-sm font-semibold text-white">
                      {activeTestimonial.initials}
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#0A2540]">
                        {activeTestimonial.name}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? "bg-[#001F54]" : "bg-[#C4C6D1]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
