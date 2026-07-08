import { Check, CalendarDays } from "lucide-react";
import VirtualTourImg from "../../assets/images/virtual-tour.svg";

const VirtualTour = () => {
  const features = [
    "Personalized investment strategy",
    "Live Q&A sessions",
    "Financial projection analysis",
  ];

  return (
    <section className="bg-[#F4F3F8] py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16">
            <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Live Support
            </span>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-[#0D2344] md:text-4xl">
              Schedule a Virtual Tour
            </h2>

            <p className="mb-8 max-w-md text-[16px] leading-7 text-gray-600">
              Want to see our cashew estates or Lagos housing projects
              first-hand? Book a virtual walkthrough with a dedicated portfolio
              manager.
            </p>

            <div className="space-y-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check
                    className="h-5 w-5 text-[#0D2344]"
                    strokeWidth={3}
                  />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 flex w-fit items-center gap-3 rounded-lg bg-[#0D2344] px-7 py-4 font-semibold text-white transition hover:bg-[#18355f]">
              Open Booking Calendar
              <CalendarDays className="h-5 w-5" />
            </button>
          </div>

          <div className="h-[320px] md:h-[450px] lg:h-auto">
            <img
              src={VirtualTourImg}
              alt="Virtual Tour"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
