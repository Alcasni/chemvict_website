'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  ArrowRight,
  Layers,
  Filter,
  Maximize2,
  Settings2
} from 'lucide-react'
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

const CATEGORIES = [
  {
    title: 'Phase Separation',
    href: '/processEquipments/massTransfer/phaseSeparation',
    eyebrow: 'Gas Liquid and Liquid Liquid',
    icon: Filter,
    description: 'Removal of entrained droplets and phase disengagement engineered for reliable separation performance across diverse process conditions.',
    image: '/images/processEquipments/pic2.png',
    signals: ['High Separation Efficiency', 'Low Pressure Drop', 'Fine Droplet Capture'],
    products: ['Wire Mesh Mist Eliminator', 'Vane Mist Eliminator', 'Wire Mesh Coalescer']
  },
  {
    title: 'Packing',
    href: '/processEquipments/massTransfer/packing',
    eyebrow: 'Structured and Random',
    icon: Layers,
    description: 'Superior hydraulic performance solutions designed for higher capacity and reduced pressure drop across a wide operating range.',
    image: '/images/processEquipments/pic3.png',
    signals: ['High Capacity', 'Reduced Pressure Drop', 'Wide Operating Range'],
    products: ['Corrugated Sheet Structured Packing', 'Wire Gauze Structured Packing', 'Random Packing', 'Grid Packing', 'Corrosion Resistant Packing']
  },
  {
    title: 'Column Internals',
    href: '/processEquipments/massTransfer/columnInternals',
    eyebrow: 'Distribution and Support',
    icon: Maximize2,
    description: 'Precise liquid and gas distribution hardware engineered to maximize internal column performance and structural integrity.',
    image: '/images/processEquipments/pic4.png',
    signals: ['Precise Distribution', 'Reliable Support', 'Column Efficiency'],
    products: ['Liquid Distributors', 'Gas Distribution Devices', 'Liquid Collectors', 'Support Grids']
  },
  {
    title: 'Trays',
    href: '/processEquipments/massTransfer/trays',
    eyebrow: 'Hydraulic Performance',
    icon: Settings2,
    description: 'Advanced tray solutions engineered for hydraulic stability and operating flexibility in difficult or fouling services.',
    image: '/images/processEquipments/pic5.png',
    signals: ['Hydraulic Stability', 'Operating Flexibility', 'Fouling Resistance'],
    products: ['Fixed Valve Trays', 'Floating Valve Trays', 'Sieve Trays', 'Bubble Cap Trays']
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

export default function MassTransferPage() {
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
            <span style={{ color: COLORS.accent }}>Mass Transfer</span>
          </nav>

          {/* SECTION 1: HERO */}
          <header className="mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
              <div className="lg:col-span-8">
                <span className="block text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#00a651]">
                  Mass Transfer Equipment
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                  Engineered For <br />
                  Separation Precision.
                </h1>
                <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-3xl">
                  A dedicated engineering platform for column performance, utilizing advanced internals to optimize capacity and separation efficiency while maintaining reliable operation in critical process environments.
                </p>
              </div>
              
              <div className="lg:col-span-4 pt-4">
                <div className="border bg-white p-8 lg:p-10 shadow-sm" style={{ borderColor: COLORS.border }}>
                  <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Category Platform</span>
                  <div className="space-y-6">
                    {[
                      { label: 'Primary Function', value: 'Phase Separation' },
                      { label: 'Hardware Scope', value: 'Internals and Packing' },
                      { label: 'Performance Metric', value: 'High Capacity Low DP' }
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

          {/* SECTION 2: FEATURE IMAGE BAND */}
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
                    src="/images/processEquipments/massTransfer.png" 
                    alt="Mass Transfer Hardware" 
                    fill 
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/[0.03]" />
                </div>

                <div className="p-10 lg:p-20 xl:p-24 flex flex-col justify-center">
                  <span className="block text-xs font-black uppercase tracking-[0.3em] text-[#0284C7] mb-8">
                    Engineering Excellence
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic mb-8 leading-[0.95]">
                    Performance Across <br /> Critical Process <br /> Conditions.
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-xl">
                    Our mass transfer solutions are engineered for demanding operating conditions combining mechanical integrity with predictable hydraulic performance.
                  </p>
                  <div className="pt-6 border-t border-black/5">
                    <SignalChips 
                      accent={COLORS.subAccent} 
                      items={['High Capacity', 'Reduced Pressure Drop', 'Separation Efficiency', 'Column Performance']} 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 3: FOUR GATEWAY CARDS */}
          <section className="mb-32 lg:mb-48">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
                    <Image 
                      src={cat.image} 
                      alt={cat.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="min-h-[90px] mb-6">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                        {cat.eyebrow}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tighter uppercase italic leading-none">
                        {cat.title}
                      </h3>
                    </div>

                    <div className="min-h-[80px] mb-6">
                      <SignalChips items={cat.signals} accent={COLORS.accent} />
                    </div>

                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 min-h-[72px]">
                      {cat.description}
                    </p>

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
                      <Link 
                        href={cat.href}
                        className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-[#00a651]"
                      >
                        Explore
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION 4: CLOSING STRIP */}
          {/* <section className="py-32 border-t border-black/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <span className="block text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#00a651]">Engineering Integrity</span>
                <h3 className="text-4xl font-bold tracking-tight italic uppercase leading-tight mb-8">Engineered For <br />Plant Reliability.</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-4xl">
                  Our mass transfer platforms are designed to support stable operation and dependable integration across complex industrial environments. We focus on long term mechanical integrity and consistent process output for critical separation duties.
                </p>
              </div>
            </div>
          </section> */}

          {/* BOTTOM NAVIGATION - Right-aligned symmetrical arrow */}
          <div className="py-32">
            <div className="flex flex-col md:flex-row justify-end items-center gap-12 text-center md:text-right border-t border-black/10 pt-20">
              <div className="flex flex-col">
                <Link 
                  href="/processEquipments/heatTransfer" 
                  className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors"
                >
                  Heat Transfer Equipment
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