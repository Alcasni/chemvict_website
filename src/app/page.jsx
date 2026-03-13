'use client'

import { useRef } from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Components
import Header from '@/components/Header'
import FeatureArcSection from '@/components/FeatureArcSection'
import DualModeRouting from '@/components/DualModeRouting'
import SustainabilityNews from '@/components/SustainabilityNews'
import IndustrialFootprint from '@/components/IndustrialFootprint'
import AdvancementsPerspectives from '@/components/AdvancementPerspectives'
import IndustryTrust from '@/components/IndustryTrust'
import Footer from '@/components/Footer'

//Data
import { allSustainabilityNews } from '@/content/sustainability'

gsap.registerPlugin(ScrollTrigger, useGSAP)
const inter = Inter({ subsets: ['latin'] })

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#F8FAFC]" />,
})

export default function Home() {
  const rootRef = useRef(null)
  const heroRef = useRef(null)
  
  const sceneRef = useRef({ 
    columnProgress: 0, 
    time: 0 
  })

  useGSAP(() => {
    // 1. KINETIC IDLE TICKER
    const onTick = () => {
      sceneRef.current.time += 0.015 
    }
    gsap.ticker.add(onTick)

    // 2. HERO PINNING
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=390%', 
      pin: true,
      pinSpacing: true, 
      scrub: 0.6, 
      refreshPriority: 1,
      onUpdate: (self) => {
        sceneRef.current.columnProgress = Math.min(1, self.progress * 1.3)
      },
    })

    // 3. TEXT FADE
    gsap.to('.hero-copy', {
      y: -40,
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=180%',
        scrub: 0.6,
      },
    })

    return () => gsap.ticker.remove(onTick)
  }, { scope: rootRef })

  return (
    <main ref={rootRef} className={`relative min-h-screen bg-[#F8FAFC] overflow-x-hidden ${inter.className}`}>
      <Header />
      
      <div className="relative">
        {/* SECTION 1: HERO */}
        <section ref={heroRef} className="relative z-10 h-screen flex items-center w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
            <ParticleBackground scene={sceneRef} />
          </div>

          <div className="hero-copy relative z-10 mx-auto flex w-full max-w-[1600px] px-6 md:px-10">
            <div className="max-w-2xl w-full md:w-1/2">
              <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white/65 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7] animate-pulse" />
                Precision Engineering
              </div>

              <h1 className="text-[clamp(3.2rem,6vw,6.5rem)] font-black leading-[0.95] tracking-tight text-slate-900">
                Engineering the Micro.<br />
                <span className="text-slate-400">Empowering the Macro.</span>
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-slate-600 font-light italic">
                A visual introduction to controlled chemical transformation where molecular behavior becomes industrial performance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CAPABILITIES ARC */}
        <FeatureArcSection />

        {/* SECTION 3: DUAL MODE ROUTING */}
        <DualModeRouting />

        {/* Section 4: Strategic Solution */}
        <SustainabilityNews newsData={allSustainabilityNews} />

        {/* Section 5: Industrial Footprint 8 */}
        <IndustrialFootprint />

        {/* Section 6: News */}
        <AdvancementsPerspectives />

        <IndustryTrust />

        <Footer />
      </div>
    </main>
  )
}