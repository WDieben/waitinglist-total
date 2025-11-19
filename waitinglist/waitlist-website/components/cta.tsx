'use client'

import { HoverButton } from "@/components/ui/hover-button"
import { BGPattern } from "@/components/ui/bg-pattern"
import { NewsletterModal } from "@/components/mail/newsletter-modal"
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate all CTA elements together
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    })

    // Animate badge
    ctaTl.from(badgeRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out"
    })

    // Animate heading
    ctaTl.from(headingRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.3")

    // Animate description
    ctaTl.from(descriptionRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")

    // Animate button
    ctaTl.from(buttonRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.7,
      ease: "back.out(1.7)"
    }, "-=0.3")

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative w-full py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto">
        <div ref={cardRef} className="relative bg-[#161B28] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 overflow-hidden">
          {/* Background Pattern inside the card */}
          <BGPattern
            variant="grid"
            size={20}
            fill="rgba(255,255,255,0.05)"
            className="absolute inset-0 opacity-100"
          />

          {/* Content overlay */}
          <div className="relative z-10 text-center">
            {/* Section Badge */}
            <div ref={badgeRef} className="mb-3 sm:mb-4 lg:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs sm:text-xs lg:text-sm text-primary font-medium tracking-wider uppercase">
                  Ready to get started?
                </span>
              </span>
            </div>

            {/* Heading */}
            <h2 ref={headingRef} className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Ready to transform your workflow?
            </h2>

            {/* Description */}
            <p ref={descriptionRef} className="text-sm sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6 lg:mb-8 max-w-xs sm:max-w-lg lg:max-w-xl mx-auto leading-relaxed">
              Join the waitlist and be the first to experience documentation that works as fast as you do.
            </p>

            {/* Touch-friendly button */}
            <div ref={buttonRef} className="flex justify-center">
              <NewsletterModal>
                <HoverButton
                  className="h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg font-medium rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] border-0"
                  style={{
                    "--circle-start": "rgba(255,255,255,0.2)",
                    "--circle-end": "rgba(255,255,255,0.05)",
                  } as React.CSSProperties}
                >
                  Join Waitlist
                </HoverButton>
              </NewsletterModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}