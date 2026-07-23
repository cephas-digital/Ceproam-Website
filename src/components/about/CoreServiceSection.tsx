import { CheckCircle2 } from "lucide-react";

export interface ServiceItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  features: string[];

  quote?: string;
  imagePosition?: "left" | "right";
}

interface CoreServiceSectionProps {
  service: ServiceItem;
  heading?: string;
}

const CoreServiceSection = ({ service, heading }: CoreServiceSectionProps) => {
  return (
    <section className="py-6 md:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          {heading && (
            <div className="mb-16 text-center">
              <h2 className="md:text-4xl text-2xl font-bold text-slate-900">
                {heading}
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-orange-500" />
            </div>
          )}
        </div>

        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {service.imagePosition !== "right" && (
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="h-[320px] w-full rounded-lg object-cover sm:h-[380px] md:h-[420px] lg:h-[500px]"
              />
            </div>
          )}

          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              {service.category}
            </span>

            <h3 className="mt-4 md:text-4xl text-2xl font-bold leading-tight text-[#00193C]">
              {service.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              {service.description}
            </p>

            {service.features?.length ? (
              <div className="mt-8 space-y-5">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-800"
                  >
                    <CheckCircle2
                      className="text-orange-500"
                      size={20}
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            ) : service.quote ? (
              <div className="mt-8 border-l-4 border-orange-500 bg-gray-100 p-6">
                <p className="text-lg font-semibold italic text-[#0F2B5B]">
                  "{service.quote}"
                </p>
              </div>
            ) : null}
          </div>

          {service.imagePosition === "right" && (
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="h-[320px] w-full rounded-lg object-cover sm:h-[380px] md:h-[420px] lg:h-[500px]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoreServiceSection;
