import type { CSSProperties, ReactNode } from "react";
import SearchCard from "./SearchCard";

interface HeroContentProps {
  backgroundImage?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  title?:
    | ReactNode
    | Array<{ text: string; color?: string; highlight?: boolean }>;
  subtitle?: string;
  description?: string;
  isActive?: boolean;
}

const HeroContent = ({
  backgroundImage,
  overlayClassName = "",
  overlayStyle,
  title,
  // subtitle,
  description,
  isActive = false,
}: HeroContentProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {backgroundImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out transform ${
            isActive ? "scale-105" : "scale-100"
          }`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {backgroundImage && (
        <div
          className={`absolute inset-0 ${overlayClassName} transition-opacity duration-700 ${
            isActive ? "opacity-90" : "opacity-80"
          }`}
          style={overlayStyle}
        />
      )}

      <div className="relative z-10 flex h-screen w-full flex-col items-center justify-start px-4 pt-24 pb-12 text-center lg:justify-center lg:py-4 lg:pt-0">
        <div
          className={`max-w-2xl transform transition-all duration-800 sm:max-w-4xl lg:max-w-6xl ${
            isActive
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title ? (
              Array.isArray(title) ? (
                title.map((part, i) => (
                  <span
                    key={i}
                    className={`${part.color ?? (part.highlight ? "text-orange-500" : "text-white")}`}
                  >
                    {part.text}
                    {i < title.length - 1 ? " " : ""}
                  </span>
                ))
              ) : (
                title
              )
            ) : (
              <>
                Smarter Property Management System,{" "}
                <span className="text-orange-500">Designed Around People</span>{" "}
                and Built for Africa
              </>
            )}
          </h1>

          {/* {subtitle && <h2 className="mt-4 text-lg text-white">{subtitle}</h2>} */}

          <p className="mt-4 text-xs leading-6 text-white sm:text-sm sm:leading-7 md:mt-6 md:text-base lg:text-lg">
            {description ??
              "We bridge the gap between owners seeking seamless management and tenants seeking quality spaces. Creating a property experience built on trust, clarity and mutual value."}
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:gap-4 md:mt-8 md:flex-row">
            <button className="w-full rounded-md bg-orange-500 px-6 py-3 font-semibold text-white sm:w-auto sm:px-8 sm:py-4">
              Invest Now
            </button>

            <button className="w-full rounded-md border border-white px-6 py-3 font-semibold text-white sm:w-auto sm:px-8 sm:py-4">
              Explore Listings
            </button>
          </div>
        </div>

        <SearchCard />
      </div>
    </section>
  );
};

export default HeroContent;
