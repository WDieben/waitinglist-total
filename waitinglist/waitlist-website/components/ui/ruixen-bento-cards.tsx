"use client"

import React from "react"
import { cn } from "@/lib/utils"

const cardContents = [
  {
    title: "Record Your Process",
    description:
      "Start recording and walk through your workflow. The tool captures each step with screenshots automatically, eliminating manual documentation work.",
  },
  {
    title: "Generate Step-by-Step Guides",
    description:
      "Convert your recording into clear, structured documentation. Each action becomes a step with descriptions and context, ready for sharing.",
  },
  {
    title: "Edit and Organize",
    description:
      "Adjust text, reorder steps, and add context with a simple editor. Perfect the documentation to match your team's needs and standards.",
  },
  {
    title: "Share with Your Team",
    description:
      "Export guides or share via public link. Ideal for process documentation, training materials, and knowledge sharing across your organization.",
  },
  {
    title: "Consistent Output",
    description:
      "Create standardized documentation every time. Clean formatting and structure that makes processes easy to follow and maintain.",
  },
]


const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({
  className = "",
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-zinc-700 rounded-lg p-4 sm:p-6 bg-zinc-950 min-h-[180px] sm:min-h-[200px]",
        "flex flex-col justify-between",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`text-white size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function RuixenBentoCards() {
  return (
    <section className="bg-black relative z-10">
      <div className="mx-auto container py-12 px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 auto-rows-auto gap-3 sm:gap-4 lg:gap-4 relative z-0">
          {/* Large featured card - takes top row */}
          <PlusCard {...cardContents[0]} className="plus-card lg:col-span-3 lg:row-span-2 xl:col-span-3" />

          {/* Secondary card */}
          <PlusCard {...cardContents[1]} className="plus-card lg:col-span-3 lg:row-span-2 xl:col-span-2 xl:row-span-2" />

          {/* Third row cards */}
          <PlusCard {...cardContents[2]} className="plus-card lg:col-span-6 lg:row-span-1 xl:col-span-4" />
          <PlusCard {...cardContents[3]} className="plus-card lg:col-span-3 lg:row-span-1 xl:col-span-2" />
          <PlusCard {...cardContents[4]} className="plus-card lg:col-span-3 lg:row-span-1 xl:col-span-2" />
        </div>

        {/* Section Footer Heading - Lower z-index than header */}
        <div className="max-w-2xl md:max-w-3xl xl:max-w-4xl ml-auto text-right px-4 sm:px-6 mt-6 lg:mt-8 xl:mt-12 relative z-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Better documentation, faster.
            </span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg lg:text-lg leading-relaxed">
            Transform how your team creates and shares process documentation. Join the waitlist for early access.
          </p>
        </div>
      </div>
    </section>
  )
}
