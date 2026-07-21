import { useState } from "react";
import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import BackgroundOne from "../../assets/images/Real Estate and Agriculture Mix.svg";
import BackgroundTwo from "../../assets/images/Real Estate.svg";
import BackgroundThree from "../../assets/images/slide3.svg";
import "swiper/css";
import "swiper/css/pagination";
import HeroContent from "./HeroContent";
import SearchCard from "./SearchCard";

interface Slide {
  id: number;
  image: string;
  title?:
    | ReactNode
    | Array<{ text: string; color?: string; highlight?: boolean }>;
  subtitle?: string;
  description?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: BackgroundOne,
    title: [
      { text: "Smarter Property Management System," },
      { text: "Designed Around People", highlight: true },
      { text: "and Built for Africa" },
    ],
    // subtitle: "Sustainable properties for long-term growth",
    description:
      "We bridge the gap between owners seeking seamless management and tenants seeking quality spaces. Creating a property experience built on trust, clarity and mutual value",
  },
  {
    id: 2,
    image: BackgroundTwo,
    title: [
      { text: "Build Sustainable Wealth through" },
      { text: "Real Estate", highlight: true },
      { text: "And" },
      { text: "Agriculture", highlight: true },
      { text: "." },
    ],
    // subtitle: "Homes and spaces built with purpose",
    description:
      "A community-focused cooperative empowering institutional growth through verified asset-backed investments in Africa's most resilient sectors.",
  },

  {
    id: 3,
    image: BackgroundThree,
    title: [
      { text: "Build Sustainable Wealth through" },
      { text: "Real Estate", highlight: true },
      { text: "And" },
      { text: "Agriculture", highlight: true },
      { text: "." },
    ],
    // subtitle: "Homes and spaces built with purpose",
    description:
      "A community-focused cooperative empowering institutional growth through verified asset-backed investments in Africa's most resilient sectors.",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative  font-Outfit w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={800}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <HeroContent
              backgroundImage={slide.image}
              overlayClassName="bg-[#00193CE5]"
              title={slide.title}
              subtitle={slide.subtitle}
              description={slide.description}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-[-1rem] left-1/2 z-20 mx-auto w-[calc(100%-1rem)] -translate-x-1/2 px-0 sm:static sm:mt-6 sm:w-full sm:max-w-2xl sm:translate-x-0 sm:px-4 md:max-w-2xl lg:absolute lg:bottom-[-36px] lg:left-1/2 lg:mt-0 lg:w-[calc(100%-2rem)] lg:-translate-x-1/2 lg:px-4">
        <SearchCard />
      </div>
    </section>
  );
};

export default HeroSlider;
