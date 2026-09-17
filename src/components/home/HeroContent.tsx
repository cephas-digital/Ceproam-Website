// import type { CSSProperties, ReactNode } from "react";
// import { motion } from "motion/react";
// // import SearchCard from "./SearchCard";
// import { Link } from "react-router";

// interface HeroContentProps {
//   backgroundImage?: string;
//   overlayClassName?: string;
//   overlayStyle?: CSSProperties;
//   title?:
//     | ReactNode
//     | Array<{ text: string; color?: string; highlight?: boolean }>;
//   subtitle?: string;
//   description?: string;
//   isActive?: boolean;
// }

// const HeroContent = ({
//   backgroundImage,
//   overlayClassName = "",
//   overlayStyle,
//   title,
//   // subtitle,
//   description,
//   isActive = false,
// }: HeroContentProps) => {
//   return (
//     <section className="relative min-h-[74vh] sm:min-h-[80vh] md:min-h-screen w-full overflow-hidden">
//       {backgroundImage && (
//         <div
//           className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out transform ${
//             isActive ? "scale-105" : "scale-100"
//           }`}
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />
//       )}

//       {backgroundImage && (
//         <div
//           className={`absolute inset-0 ${overlayClassName} transition-opacity duration-700 ${
//             isActive ? "opacity-90" : "opacity-80"
//           }`}
//           style={overlayStyle}
//         />
//       )}

//       <div className="relative z-10 min-h-[700px] sm:min-h-[520px] flex md:min-h-screen md:h-[500px] w-full flex-col items-center justify-start px-4 pt-20 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-14 md:justify-center md:py-4 md:pt-0 md:pb-12 lg:justify-center lg:py-4 lg:pt-0">
//         <motion.div
//           initial={{ opacity: 0, y: 32, scale: 0.97 }}
//           animate={{
//             opacity: isActive ? 1 : 0,
//             y: isActive ? 0 : 24,
//             scale: isActive ? 1 : 0.97,
//           }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           // sm:max-w-4xl lg:max-w-5xl max-w-2xl
//           className=" transform transition-all duration-800 sm:max-w-4xl lg:max-w-5xl max-w-2xl "
//         >
//           <h1 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//             {title ? (
//               Array.isArray(title) ? (
//                 title.map((part, i) => (
//                   <span
//                     key={i}
//                     className={`${part.color ?? (part.highlight ? "text-orange-500" : "text-white")}`}
//                   >
//                     {part.text}
//                     {i < title.length - 1 ? " " : ""}
//                   </span>
//                 ))
//               ) : (
//                 title
//               )
//             ) : (
//               <>
//                 Smarter Property Management System,{" "}
//                 {/* <span className="text-orange-500">Designed Around People</span>{" "}
//                 and Built for Africa */}
//               </>
//             )}
//           </h1>

//           <p className="mt-4 text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:mt-6 lg:text-lg">
//             {description ??
//               "We bridge the gap between owners seeking seamless management and tenants seeking quality spaces. Creating a property experience built on trust, clarity and mutual value."}
//           </p>

//           <div className="mt-6 flex w-full flex-row items-center justify-center gap-3 sm:gap-4 md:mt-8 md:flex-row">
//             <a href="https://cepromas-users-admin.vercel.app">
//               <button className="lg:w-[162px] md:w-auto w-[140px] rounded-md bg-orange-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-orange-600 sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
//                 Invest Now
//               </button>
//             </a>

//             <Link to="/listings">
//               <button className=" lg:w-[201px] md:w-auto w-[180px] rounded-md border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
//                 Explore Listings
//               </button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//           className="mt-8 w-full  px-0 sm:mt-10 lg:absolute lg:bottom-[-36px] lg:left-1/2 lg:mt-0 lg:w-[calc(100%-2rem)] lg:-translate-x-1/2 lg:px-4"
//         >
//           <div className="w-full">
//             <SearchCard />
//           </div>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// };

// export default HeroContent;

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

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
          <h1
            className="
              text-[clamp(2rem,5vw,4.5rem)]
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
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:mt-6sm:text-base lg:text-lg lg:leading-8">
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
                Invest Now
              </button>
            </a>

            <Link to="/listings">
              <button className=" min-w-[165px] rounded-md border-2 border-white px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:min-w-[190px] sm:px-8 sm:py-4 sm:text-base">
                Explore Listings
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContent;
