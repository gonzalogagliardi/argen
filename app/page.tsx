import dynamic from "next/dynamic"
import { Hero } from "@/components/home/hero"
import { ProgramsOverview } from "@/components/home/programs-overview"

const VideoTestimonials = dynamic(() =>
  import("@/components/home/video-testimonials").then((m) => ({ default: m.VideoTestimonials }))
)
const WhyArgentina = dynamic(() =>
  import("@/components/home/why-argentina").then((m) => ({ default: m.WhyArgentina }))
)
const WhatIsArgengoal = dynamic(() =>
  import("@/components/home/what-is-argengoal").then((m) => ({ default: m.WhatIsArgengoal }))
)
const HowItWorks = dynamic(() =>
  import("@/components/home/how-it-works").then((m) => ({ default: m.HowItWorks }))
)
const Testimonials = dynamic(() =>
  import("@/components/home/testimonials").then((m) => ({ default: m.Testimonials }))
)
const HomeGallery = dynamic(() =>
  import("@/components/home/home-gallery").then((m) => ({ default: m.HomeGallery }))
)
const CtaBanner = dynamic(() =>
  import("@/components/home/cta-banner").then((m) => ({ default: m.CtaBanner }))
)

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
