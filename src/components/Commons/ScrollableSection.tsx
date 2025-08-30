import * as React from "react";
import { Link } from "react-router-dom";
import { GameCard, GameCardProps } from "../Card/GameCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type ScrollableSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  items: Array<Omit<GameCardProps, "className">>;
  className?: string;
  cardWidth?: number;
  seeAllHref?: string;
};

export default function ScrollableSection({
  id,
  title,
  subtitle,
  items,
  className = "",
  cardWidth = 176,
  seeAllHref,
}: ScrollableSectionProps) {

  return (
    <section id={id} className={`relative w-full ${className}`}>
      
      <div className=" flex items-end justify-between">
        <div>
          <h2 className="text-sm font-black tracking-widest text-pink-400">{title}</h2>
          {subtitle && <p className="text-xs text-white/70">{subtitle}</p>}
        </div>
        {seeAllHref && (
          <Link
            to={seeAllHref}
            className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            See all
          </Link>
        )}
      </div>

      <Swiper 
        spaceBetween={50}
        slidesPerView={7}
        
        autoplay
        navigation={true}
        
        modules={[Navigation, Pagination]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        >
          {items.map((it, idx) => (
            <SwiperSlide key={idx} className="snap-start shrink-0">
              <GameCard {...it} />
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}