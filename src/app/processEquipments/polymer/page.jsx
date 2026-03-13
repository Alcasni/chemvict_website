'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Activity,
  Zap
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

const CATEGORIES = [
  {
    title: 'Static Mixer',
    href: '/processEquipments/polymer/staticMixer',
    eyebrow: 'Polymer Equipment',
    icon: Activity,
    description: 'An in-line mixing device designed for reliable mixing and dispersion over a short distance, particularly suited for high-viscosity materials and continuous process integration.',
    image: '/images/processEquipments/p2.png',
    signals: ['Rapid Mixing', 'Open Geometry', 'Low Pressure Drop'],
    products: ['High-Viscosity Mixing', 'Gas-Liquid Contacting', 'Easy Cleaning And Maintenance']
  },
  {
    title: 'Polymer Vacuum Devolatilization System',
    href: '/processEquipments/polymer/devolatilization',
    eyebrow: 'Polymer Equipment',
    icon: Zap,
    description: 'An integrated devolatilization system designed to remove monomers, solvents, and low-molecular-weight volatiles while supporting stable polymer performance and low residual content.',
    image: '/images/processEquipments/p3.png',
    signals: ['Integrated Heating', 'Flash Separation', 'Residual Removal'],
    products: ['Static Mixer Preheater', 'Vacuum Devolatilization Vessel', 'Solvent And Monomer Recovery']
  }
]

function SignalChips({ items, accent }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((signal) => (
        <span
          key={signal}
          className="text-[10px] font-black uppercase tracking-[0.18em] px-3 py-2 border"
          style={{
            borderColor: `${accent}28`,
            color: accent,
            backgroundColor: `${accent}08`,
          }}
        >
          {signal}
        </span>
      ))}
    </div>
  )
}

export default function PolymerPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />
      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors">
              <Home size={14} />
            </Link>
            <ChevronRight size={10} />
            <Link href="/processEquipments" className="hover:text-[#00a651] transition-colors">Process Equipment</Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}>Polymer Equipment</span>
          </nav>

          <header className="mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
              <div className="lg:col-span-8">
                <span className="block text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#00a651]">
                  Polymer Equipment
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                  Built For Continuous <br />
                  Polymer Processing.
                </h1>
                <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
                  A focused portfolio of polymer-process equipment designed for intensive mixing, controlled heat transfer, and efficient devolatilization in continuous industrial operation.
                </p>
              </div>
              <div className="lg:col-span-4 pt-4">
                <div className="border bg-white p-8 lg:p-10 shadow-sm" style={{ borderColor: COLORS.border }}>
                  <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Polymer Platform</span>
                  <div className="space-y-6">
                    {[
                      { label: 'Process Focus', value: 'Mixing And Devolatilization' },
                      { label: 'Hardware Scope', value: 'Static Mixer / Vacuum System' },
                      { label: 'Performance Focus', value: 'Consistent Polymer Quality' }
                    ].map((metric) => (
                      <div key={metric.label} className="border-b border-black/5 pb-4 last:border-0">
                        <div className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1">{metric.label}</div>
                        <div className="text-lg font-bold uppercase tracking-tight">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-32 lg:mb-48">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden border bg-white shadow-sm" style={{ borderColor: COLORS.border }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                <div className="p-10 lg:p-20 xl:p-24 flex flex-col justify-center">
                  <span className="block text-xs font-black uppercase tracking-[0.3em] text-[#00a651] mb-8">
                    Continuous Polymer Processing
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic mb-8 leading-[0.95]">Mixing, Heat Transfer, <br /> And Volatile Removal.</h2>
                  <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-xl">Our polymer equipment is engineered to improve process stability, reduce residual volatiles, and support tighter product consistency through integrated mixing and devolatilization design.</p>
                  <div className="pt-6 border-t border-black/5">
                    <SignalChips accent={COLORS.accent} items={['Short Residence Time', 'Low Residual Volatiles', 'Consistent Polymer Quality', 'Continuous Operation']} />
                  </div>
                </div>
                <div className="relative min-h-[450px] lg:min-h-full overflow-hidden bg-[#F8F8F6]">
                  <Image src="/images/processEquipments/p1.png" alt="Polymer Detail" fill priority className="object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-black/[0.03]" />
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mb-32 lg:mb-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {CATEGORIES.map((cat, idx) => (
                <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white border shadow-sm flex flex-col group" style={{ borderColor: COLORS.border }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="min-h-[90px] mb-6">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">{cat.eyebrow}</span>
                      <h3 className="text-2xl font-bold tracking-tighter uppercase italic leading-none">{cat.title}</h3>
                    </div>
                    <div className="min-h-[80px] mb-6">
                      <SignalChips items={cat.signals} accent={COLORS.accent} />
                    </div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 min-h-[72px]">{cat.description}</p>
                    <div className="border-t border-black/5 pt-6 flex-1 mb-10">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5 text-center">Core Product Lines</h4>
                      <ul className="space-y-3">
                        {cat.products.map(prod => (
                          <li key={prod} className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-600 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0" style={{ backgroundColor: COLORS.accent }} />
                            {prod}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-8 border-t border-black/10">
                      <Link href={cat.href} className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-[#00a651]">
                        Explore <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="max-w-[1600px] mx-auto py-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border-t border-black/10 pt-20">
              <div className="flex flex-col">
                <Link href="/processEquipments/meltCrystallization" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors">
                  <ArrowLeft className="group-hover:-translate-x-3 transition-transform text-[#00a651]" size={32} /> 
                  Melt Crystallization
                </Link>
              </div>
              
              <div className="flex flex-col text-right">
                <Link 
                  href="/processEquipments" 
                  className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors"
                >
                  Return
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