'use client'

import React from 'react'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Settings,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#0284C7', // Heat Transfer accent color
  border: 'rgba(26, 28, 30, 0.1)',
}

const TECHNICAL_SECTIONS = [
  {
    id: '01',
    title: 'Falling Film Evaporator',
    eyebrow: 'Film Technology',
    prose: <>In falling film evaporation, the feed liquid enters from the feed inlet in the upper head of the falling film evaporator. After passing through the liquid distributor and film forming device, the feed is evenly distributed into each heat transfer tube. Under the combined action of gravity, vacuum induction, and vapor flow, the liquid forms a uniform film and flows downward along the tube wall. When used in a distillation system, the vapor phase and the unevaporated liquid usually return to the distillation column through the lower head. Falling film evaporators are particularly suitable for <strong>heat sensitive materials</strong> with low viscosity and low fouling tendency.</>,
    techNote: <>Chemvict’s proprietary film forming device extends into each tube. The slots in each distributor and the corresponding slot angles are carefully designed to <strong>generate tangential flow</strong> inside the heat transfer tube. Under the effect of the optimum static head, the distributor can ensure the formation of a <strong>uniform and stable liquid film</strong> on the tube wall. Because the liquid flows as a thin film, the heat transfer coefficient is much higher than that of a conventional shell and tube heat exchanger, meaning the <strong>required heat transfer area is smaller</strong> and energy consumption is lower.</>,
    image: '/images/processEquipments/h4.png',
  }
]

export default function FallingFilmEvaporatorPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#0284C7] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={10} />
            <Link href="/processEquipments/heatTransfer" className="hover:text-[#0284C7] transition-colors">Heat Transfer</Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}>Falling Film Evaporator</span>
          </nav>

          <header className="mb-24 lg:mb-40 border-b border-black/10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-11">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#0284C7] mb-6">Technical Documentation</span>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter italic uppercase leading-[0.9] mb-10">
                  Falling Film Evaporator
                </h1>
                <div className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-5xl italic space-y-4">
                  <p>Chemvict provides falling film evaporators (reboilers) for evaporation, concentration, or solvent recovery.</p>
                  <p>In addition, when combined with self heat recovery technology, multi effect evaporation using multiple columns, MVR technology, and similar approaches, the reduction in energy consumption can be very significant.</p>
                </div>
              </div>
            </div>
          </header>

          <div className="space-y-40 lg:space-y-56 mb-40">
            {TECHNICAL_SECTIONS.map((section, idx) => (
              <section key={section.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-white/40 p-8 lg:p-12 border border-black/5">
                
                <div className="lg:col-span-7 lg:order-1">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-5xl font-black italic opacity-10 tracking-tighter">{section.id}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter uppercase italic leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-8 pr-0 lg:pr-10">
                    <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed">
                      {section.prose}
                    </p>
                    
                    {section.techNote && (
                      <div className="bg-white p-8 border border-black/5 shadow-sm rounded-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <Settings size={14} className="text-[#0284C7]" />
                          <span className="text-[10px] font-black tracking-[0.2em] text-slate-400">Technical capability</span>
                        </div>
                        <p className="text-sm text-slate-800 leading-relaxed tracking-tight">
                          {section.techNote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5 lg:order-2 flex flex-col gap-8">
                  <div className="relative aspect-[4/3] bg-white border shadow-lg overflow-hidden" style={{ borderColor: COLORS.border }}>
                    <Image src={section.image} alt={section.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/[0.02]" />
                  </div>
                </div>

              </section>
            ))}
          </div>

          <section className="bg-white border p-12 lg:p-24 mb-32" style={{ borderColor: COLORS.border }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter uppercase italic mb-8">Performance Reliability</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  The primary focus of our falling film evaporator is maintaining the optimum liquid static head on the tube sheet. The inserted film forming head ensures that fine particulate materials do not accumulate in dead zones between the tube sheet and the tube wall, ensuring continuous and reliable operation.
                </p>
              </div>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <Shield size={24} className="text-[#0284C7] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    The distributor outlet is located below the liquid level, which provides a certain tolerance for installation accuracy while maintaining perfect film generation.
                  </p>
                </div>
                <div className="flex gap-6">
                  <BookOpen size={24} className="text-[#0284C7] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    By utilizing advanced slot angles, the distributor forces tangential flow, maximizing the heat transfer coefficient compared to conventional systems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-[1400px] mx-auto py-32 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <Link href="/processEquipments/heatTransfer/boiler" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#0284C7] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform text-[#0284C7]" size={32} /> 
              High Pressure Boiler
            </Link>
            {/* End of Heat Transfer section, no right arrow */}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}