import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import BuiltForTeams from '@/components/built-for-teams'
import CTA from '@/components/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <BuiltForTeams />
      <CTA />
    </main>
  )
}
