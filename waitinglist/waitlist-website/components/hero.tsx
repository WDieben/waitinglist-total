'use client'

import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export default function Hero() {
  return (
    <HeroGeometric
      badge="Launching on Black Friday"
      title1="Documentation"
      title2="10x faster"
      description="Turn any workflow into a clean, editable step-by-step guide in seconds."
      showButton={true}
      buttonText="Join Waitlist"
    />
  )
}
