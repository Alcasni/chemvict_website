'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Snowflake
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
    title: 'Suspension Melt Crystallization',
    href: '/processEquipments/meltCrystallization/suspension',
    eyebrow: 'Core Technology',
    icon: Snowflake,
    description: 'A low-temperature purification technology based on melting point differences, engineered for continuous operation, high product purity, and efficient separation in systems where conventional distillation becomes difficult, energy-intensive, or unsuitable.',
    image: '/images/processEquipments/m2.png',
    signals: ['Ultra-High Purity', 'Low Energy Use', 'Solvent-Free Separation'],
    products: ['Continuous Crystallization', 'Crystal Washing And Separation', 'Purified Melt Recovery']
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

export default function MeltPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />
      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* NAVIGATION */}
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors">
              <Home size={14} />
            </Link>
            <ChevronRight size={10} />
            <Link href="/processEquipments" className="hover:text-[#00a651] transition-colors">Process Equipment</Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}>Melt Crystallization</span>
          </nav>

          {/* SECTION 1: HERO */}
          <header className="mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
              <div className="lg:col-span-8">
                <span className="block text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#00a651]">
                  Melt Crystallization
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                  Purification Through <br />
                  Controlled Crystallization.
                </h1>
                <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
                  An advanced separation platform designed for ultra-high-purity processing, low-temperature operation, and efficient purification where conventional thermal routes become energy-intensive or technically constrained.
                </p>
              </div>
              <div className="lg:col-span-4 pt-4">
                <div className="border bg-white p-8 lg:p-10 shadow-sm" style={{ borderColor: COLORS.border }}>
                  <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Summary Panel</span>
                  <div className="space-y-6">
                    {[
                      { label: 'Core Platform', value: 'Suspension Melt Crystallization' },
                      { label: 'Separation Basis', value: 'Melting Point Difference' },
                      { label: 'Performance Focus', value: 'Purity With Lower Energy Use' }
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

          {/* SECTION 2: FEATURE BAND */}
          <section className="mb-32 lg:mb-48">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="relative overflow-hidden border bg-white shadow-sm" 
              style={{ borderColor: COLORS.border }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                <div className="relative min-h-[450px] lg:min-h-full overflow-hidden bg-[#F8F8F6]">
                  <Image 
                    src="/images/processEquipments/m1.png" 
                    alt="Melt Detail" 
                    fill 
                    priority 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/[0.03]" />
                </div>
                <div className="p-10 lg:p-20 xl:p-24 flex flex-col justify-center">
                  <span className="block text-xs font-black uppercase tracking-[0.3em] text-[#00a651] mb-8">
                    High-Purity Separation
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic mb-8 leading-[0.95]">
                    Low Temperature Processing. <br /> High Purity Output.
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-xl">
                    Suspension melt crystallization enables efficient purification of difficult systems such as isomers, heat-sensitive substances, and electronic chemicals while reducing energy demand and avoiding solvent introduction.
                  </p>
                  <div className="pt-6 border-t border-black/5">
                    <SignalChips accent={COLORS.accent} items={['Ultra-High Purity', 'Energy Efficiency', 'Solvent-Free Processing', 'Continuous Operation']} />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 3: SINGLE CORE CARD */}
          <section className="mb-32 lg:mb-48">
            <div className="max-w-xl mx-auto">
              {CATEGORIES.map((cat, idx) => (
                <motion.div 
                  key={cat.title} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: idx * 0.1 }} 
                  viewport={{ once: true }} 
                  className="bg-white border shadow-sm flex flex-col group" 
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="min-h-[90px] mb-6">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 text-center">{cat.eyebrow}</span>
                      <h3 className="text-2xl font-bold tracking-tighter uppercase italic leading-none text-center">{cat.title}</h3>
                    </div>
                    <div className="min-h-[80px] mb-6 flex justify-center">
                      <SignalChips items={cat.signals} accent={COLORS.accent} />
                    </div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 min-h-[72px] text-center">{cat.description}</p>
                    <div className="border-t border-black/5 pt-6 flex-1 mb-10">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5 text-center">Core Product Lines</h4>
                      <ul className="space-y-3 px-8">
                        {cat.products.map(prod => (
                          <li key={prod} className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-600 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0" style={{ backgroundColor: COLORS.accent }} />
                            {prod}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-8 border-t border-black/10">
                      <Link href={cat.href} className="group flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-[#00a651]">
                        Explore <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* BOTTOM NAVIGATION */}
          <div className="max-w-[1600px] mx-auto py-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border-t border-black/10 pt-20">
              <div className="flex flex-col">
                <Link href="/processEquipments/heatTransfer" className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors">
                  <ArrowLeft className="group-hover:-translate-x-3 transition-transform text-[#00a651]" size={32} /> 
                  Heat Transfer
                </Link>
              </div>
              
              <div className="flex flex-col text-right">
                <Link 
                  href="/processEquipments/polymer" 
                  className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors"
                >
                  Polymer Equipment
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