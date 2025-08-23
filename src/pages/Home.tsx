
import HeroCarousel, { HeroSlide } from "@/components/Commons/HeroCarousel";
import { HomeView } from "@/views/HomeView";

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "YOUR CURRENCY HEADLINE",
    description: "Et suscipit qui et vitae adipisci rem beatae",
    ctaLabel: "Buy Now",
    onCta: () => console.log("Buy Now"),
    imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fassets%2Floyalty_2%2FLYTY_SEASON_2_LATAM_WEB.png&w=1920&q=75",
    bgClassName: "from-indigo-900 to-blue-900",
  },
  {
    id: 2,
    title: "Top Up Instantly",
    description: "Fast delivery. Global coverage. No nonsense.",
    ctaLabel: "Get Started",
    imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fassets%2Fbnx_arena%2FBMC_WEB.png&w=1920&q=75",
    bgClassName: "from-violet-800 to-fuchsia-900",
  },
  {
    id: 3,
    title: "Top Up Instantly",
    description: "Fast delivery. Global coverage. No nonsense.",
    ctaLabel: "Get Started",
    imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fassets%2FBannersBonoxsSeriesAR%2FWeb_Banner.png&w=1920&q=75",
    bgClassName: "from-violet-800 to-fuchsia-900",
  },
];

export default function Home() {
  return  (
    <>
      <div className="md:block hidden mx-auto w-auto ">
        <HeroCarousel slides={slides} autoPlay={false} autoPlayMs={5500} />
      </div>
      <HomeView/>
    </>
  )
}