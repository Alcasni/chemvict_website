'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Home,
  ChevronRight,
  ArrowRight,
  ArrowUpDown,
  Thermometer,
  Snowflake,
  Boxes,
  ShieldCheck,
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

const HERO_FAMILIES = [
  {
    id: '01',
    title: 'Mass Transfer Equipment',
    icon: ArrowUpDown,
    accent: '#00a651',
    meta: '4 Subgroups',
  },
  {
    id: '02',
    title: 'Heat Transfer Equipment',
    icon: Thermometer,
    accent: '#0284C7',
    meta: '3 Product Types',
  },
  {
    id: '03',
    title: 'Melt Crystallization',
    icon: Snowflake,
    accent: '#94A3B8',
    meta: '1 Core Platform',
  },
  {
    id: '04',
    title: 'Polymer Equipment',
    icon: Boxes,
    accent: '#00a651',
    meta: '2 Product Types',
  },
]

const MASS_TRANSFER_GROUPS = [
  {
    title: 'Phase Separation',
    accent: '#00a651',
    image: '/images/processEquipments/pic2.png',
    signals: ['High Separation Efficiency', 'Low Pressure Drop', 'Fine Droplet Capture'],
    items: [
      'Wire Mesh Mist Eliminator',
      'Vane Mist Eliminator',
      'Wire Mesh Coalescer',
    ],
  },
  {
    title: 'Packing',
    accent: '#0284C7',
    image: '/images/processEquipments/pic3.png',
    signals: ['High Capacity', 'Reduced Pressure Drop', 'Wide Operating Range'],
    items: [
      'Corrugated Sheet Structured Packing',
      'Wire Gauze Structured Packing',
      'Random Packing',
      'Grid Packing',
      'Corrosion Resistant Packing',
    ],
  },
  {
    title: 'Column Internals',
    accent: '#1A1C1E',
    image: '/images/processEquipments/pic4.png',
    signals: ['Precise Distribution', 'Reliable Support', 'Column Efficiency'],
    items: [
      'Liquid Distributors',
      'Gas Distribution Devices',
      'Liquid Collectors',
      'Flashing Feed Devices',
      'Liquid Feed Devices',
      'Hold Down Grids',
      'Support Grids',
    ],
  },
  {
    title: 'Trays',
    accent: '#00a651',
    image: '/images/processEquipments/pic5.png',
    signals: ['Hydraulic Stability', 'Operating Flexibility', 'Fouling Resistance'],
    items: [
      'Fixed Valve Trays',
      'Floating Valve Trays',
      'Sieve Trays',
      'Bubble Cap Trays',
      'Dualflow Trays',
      'Baffle Trays',
      'Cartridge Trays',
    ],
  },
]

const SPECIALTY_FAMILIES = [
  {
    id: '02',
    title: 'Heat Transfer Equipment',
    href: '/processEquipments/heatTransfer',
    icon: Thermometer,
    accent: '#0284C7',
    eyebrow: 'Thermal Performance',
    description:
      'Engineered heat transfer equipment designed for vacuum condensation, steam generation, and efficient evaporation in demanding industrial service.',
    image: '/images/processEquipments/pic6.png',
    signals: ['Vacuum Performance', 'Thermal Efficiency', 'Product Protection'],
    items: [
      'Hammerhead Condenser',
      'Self Circulating High Pressure Boiler',
      'Falling Film Evaporator',
    ],
  },
  {
    id: '03',
    title: 'Melt Crystallization',
    href: '/processEquipments/meltCrystallization',
    icon: Snowflake,
    accent: '#94A3B8',
    eyebrow: 'High Purity Crystallization',
    description:
      'Advanced crystallization systems designed for ultra high purity separation where conventional thermal routes become energy intensive or technically constrained.',
    image: '/images/processEquipments/pic7.png',
    signals: ['Ultra High Purity', 'Energy Efficiency', 'Solvent Free Processing'],
    items: ['Suspension Melt Crystallization'],
  },
  {
    id: '04',
    title: 'Polymer Equipment',
    href: '/processEquipments/polymer',
    icon: Boxes,
    accent: '#00a651',
    eyebrow: 'Polymer Process Systems',
    description:
      'Robust polymer process equipment designed for intensive mixing, controlled heat transfer, and efficient devolatilization in continuous industrial operation.',
    image: '/images/processEquipments/pic8.png',
    signals: ['Short Residence Time', 'Low Residual Volatiles', 'Consistent Polymer Quality'],
    items: ['Static Mixer', 'Polymer Vacuum Devolatilization System'],
  },
]

