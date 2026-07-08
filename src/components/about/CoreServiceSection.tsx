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
    <section className="md:py-20 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          {heading && (
            <div className="mb-16 text-center">
              <h2 className="md:text-4xl text-2xl font-bold text-slate-900">
                {heading}
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-orange-500" />
            </div>
          )}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {service.imagePosition !== "right" && (
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="h-[500px] w-full rounded-lg object-cover "
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
                className="h-[500px] w-full rounded-lg object-cover "
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoreServiceSection;
