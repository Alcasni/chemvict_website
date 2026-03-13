'use client'

import React from 'react'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  ArrowRight,
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
    title: 'Hammerhead Condenser',
    eyebrow: 'Vacuum Condensation',
    prose: <>A hammerhead condenser is a <strong>high duty, low pressure drop condenser</strong> suitable for process services in which large volumes of vapor must be <strong>condensed under high vacuum conditions</strong>. The condenser is installed at the top of the distillation column, <strong>saving installation space</strong>.</>,
    techNote: <>Its unique tube bundle arrangement and liquid discharge flow path allow the pressure drop of the hammerhead condenser to be <strong>reduced to below 1 mbar</strong> while still meeting high capacity condensation requirements.</>,
    image: '/images/processEquipments/h2.png',
  }
]

export default function HammerheadCondenserPage() {
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
            <span style={{ color: COLORS.accent }}>Hammerhead Condenser</span>
          </nav>

          <header className="mb-24 lg:mb-40 border-b border-black/10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-11">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#0284C7] mb-6">Technical Documentation</span>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter italic uppercase leading-[0.9] mb-10">
                  Hammerhead Condenser
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-5xl italic space-y-4">
                  Engineered heat transfer equipment designed for high efficiency vacuum condensation, minimizing hydraulic resistance while handling large vapor volumes.
                </p>
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
                  The primary focus of the hammerhead condenser is delivering stable thermal performance under strict vacuum constraints. By optimizing the internal tube layouts, we dramatically lower pressure drop, enabling highly efficient distillation without compromising throughput.
                </p>
              </div>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <Shield size={24} className="text-[#0284C7] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    Materials and structural designs are selected to ensure mechanical integrity even when mounted at the top of large scale distillation columns.
                  </p>
                </div>
                <div className="flex gap-6">
                  <BookOpen size={24} className="text-[#0284C7] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    Advanced liquid discharge flow paths prevent condensate backup, maintaining consistent heat transfer coefficients and protecting process yields.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-[1400px] mx-auto py-32 border-t border-black/10 flex flex-col md:flex-row items-center justify-end gap-10">
            <Link href="/processEquipments/heatTransfer/boiler" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#0284C7] transition-colors">
              High Pressure Boiler
              <ArrowRight className="group-hover:translate-x-3 transition-transform text-[#0284C7]" size={32} /> 
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}