function PhotoBlock({
  src,
  alt,
  ratio = 'aspect-[16/10]',
  priority = false,
  objectPosition = 'center',
}) {
  return (
    <div
      className={`relative overflow-hidden border bg-white ${ratio}`}
      style={{ borderColor: COLORS.border }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
    </div>
  )
}

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

export default function EquipmentPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      <Header />

      {/* Spacing matched exactly to your reference page */}
      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-sm font-bold uppercase tracking-[0.2em]">
            <Link
              href="/"
              className="hover:text-[#00a651] transition-colors flex items-center gap-1"
            >
              <Home size={16} />
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: COLORS.accent }}>Process Equipment</span>
          </nav>

          {/* HERO HEADER - Eyebrow color restored to Green */}
          <header className="mb-20 lg:mb-24">
            <div className="max-w-5xl">
              <span className="block text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#00a651]">
                Industrial Process Equipment
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                Built For
                <br />
                Demanding Process Duty.
              </h1>

              <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
                A portfolio of precision engineered equipment spanning mass transfer,
                thermal systems, crystallization, and polymer processing,
                designed to deliver reliability, efficiency, and high performance operation in demanding industrial environments.
              </p>
            </div>
          </header>

          {/* CATEGORY GRID */}
          <section className="mb-32 lg:mb-48">
            <div
              className="bg-white border p-10 lg:p-14 shadow-sm"
              style={{ borderColor: COLORS.border }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {HERO_FAMILIES.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.id}
                      className="border p-10 min-h-[220px] flex flex-col justify-between bg-white transition-transform duration-500 hover:-translate-y-2 group"
                      style={{ borderColor: COLORS.border }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-500 group-hover:bg-opacity-20"
                        style={{
                          backgroundColor: `${item.accent}14`,
                          color: item.accent,
                        }}
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <span className="block text-[11px] font-black uppercase tracking-[0.28em] mb-4 text-slate-400">
                          {item.id} / Platform
                        </span>
                        <h3 className="text-[1.2rem] leading-[1.05] font-black uppercase tracking-tight mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                          {item.meta}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 pt-10 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  ['04', 'Core Platforms'],
                  ['24/7', 'Plant Reliability'],
                  ['Plant', 'System Integration'],
                  ['Field', 'Proven Performance'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="text-4xl font-black tracking-tight">{value}</div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400 mt-3 leading-relaxed">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ENGINEERING PHOTO BAND */}
          <section className="mb-32 lg:mb-48">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden border bg-white shadow-sm"
              style={{ borderColor: COLORS.border }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <div className="relative h-[260px] md:h-[450px] overflow-hidden">
                    <Image
                      src="/images/processEquipments/pic1.png"
                      alt="Engineering equipment"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-end">
                      <div className="p-8 md:p-14 max-w-4xl">
                        <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-white/80 mb-4">
                          Industrial Performance
                        </span>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase italic leading-tight mb-4 text-white">
                          Performance Across Vacuum, Heat, Flow, And Purity.
                        </h3>
                        <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed">
                          Our equipment is designed for demanding operating conditions, combining process precision, mechanical integrity, and long term plant reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-black/10 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="block text-xs font-black uppercase tracking-[0.26em] text-slate-400 mb-4">
                      Why It Matters
                    </span>
                    <p className="text-base text-slate-600 font-medium leading-relaxed">
                      Every system is engineered to support stable operation, lower lifecycle cost, and dependable integration across complex industrial environments.
                    </p>
                  </div>

                  <div className="pt-8">
                    <SignalChips
                      accent="#0284C7"
                      items={[
                        'Mechanical Integrity',
                        'Process Precision',
                        'Long Term Reliability',
                      ]}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* MASS TRANSFER */}
          <section className="mb-32 lg:mb-48">
            <div className="mb-16 max-w-4xl">
              <span className="block text-xs font-black uppercase tracking-[0.3em] mb-4 text-[#00a651]">
                Mass Transfer Equipment
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase italic mb-6 leading-tight">
                Designed For High Efficiency Separation.
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Enhance column performance with advanced separation internals engineered for higher capacity, lower pressure drop, and dependable operating performance across demanding services.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="bg-white border shadow-sm overflow-hidden"
              style={{ borderColor: COLORS.border }}
            >
              <div className="h-[4px] w-full bg-[#00a651]" />

              <div className="p-8 lg:p-14 border-b border-black/10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <div>
                    <span className="block text-xs font-black uppercase tracking-[0.28em] text-slate-400 mb-4">
                      Separation Systems
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter uppercase italic leading-tight">
                      Mass Transfer Equipment
                    </h3>
                  </div>

                  <Link
                    href="/processEquipments/massTransfer"
                    className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.22em] text-[#00a651]"
                  >
                    Explore
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              <div className="p-8 lg:p-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {MASS_TRANSFER_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="border p-8 bg-white transition-transform duration-500 hover:-translate-y-1 group"
                    style={{ borderColor: COLORS.border }}
                  >
                    <PhotoBlock
                      src={group.image}
                      alt={group.title}
                      ratio="aspect-[4/3]"
                    />

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mt-8 mb-6"
                      style={{
                        backgroundColor: `${group.accent}14`,
                        color: group.accent,
                      }}
                    >
                      <ShieldCheck size={18} />
                    </div>

                    <h4 className="text-sm font-black uppercase tracking-[0.24em] mb-4">
                      {group.title}
                    </h4>

                    <div className="mb-6">
                      <SignalChips items={group.signals} accent={group.accent} />
                    </div>

                    <ul className="space-y-3 border-t border-black/5 pt-6">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-600 font-bold uppercase tracking-[0.12em] leading-relaxed flex items-start gap-3"
                        >
                          <span
                            className="w-2 h-2 rounded-full mt-[7px] shrink-0"
                            style={{ backgroundColor: group.accent }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* SPECIALTY SECTION */}
          <section className="mb-32 lg:mb-48">
            <div className="mb-16 max-w-4xl">
              <span className="block text-xs font-black uppercase tracking-[0.3em] mb-4 text-[#0284C7]">
                Specialized Equipment Systems
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase italic mb-6 leading-tight">
                Specialized Systems For Demanding Applications.
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Explore specialized equipment families engineered for high purity processing, advanced thermal performance, and demanding polymer applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {SPECIALTY_FAMILIES.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: idx * 0.05 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="bg-white border shadow-sm overflow-hidden h-full flex flex-col group"
                    style={{ borderColor: COLORS.border }}
                  >
                    <div
                      className="h-[4px] w-full"
                      style={{ backgroundColor: item.accent }}
                    />

                    <PhotoBlock
                      src={item.image}
                      alt={item.title}
                      ratio="aspect-[16/10]"
                    />

                    <div className="p-8 lg:p-12 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-5 mb-6 min-h-[96px]">
                        <div>
                          <span className="block text-xs font-black uppercase tracking-[0.28em] text-slate-400 mb-4">
                            {item.eyebrow}
                          </span>
                          <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter uppercase italic leading-tight">
                            {item.title}
                          </h3>
                        </div>

                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${item.accent}14`,
                            color: item.accent,
                          }}
                        >
                          <Icon size={20} />
                        </div>
                      </div>

                      <div className="mb-8 min-h-[72px]">
                        <SignalChips items={item.signals} accent={item.accent} />
                      </div>

                      <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 min-h-[84px]">
                        {item.description}
                      </p>

                      <div className="border-t border-black/5 pt-8 flex-1">
                        <h4 className="text-xs font-black uppercase tracking-[0.22em] mb-6 text-slate-400">
                          Core Product Lines
                        </h4>

                        <ul className="space-y-4">
                          {item.items.map((title) => (
                            <li
                              key={title}
                              className="text-sm font-bold uppercase tracking-[0.14em] text-slate-600 flex items-start gap-3"
                            >
                              <span
                                className="w-2 h-2 rounded-full mt-[7px] shrink-0"
                                style={{ backgroundColor: item.accent }}
                              />
                              <span>{title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-10 border-t border-black/10">
                        <Link
                          href={item.href}
                          className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.22em]"
                          style={{ color: item.accent }}
                        >
                          Explore
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-2 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}