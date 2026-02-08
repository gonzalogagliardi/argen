import { Hero } from "@/components/home/hero"
import { WhatIsArgengoal } from "@/components/home/what-is-argengoal"
import { WhyArgentina } from "@/components/home/why-argentina"
import { ProgramsOverview } from "@/components/home/programs-overview"
import { HowItWorks } from "@/components/home/how-it-works"
import { Testimonials } from "@/components/home/testimonials"
import { VideoTestimonials } from "@/components/home/video-testimonials"
import { HomeGallery } from "@/components/home/home-gallery"
import { CtaBanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProgramsOverview />
      <VideoTestimonials />
      <WhyArgentina />
      <WhatIsArgengoal />
      <HowItWorks />
      <Testimonials />
      <HomeGallery />
      <CtaBanner />
    </main>
  )
}
