import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";

interface HeroContentProps {
  backgroundImage?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  title?:
    | ReactNode
    | Array<{
        text: string;
        color?: string;
        highlight?: boolean;
      }>;
  subtitle?: string;
  description?: string;
  isActive?: boolean;
}

const HeroContent = ({
  backgroundImage,
  overlayClassName = "",
  overlayStyle,
  title,
  description,
  isActive = false,
}: HeroContentProps) => {
  return (
    // h-[720px]
    <section className="relative h-[620px] w-full overflow-hidden sm:h-[680px] lg:h-[720px]">
      {backgroundImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out ${
            isActive ? "scale-105" : "scale-100"
          }`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {backgroundImage && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${overlayClassName} ${
            isActive ? "opacity-100" : "opacity-90"
          }`}
          style={overlayStyle}
        />
      )}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-5 sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
            scale: 0.98,
          }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 28,
            scale: isActive ? 1 : 0.98,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full max-w-6xl flex-col items-center text-center"
        >
          <h2
            className="
              text-[clamp(2rem,5vw,4rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.025em]
              text-white
            "
          >
            {title
              ? Array.isArray(title)
                ? title.map((part, i) => (
                    <span
                      key={i}
                      className={
                        part.color ??
                        (part.highlight ? "text-orange-500" : "text-white")
                      }
                    >
                      {part.text}
                      {i < title.length - 1 ? " " : ""}
                    </span>
                  ))
                : title
              : "Smarter Property Management System"}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            {description ??
              "We bridge the gap between owners seeking seamless management and tenants seeking quality spaces. Creating a property experience built on trust, clarity and mutual value."}
          </p>

          <div className="mt-7 flex items-center justify-center gap-3 sm:mt-9 sm:gap-4">
            <a
              href="https://ceproam-users.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="min-w-[140px] rounded-md bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:min-w-[160px] sm:px-8 sm:py-4 sm:text-base
                "
              >
                Explore opportunities
              </button>
            </a>

            <a href="https://ceproam-admin.vercel.app/">
              <button className=" min-w-[165px] rounded-md border-2 border-white px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:min-w-[190px] sm:px-8 sm:py-4 sm:text-base">
                List Properties
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContent;
