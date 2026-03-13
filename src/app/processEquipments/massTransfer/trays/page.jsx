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
  accent: '#00a651',
  border: 'rgba(26, 28, 30, 0.1)',
}

/**
 * A clean, tabular layout for technical specifications 
 * that replaces the dense paragraph text.
 */
const ValveSpecs = () => (
  <div className="mt-6 border-t border-black/5">
    <table className="w-full text-left text-xs">
      <thead>
        <tr className="border-b border-black/5">
          <th className="py-3 font-black uppercase tracking-widest text-slate-400">Model</th>
          <th className="py-3 font-black uppercase tracking-widest text-slate-400">Capability</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black/[0.03]">
        <tr>
          <td className="py-3 font-bold text-[#00a651]">K MMVG</td>
          <td className="py-3 text-slate-600">High gas load & low pressure drop</td>
        </tr>
        <tr>
          <td className="py-3 font-bold text-[#00a651]">K MVG</td>
          <td className="py-3 text-slate-600">+20% capacity vs conventional trays</td>
        </tr>
        <tr>
          <td className="py-3 font-bold text-[#00a651]">K SVG</td>
          <td className="py-3 text-slate-600">Excellent anti-plugging</td>
        </tr>
        <tr>
          <td className="py-3 font-bold text-[#00a651]">K XVG</td>
          <td className="py-3 text-slate-600">Large size | Enhanced anti-fouling</td>
        </tr>
      </tbody>
    </table>
  </div>
)

const TECHNICAL_SECTIONS = [
  {
    id: '01',
    title: 'Fixed Valve Trays',
    eyebrow: 'High Capacity',
    prose: <>Fixed valves are stamped directly into the deck. Vapor is released laterally, providing lower froth height and higher capacity compared to sieve trays.</>,
    techNote: <ValveSpecs />,
    image: '/images/processEquipments/tr1.png',
  },
  {
    id: '02',
    title: 'Floating Valve Trays',
    eyebrow: 'Flexible Operation',
    prose: <>Ideal for applications requiring high operating flexibility across varying loads.</>,
    techNote: null,
    image: '/images/processEquipments/tr2.png',
  },
  {
    id: '03',
    title: 'Sieve Trays',
    eyebrow: 'Conventional',
    prose: <>A cost-effective solution for applications where high flexibility is not a primary requirement.</>,
    techNote: null,
    image: '/images/processEquipments/tr3.png',
  },
  {
    id: '04',
    title: 'Bubble Cap Trays',
    eyebrow: 'Low Leakage',
    prose: <>Designed for extremely low leakage and low liquid loads with maximum flexibility.</>,
    techNote: null,
    image: '/images/processEquipments/tr4.png',
  },
  {
    id: '05',
    title: 'Dualflow & Baffle',
    eyebrow: 'Fouling Service',
    prose: <>Specialized trays engineered for services dealing with severe plugging or solids.</>,
    techNote: null,
    image: '/images/processEquipments/tr5.png',
  },
  {
    id: '06',
    title: 'Cartridge Trays',
    eyebrow: 'Small Column',
    prose: <>Integrated assemblies designed for easy installation in small flanged columns.</>,
    techNote: null,
    image: '/images/processEquipments/tr6.png',
  }
]

export default function TraysPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={10} />
            <Link href="/processEquipments/massTransfer" className="hover:text-[#00a651] transition-colors">Mass Transfer</Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}>Trays</span>
          </nav>

          <header className="mb-24 lg:mb-40 border-b border-black/10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-11">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#00a651] mb-6">Technical Documentation</span>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter italic uppercase leading-[0.9] mb-10">
                  Trays
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-4xl italic">
                  Chemvict offers high performance solutions across conventional, high capacity, and multi-pass tray configurations.
                </p>
              </div>
            </div>
          </header>

          <div className="space-y-40 lg:space-y-56 mb-40">
            {TECHNICAL_SECTIONS.map((section, idx) => (
              <section key={section.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-white/40 p-8 lg:p-12 border border-black/5">
                
                <div className={`lg:col-span-7 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
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
                          <Settings size={14} className="text-[#00a651]" />
                          <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">Technical capability</span>
                        </div>
                        {section.techNote}
                      </div>
                    )}
                  </div>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex flex-col gap-8`}>
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
                <h3 className="text-2xl font-bold tracking-tighter uppercase italic mb-8">Performance</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Our systems prioritize operating flexibility and mechanical stability, delivering consistent mass transfer even in fouling-prone environments.
                </p>
              </div>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <Shield size={24} className="text-[#00a651] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    Materials are selected to endure aggressive environments, ensuring structural integrity for all assemblies.
                  </p>
                </div>
                <div className="flex gap-6">
                  <BookOpen size={24} className="text-[#00a651] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    Geometries are optimized for stable hydraulics, preventing flooding across wide operating ranges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-[1400px] mx-auto py-32 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <Link href="/processEquipments/massTransfer/columnInternals" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#1A1C1E] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform text-[#1A1C1E]" size={32} /> 
              Back to Column Internals
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}