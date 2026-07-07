import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
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
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen w-full overflow-hidden">
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

      <div className="relative z-10 flex md:min-h-screen h-[420px] sm:h-[520px] md:h-[600px] w-full flex-col items-center justify-start px-4 pt-20 pb-24 text-center sm:px-6 lg:justify-center lg:py-4 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 24,
            scale: isActive ? 1 : 0.97,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl transform transition-all duration-800 sm:max-w-4xl lg:max-w-6xl"
        >
          <h1 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
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
                {/* <span className="text-orange-500">Designed Around People</span>{" "}
                and Built for Africa */}
              </>
            )}
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:mt-6 lg:text-lg">
            {description ??
              "We bridge the gap between owners seeking seamless management and tenants seeking quality spaces. Creating a property experience built on trust, clarity and mutual value."}
          </p>

          <div className="mt-6 flex w-full flex-row items-center justify-center gap-3 sm:gap-4 md:mt-8 md:flex-row">
            <button className="lg:w-[162px] md:w-auto w-[140px] rounded-xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-orange-600 sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
              Invest Now
            </button>

            <button className=" lg:w-[201px] md:w-auto w-[180px] rounded-xl border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
              Explore Listings
            </button>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 w-full  px-0 sm:mt-10 lg:absolute lg:bottom-[-36px] lg:left-1/2 lg:mt-0 lg:w-[calc(100%-2rem)] lg:-translate-x-1/2 lg:px-4"
        >
          <div className="w-full">
            <SearchCard />
          </div>
        </motion.div> */}

        <div className=" md:max-w-2xl mt-8 w-full  px-0 sm:mt-10 lg:absolute lg:bottom-[-36px] lg:left-1/2 lg:mt-0 lg:w-[calc(100%-2rem)] lg:-translate-x-1/2 lg:px-4 mx-auto">
          <SearchCard />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
