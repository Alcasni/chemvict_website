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
  accent: '#00a651',
  border: 'rgba(26, 28, 30, 0.1)',
}

const TECHNICAL_SECTIONS = [
  {
    id: '01',
    title: 'Wire Mesh Mist Eliminator',
    eyebrow: 'Gas Liquid Separation',
    prose: <>Used for gas liquid separation. Mist droplets entrained in the gas stream impinge on the wire mesh, are intercepted by the mesh, <strong>coalesce into larger droplets</strong>, and are discharged, thereby achieving gas liquid separation. A wire mesh mist eliminator mainly consists of mesh pads formed by wire mesh and grids. The wire mesh may be made of various materials, and the gas liquid filter mesh may be composed of metallic or non metallic wires.</>,
    techNote: 'The pressure drop is typically below 2.5 mbar, and it has high separation efficiency for droplets larger than 2 μm.',
    image: '/images/processEquipments/ps1.png',
  },
  {
    id: '02',
    title: 'Vane Mist Eliminator',
    eyebrow: 'Gas Liquid Separation',
    prose: <>Used for gas liquid separation. Droplets entrained in the gas stream collide inertially with the vane surfaces, form a liquid film on the vane surfaces, and are then discharged. A vane mist eliminator is composed of rows of <strong>parallel corrugated plates</strong>.</>,
    techNote: 'The gas load factor can be as high as 0.45 m/s, making it suitable for services involving high viscosity liquids and solid particles.',
    image: '/images/processEquipments/ps2.png',
  },
  {
    id: '03',
    title: 'Wire Mesh Coalescer',
    eyebrow: 'Liquid Liquid Separation',
    prose: <>Used for liquid liquid separation. It is installed in the settling tank of two immiscible liquid phases to accelerate the separation of the immiscible liquids.</>,
    techNote: <>It can significantly <strong>shorten the settling time</strong> of dispersed droplets larger than 30 μm, and the flow rate can reach up to 120 m3/m2h.</>,
    image: '/images/processEquipments/ps3.png',
  },
]

export default function PhaseSeparationPage() {
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
            <span style={{ color: COLORS.accent }}>Phase Separation</span>
          </nav>

          <header className="mb-24 lg:mb-40 border-b border-black/10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-10">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#00a651] mb-6">Technical Documentation</span>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter italic uppercase leading-[0.9] mb-10">
                  Phase Separation
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-4xl italic">
                  Chemvict provides different types of mist eliminators for gas liquid separation and coalescers for liquid liquid separation.
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
                    
                    <div className="bg-white p-8 border border-black/5 shadow-sm rounded-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <Settings size={14} className="text-[#00a651]" />
                        <span className="text-[10px] font-black tracking-[0.2em] text-slate-400">Technical capability</span>
                      </div>
                      <p className="text-sm text-slate-800 leading-relaxed tracking-tight">
                        {section.techNote}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
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
                  The primary focus of Chemvict separation systems is the minimization of pressure drop across all equipment families. By ensuring that resistance remains {"<"} 2.5 mbar in standard mesh applications, we maximize high purity separation while significantly reducing the hydraulic energy required to move phases through the system.
                </p>
              </div>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <Shield size={24} className="text-[#00a651] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    Materials are selected to endure aggressive chemical environments, including a full range of metallic alloys and high performance non metallic filaments.
                  </p>
                </div>
                <div className="flex gap-6">
                  <BookOpen size={24} className="text-[#00a651] shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide">
                    All separation geometries are optimized for long term service cycles, particularly in applications involving entrained solids or high viscosity dispersed phases.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <div className="max-w-[1400px] mx-auto py-32 border-t border-black/10">
            <Link href="/processEquipments/massTransfer" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform text-[#00a651]" size={32} /> 
              Back to Mass Transfer
            </Link>
          </div> */}
            <div className="py-32">
            <div className="flex flex-col md:flex-row justify-end items-center gap-12 text-center md:text-right border-t border-black/10 pt-20">
              <div className="flex flex-col">
                <Link 
                  href="/processEquipments/massTransfer/packing" 
                  className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors"
                >
                  Packing
                  <ArrowRight className="group-hover:translate-x-3 transition-transform text-[#00a651]" size={32} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}