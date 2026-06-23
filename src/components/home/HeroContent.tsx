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
  overlayClassName = "bg-[#00193CE5]",
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

      <div className="relative z-10 py-4 flex h-full flex-col items-center mx-auto justify-center px-4 text-center">
        <div
          className={`max-w-6xl transform transition-all duration-800 ${
            isActive
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <h1 className="text-3xl font-bold  text-white md:text-6xl">
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

          <p className="mt-6 max-w-4xl text-sm leading-7 mx-auto text-white md:text-lg">
            {description ??
              "We bridge the gap between owners seeking seamless management and tenants seeking quality spaces. Creating a property experience built on trust, clarity and mutual value."}
          </p>

          <div className="mt-8 flex flex-col mx-auto justify-center items-center gap-4 md:flex-row">
            <button className="rounded-md bg-orange-500 px-8 py-4 font-semibold text-white">
              Invest Now
            </button>

            <button className="rounded-md border border-white px-8 py-4 font-semibold text-white">
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
