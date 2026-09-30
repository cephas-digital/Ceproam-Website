import { useState } from "react";
import type { ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import BackgroundOne from "../../assets/images/Real Estate and Agriculture Mix.jpg";
import BackgroundTwo from "../../assets/images/agriculture.jpeg";
import BackgroundThree from "../../assets/images/asset.jpeg";

import "swiper/css";
import "swiper/css/pagination";

import HeroContent from "./HeroContent";
import SearchCard from "./SearchCard";

interface Slide {
  id: number;
  image: string;
  title?:
    | ReactNode
    | Array<{
        text: string;
        color?: string;
        highlight?: boolean;
      }>;
  subtitle?: string;
  description?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: BackgroundOne,

    title: [
      { text: "Smarter Property Management" },
      { text: "Designed Around People", highlight: true },
    ],
    description:
      "We bridge the gap between owners seeking seamless management and tenants seeking quality spaces. Creating a property experience built on trust, clarity and mutual value.",
  },

  {
    id: 2,
    image: BackgroundTwo,
    title: [
      { text: "Access" },
      { text: "Farmlands", highlight: true },
      { text: ".Build" },
      { text: "Agricultural", highlight: true },
      { text: "Value" },
    ],
    description:
      "Access verified, high-yield farmland across Africa's most fertile regions — a tangible asset class delivering consistent returns rooted in real productivity",
  },

  {
    id: 3,
    image: BackgroundThree,
    title: [
      { text: "  Monetize, Syndicate, and Close Deals Faster Across" },
      { text: "  Real Estate & Agriculture.", highlight: true },
    ],
    description:
      "The intelligent asset infrastructure built for Property Owners, Realtors, and Project Sponsors. Whether you are listing high-demand properties or packaging syndicated agro and land opportunities, CEPROMAS puts your assets in front of verified, capital-ready investors.",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full font-Outfit">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop
        speed={1000}
        pagination={{
          clickable: true,
        }}
        grabCursor
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="hero-swiper w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <HeroContent
              backgroundImage={slide.image}
              overlayClassName="bg-[#000000]/60"
              title={slide.title}
              description={slide.description}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="
          relative
          z-20
          mx-auto
          -mt-10
          w-[calc(100%-2rem)]
          max-w-2xl
          sm:-mt-12
          lg:absolute
          lg:bottom-[-40px]
          lg:left-1/2
          lg:mt-0
          lg:w-[calc(100%-4rem)]
          lg:max-w-5xl
          lg:-translate-x-1/2
        "
      >
        <SearchCard />
      </div>
    </section>
  );
};

export default HeroSlider;
