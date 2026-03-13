'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, ChevronRight, ArrowRight, ArrowLeft, Activity, Thermometer, Database, Settings, ShieldCheck, Box, Microscope } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#00a651',
  subAccent: '#0284C7', 
  border: 'rgba(26, 28, 30, 0.1)',
}

const ENGINEERING_LOGIC = [
  { id: '01', title: 'Thermodynamic Simulation', icon: Database, desc: 'Rigorous modeling using internationally recognized physical property databases to ensure reliable design outcomes.' },
  { id: '02', title: 'Process Design Package', icon: Settings, desc: 'Configuring custom process trains based on specific post reaction feed compositions and target specifications.' },
  { id: '03', title: 'Thermal Configuration', icon: Thermometer, desc: 'Integrating specialized falling film evaporators for thermal sensitive materials to minimize degradation.' },
  { id: '04', title: 'System Integration', icon: Activity, desc: 'Pairing high efficiency structured packing with continuous crystallization units for maximum purity.' },
  { id: '05', title: 'Operational Performance', icon: ShieldCheck, desc: 'Engineering for long stable process operation and minimized product yield loss across industrial cycles.' }
]

export default function ProcessTechnologiesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-sm font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors flex items-center gap-1">
              <Home size={16} /> 
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: COLORS.accent }}>Process Technologies</span>
          </nav>

          <header className="mb-24 lg:mb-32 max-w-5xl">
            <span className="block text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#0284C7]">
              Technical Capabilities
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95]">
              Separation Science <br />& System Delivery.
            </h1>
            <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
              From the molecular precision of our purification techniques to the full scale industrial delivery of integrated process systems.
            </p>
          </header>

          {/* GATEWAY 01: INTEGRATED PROCESS SYSTEMS */}
          <section className="mb-32 lg:mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-5">
                <div className="sticky top-40">
                  <div className="flex items-center gap-3 mb-6">
                    <Box size={20} className="text-[#00a651]" />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">The Turnkey Solution</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 uppercase italic leading-tight">Integrated <br />Process Systems</h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                    Where engineering meets execution. We provide the full package. This includes Process Design Packages (PDP) combined with critical equipment manufacturing and system integration.
                  </p>
                  <Link href="/processTechnologies/integrated" className="group flex items-center gap-6 text-base font-black uppercase tracking-[0.2em] text-[#00a651]">
                    View Process Packages <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border p-10 lg:p-16 shadow-sm" style={{ borderColor: COLORS.border }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 pb-4 border-b border-black/5 text-slate-400">Delivery Scope</h4>
                    <ul className="space-y-8">
                      {[
                        { label: 'Turnkey Design', detail: 'Complete Process Design Packages (PDP) tailored to specific post reaction feed compositions.' },
                        { label: 'System Energy', detail: 'Leveraging advanced energy integration and optimization concepts for the entire process train.' },
                        { label: 'Project Lifecycle', detail: 'Engineering for long stable process operation from simulation to commissioning.' }
                      ].map((s, i) => (
                        <li key={i}>
                          <span className="block text-lg font-bold uppercase tracking-tight mb-2">{s.label}</span>
                          <span className="block text-sm text-slate-500 italic leading-relaxed">{s.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 pb-4 border-b border-black/5 text-slate-400">System Focus</h4>
                    <ul className="space-y-4">
                      {[
                        'Benzenediol & Derivatives', 
                        'Antioxidant Process Packages', 
                        'NMP & GBL Systems', 
                        'Fatty Acid Distillation',
                        'Dichlorobenzenes (DCB)'
                      ].map((app, i) => (
                        <li key={i} className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-3">
                          <span className="w-2 h-2 bg-[#00a651] rounded-full" /> {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GATEWAY 02: PURIFICATION TECHNOLOGY */}
          <section className="mb-32 lg:mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-7 order-2 lg:order-1 bg-white border p-10 lg:p-16 shadow-sm" style={{ borderColor: COLORS.border }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 pb-4 border-b border-black/5 text-slate-400">Technical Precision</h4>
                    <ul className="space-y-8">
                      {[
                        { label: 'Molecular Purity', detail: 'Achieving parts per billion (ppb) level purity targets through advanced separation logic.' },
                        { label: 'Isomer Separation', detail: 'Rigorous design for close boiling and difficult positional isomer separation.' },
                        { label: 'Yield Management', detail: 'Minimizing product loss while maintaining strict industrial purity standards.' }
                      ].map((s, i) => (
                        <li key={i}>
                          <span className="block text-lg font-bold uppercase tracking-tight mb-2">{s.label}</span>
                          <span className="block text-sm text-slate-500 italic leading-relaxed">{s.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 pb-4 border-b border-black/5 text-slate-400">Capability Focus</h4>
                    <ul className="space-y-4">
                      {[
                        'TDI Chlorine Removal', 
                        'Electronic Grade DMC', 
                        'High Purity Fluorochemicals', 
                        'Pyridine & Derivatives', 
                        'DMAC Recovery',
                        'm-Phenylenediamine (MPD)',
                        'High Purity Menthol Crystals',
                        'Citral',
                        'Electronic Chemicals'
                      ].map((app, i) => (
                        <li key={i} className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-3">
                          <span className="w-2 h-2 bg-[#0284C7] rounded-full" /> {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="sticky top-40">
                  <div className="flex items-center gap-3 mb-6">
                    <Microscope size={20} className="text-[#0284C7]" />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">The Separation Science</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 uppercase italic leading-tight">Purification <br />Technology</h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                    The technical foundation of every Chemvict solution. We solve the most difficult molecular separation challenges where purity requirements are extreme.
                  </p>
                  <Link href="/processTechnologies/purification" className="group flex items-center gap-6 text-base font-black uppercase tracking-[0.2em] text-[#0284C7]">
                    Explore Purification Process <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ... METHODOLOGY AND PATH SELECTION REMAIN UNCHANGED ... */}
          
          <section className="py-24 border-t border-black/10">
              <div className="mb-16">
                <span className="block text-xs font-black uppercase tracking-[0.3em] mb-4 text-[#0284C7]">Engineering Logic</span>
                <h3 className="text-4xl font-bold tracking-tight italic uppercase">Our Project Methodology</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                {ENGINEERING_LOGIC.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative group">
                      <div className="mb-6 text-[#0284C7] group-hover:text-[#00a651] transition-colors duration-500">
                        <Icon size={44} strokeWidth={1} />
                      </div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{step.id} / Stage</span>
                      <h4 className="text-base font-black uppercase tracking-wider leading-tight mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
          </section>

          <section className="py-32 border-t border-black/10">
            <div className="max-w-[1600px] mx-auto">
              <span className="block text-center text-xs font-black uppercase tracking-[0.5em] mb-12 opacity-50">Select Your Technical Path</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px]">
                
                <Link 
                  href="/processTechnologies/integrated" 
                  className="group relative flex flex-col items-center justify-center bg-[#1A1C1E] overflow-hidden transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-[#00a651] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 text-center px-10">
                    <span className="block text-xs font-black uppercase tracking-[0.5em] text-white/40 mb-4 group-hover:text-white/60 transition-colors">Turnkey Systems</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter uppercase italic">Integrated Systems</h2>
                    <p className="text-white/60 mt-4 max-w-xs mx-auto text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">Full lifecycle solutions from PDP concept to commissioning.</p>
                    <div className="mt-10 flex items-center justify-center gap-6 text-[#D9FF4A]">
                       <div className="w-8 flex justify-end">
                         <ArrowLeft size={28} className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                       </div>
                       <span className="text-xs font-black uppercase tracking-[0.4em] translate-y-4 group-hover:translate-y-0 transition-all duration-500">Enter Portal</span>
                       <div className="w-8" />
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/processTechnologies/purification" 
                  className="group relative flex flex-col items-center justify-center bg-white border border-black/10 overflow-hidden transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 text-center px-10">
                    <span className="block text-xs font-black uppercase tracking-[0.5em] text-black/30 mb-4 group-hover:text-white/40 transition-colors">Precision Expertise</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black group-hover:text-white tracking-tighter uppercase italic transition-colors">Purification Tech</h2>
                    <p className="text-black/40 group-hover:text-white/60 mt-4 max-w-xs mx-auto text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">The foundational technology for extreme purity and isomer separation.</p>
                    <div className="mt-10 flex items-center justify-center gap-6 text-[#D9FF4A]">
                       <div className="w-8" />
                       <span className="text-xs font-black uppercase tracking-[0.4em] translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-black group-hover:text-[#D9FF4A]">Enter Portal</span>
                       <div className="w-8 flex justify-start">
                         <ArrowRight size={28} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                       </div>
                    </div>
                  </div>
                </Link>

              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}