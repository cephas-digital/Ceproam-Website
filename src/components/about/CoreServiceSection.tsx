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
}

const CoreServiceSection = ({ service }: CoreServiceSectionProps) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Core Services
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="h-[500px] w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* <div className="grid items-center gap-12 lg:grid-cols-2">
            {service.imagePosition !== "right" && Image}

            {Text}

            {service.imagePosition === "right" && Image}
          </div> */}

          {/* Text */}
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              {service.category}
            </span>

            <h3 className="mt-4 text-4xl font-bold leading-tight text-[#0F2B5B]">
              {service.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              {service.description}
            </p>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServiceSection;
