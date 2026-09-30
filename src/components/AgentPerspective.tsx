import React from "react";

export interface PerspectiveData {
  eyebrow: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

interface AgentPerspectiveProps {
  data: PerspectiveData;
}

const AgentPerspective: React.FC<AgentPerspectiveProps> = ({ data }) => {
  return (
    <section className="w-full bg-[#f7f7fa]">
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-10">
          {/* Image */}
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={data.image}
              alt={data.imageAlt || data.name}
              className="h-[260px] w-full object-cover md:h-[280px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#FF6000]">
              {data.eyebrow}
            </p>

            <blockquote className="text-sm leading-[1.7] text-[#172033] md:text-[15px]">
              "{data.quote}"
            </blockquote>

            <div className="mt-5">
              <p className="text-[9px] font-semibold text-[#172033]">
                {data.name}
              </p>

              <p className="mt-0.5 text-[7px] text-[#172033]">{data.role}</p>
            </div>

            {data.buttonText && (
              <button
                type="button"
                onClick={data.onButtonClick}
                className="
                  mt-6
                  inline-flex
                  items-center
                  justify-center
                  rounded-[3px]
                  bg-[#FF6000]
                  px-5
                  py-2.5
                  text-[8px]
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#e95500]
                "
              >
                {data.buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentPerspective;
