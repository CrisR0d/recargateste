import { CardSkeleton } from "@/components/Card/CardSkeleton"
import ScrollableSection from "@/components/Commons/ScrollableSection"
import { useState, useEffect } from "react"

export const HomeView = () => {

  const [loading, setLoading] = useState(true)

  const simulatedFetch = () => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    simulatedFetch();
  }, []);
  
  return (
    <div className="flex flex-wrap gap-4">

      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <ScrollableSection
          id="populars"
          title="TOP 1"
          subtitle="Top-ups and vouchers"
          seeAllHref="/games"
          items={[
            { title: "FREE FIRE", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Ff%2Fr%2Ffreefire_general_10_bonus_latam-min_1_1_1.jpg&w=256&q=75", tag: "1CS BONUS" },
            { title: "FREE FIRE", price: "$10.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Ff%2Fr%2Ffreefire_general_10_bonus_latam-min_1_1_1.jpg&w=256&q=75x" },
            { title: "MOBILE LEGENDS", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fm%2Fl%2Fmlbb_recargadirecta_240x300.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$0.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fm%2Fl%2Fmlbb_recargadirecta_240x300.jpg&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fv%2Fa%2Fvalorant_dec23_240x300_00_2_15.jpg&w=256&q=75", href: 'product/mobile-legends' },
          ]}
        />
      )}

      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <ScrollableSection
          id="mobile-games"
          title="MOBILE GAMES"
          subtitle="Top-ups and vouchers"
          seeAllHref="/games"
          items={[
            { title: "FREE FIRE", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fn%2Fi%2Fnintendo_us_240x300-min_2.jpg&w=256&q=75", tag: "1CS BONUS" },
            { title: "FREE FIRE", price: "$10.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fn%2Fi%2Fnintendo_us_240x300-min_2.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fn%2Fi%2Fnintendo_us_240x300-min_2.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$0.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fn%2Fi%2Fnintendo_us_240x300-min_2.jpg&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fh%2Fo%2Fhonorofkings_ww_1.jpg&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FC%2Fo%2FConfigurables_1000x1250_39__12.png&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FB%2Fl%2FBloodStrike_240x300_7.jpg&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fz%2Fe%2Fzenless_resized_240x300.png&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FG%2Fe%2FGenshin_Impact_2024_07.jpg&w=256&q=75" },
          ]}
        />
      )}

      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <ScrollableSection
          id="pc-games"
          title="PC GAMES"
          subtitle="Top-ups and vouchers"
          seeAllHref="/games"
          items={[
            { title: "FREE FIRE", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FS%2Fo%2FSongsOfSilence_240x300-min_2.jpg&w=256&q=75", tag: "1CS BONUS" },
            { title: "FREE FIRE", price: "$10.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FT%2Fo%2FTogges_240x300-min_1.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fr%2Fo%2Froblox_240x300-min_1_1.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$0.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fc%2Fr%2Fcrunchyroll_normal_240x300_1_1.png&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FB%2Fa%2FBanner_SKU_ExitLagMobile_240x300.png&w=256&q=75" },
          ]}
        />
      )}

      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <ScrollableSection
          id="gif-cards"
          title="GIF CARDS"
          subtitle="Top-ups and vouchers"
          seeAllHref="/games"
          items={[
            { title: "FREE FIRE", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FS%2Fo%2FSongsOfSilence_240x300-min_2.jpg&w=256&q=75", tag: "1CS BONUS" },
            { title: "FREE FIRE", price: "$10.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FT%2Fo%2FTogges_240x300-min_1.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fr%2Fo%2Froblox_240x300-min_1_1.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$0.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fc%2Fr%2Fcrunchyroll_normal_240x300_1_1.png&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FB%2Fa%2FBanner_SKU_ExitLagMobile_240x300.png&w=256&q=75" },
          ]}
        />
      )}

      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <ScrollableSection
          id="services"
          title="SERVICIOS"
          subtitle="Top-ups and vouchers"
          seeAllHref="/games"
          items={[
            { title: "FREE FIRE", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FS%2Fo%2FSongsOfSilence_240x300-min_2.jpg&w=256&q=75", tag: "1CS BONUS" },
            { title: "FREE FIRE", price: "$10.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FT%2Fo%2FTogges_240x300-min_1.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$4.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fr%2Fo%2Froblox_240x300-min_1_1.jpg&w=256&q=75" },
            { title: "MOBILE LEGENDS", price: "$0.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fc%2Fr%2Fcrunchyroll_normal_240x300_1_1.png&w=256&q=75" },
            { title: "STEAM", price: "$9.99", imageUrl: "https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2FB%2Fa%2FBanner_SKU_ExitLagMobile_240x300.png&w=256&q=75" },
          ]}
        />
      )}

    </div>
  )
}

/**
 * 
 * 
import { Section } from "@/components/Dashboard/Section"

export const HomeView = () => {
  
  return (
    <div className="flex flex-wrap gap-4">
      <Section
        id="populars"
        title="TOP 1"
        subtitle="Top-ups and vouchers"
        seeAllHref="/games"
        query="populars" // A unique query for this section
      />
      <Section
        id="mobile-games"
        title="MOBILE GAMES"
        subtitle="Top-ups and vouchers"
        seeAllHref="/games"
        query="mobile-games" // A unique query for this section
      />
      <Section
        id="pc-games"
        title="PC GAMES"
        subtitle="Top-ups and vouchers"
        seeAllHref="/games"
        query="pc-games" // A unique query for this section
      />
      <Section
        id="gif-cards"
        title="GIF CARDS"
        subtitle="Top-ups and vouchers"
        seeAllHref="/games"
        query="gif-cards" // A unique query for this section
      />
      <Section
        id="services"
        title="SERVICIOS"
        subtitle="Top-ups and vouchers"
        seeAllHref="/games"
        query="services" // A unique query for this section
      />
    </div>
  )
}
 */