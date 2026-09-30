import React from "react";

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksStepsProps {
  eyebrow: string;
  title: string;
  steps: HowItWorksStep[];
}

const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({
  eyebrow,
  title,
  steps,
}) => {
  return (
    <section className="w-full bg-[#002B68] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
            {eyebrow}
          </p>

          <h2 className="max-w-3xl text-[24px] font-normal leading-[1.2] tracking-[-0.02em] md:text-[42px]">
            {title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={`${step.number}-${index}`}
              className="
                min-h-[180px]
                border-b border-white/10
                px-0 py-6
                sm:px-5
                lg:min-h-[148px]
                lg:border-b-0
                lg:border-r
                lg:border-white/10
                lg:first:border-l
              "
            >
              <span className="block font-serif text-[22px] font-normal leading-none md:text-[24px]">
                {step.number}
              </span>

              <h3 className="mt-4 text-[11px] font-medium leading-[1.3] md:text-[12px]">
                {step.title}
              </h3>

              <p className="mt-2 max-w-[220px] text-[8px] leading-[1.6] text-white/90 md:text-[9px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
