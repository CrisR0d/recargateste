// src/components/HeroCarousel.tsx
import * as React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type HeroSlide = {
  id: string | number;
  title: string;          
  description?: string;    
  ctaLabel?: string;     
  onCta?: () => void;     
  imageUrl: string;       
  imageAlt?: string;
  bgClassName?: string;
};

export type HeroCarouselProps = {
  slides: HeroSlide[];
  autoPlay?: boolean;
  autoPlayMs?: number;
  className?: string;
  heightClass?: string;
};

export default function HeroCarousel({
  slides,
  autoPlay = true,
  autoPlayMs = 4500,
  className = "",
  heightClass = "h-56 sm:h-64 md:h-72 lg:h-80",
}: HeroCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const count = slides.length;

  return (
    <Swiper 
      navigation={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      
    >
      {

        slides.map((s, i) => 
          <SwiperSlide key={i} className="snap-start shrink-0">
            <HeroSlideCard key={s.id} slide={s} active={i === index} />
          </SwiperSlide>
        )

      }
      
    </Swiper>
  );
}

function HeroSlideCard({ slide, active }: { slide: HeroSlide; active: boolean }) {
  return (
    <article>
      <img
          src={slide.imageUrl}
          alt={slide.imageAlt || "slide"}
          className={`max-h-[80%] w-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]`}
        />
    </article>
  );
}

// Example usage
// const slides: HeroSlide[] = [
//   {
//     id: 1,
//     title: "YOUR CURRENCY HEADLINE",
//     description: "Et suscipit qui et vitae adipisci rem beatae",
//     ctaLabel: "Buy Now",
//     onCta: () => alert("Buy Now"),
//     imageUrl: "/img/hero-1.png",
//     bgClassName: "from-indigo-900 to-blue-900",
//   },
//   {
//     id: 2,
//     title: "Top Up Instantly",
//     description: "Fast delivery. Global coverage. No nonsense.",
//     ctaLabel: "Get Started",
//     imageUrl: "/img/hero-2.png",
//     bgClassName: "from-violet-800 to-fuchsia-900",
//   },
// ];
//
// <HeroCarousel slides={slides} />
