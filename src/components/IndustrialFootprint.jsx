'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  IconDroplet,
  IconPerfume,
  IconBrandPolymer,
  IconAtom2,
  IconBarrel,
  IconTestPipe,
  IconCpu,
  IconLeaf2,
  IconCapsuleHorizontal
} from '@tabler/icons-react'

const sectors = [
  {
    id: '01',
    title: 'Oleochemicals',
    icon: IconDroplet,
    description: 'Specialized separation for fatty acids and natural alcohol refining processes.',
    tags: ['Biodiesel', 'Surfactants'],
    image: '/images/sectors/news-01.png',
  },
  {
    id: '02',
    title: 'Flavors & Fragrances',
    icon: IconPerfume,
    description: 'Ultra-low temp distillation for volatile organic aroma compounds.',
    tags: ['Aroma', 'Essential Oils'],
    image: '/images/sectors/news-02.png',
  },
  {
    id: '03',
    title: 'Advanced Materials',
    icon: IconBrandPolymer,
    description: 'Processing precursors for high-performance composite materials.',
    tags: ['Precursors', 'Polymers'],
    image: '/images/sectors/news-03.png',
  },
  {
    id: '04',
    title: 'Chemical Intermediates',
    icon: IconAtom2,
    description: 'Optimization of yield and purity for complex synthetic intermediates.',
    tags: ['Synthesis', 'Organic'],
    image: '/images/sectors/news-04.png',
  },
  {
    id: '05',
    title: 'Petrochemicals',
    icon: IconBarrel,
    description: 'Cascaded energy systems for byproduct recovery and purification.',
    tags: ['Refining', 'Aromatics'],
    image: '/images/sectors/news-05.png',
  },
  {
    id: '06',
    title: 'Specialty Additives',
    icon: IconTestPipe,
    description: 'Fine-tuned thermal separation for high-value industrial additives.',
    tags: ['Stabilizers', 'Antioxidants'],
    image: '/images/sectors/news-06.png',
  },
  {
    id: '07',
    title: 'Electronic Chemicals',
    icon: IconCpu,
    description: 'Ultra-pure solvent systems for high-yield semiconductor manufacturing.',
    tags: ['Semiconductor', 'PPT Grade'],
    image: '/images/sectors/news-07.png',
  },
  {
    id: '08',
    title: 'Energy & Environmental',
    icon: IconLeaf2,
    description: 'Carbon-neutral operations and sustainable resource recovery.',
    tags: ['Sustainability', 'ZLD'],
    image: '/images/sectors/news-08.png',
  },
  {
    id: '09',
    title: 'Nutraceuticals',
    icon: IconCapsuleHorizontal,
    description: 'Gentle molecular distillation for vitamins and omega-3 oils.',
    tags: ['Vitamins', 'Lipids'],
    image: '/images/sectors/news-09.png',
  },
]

export default function IndustrialFootprint() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="mx-auto max-w-[1400px]">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00a651]"></span>
              <span className="text-xs font-bold tracking-[0.3em] text-[#00a651] uppercase">Industrial Validation</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase leading-[0.85] italic">
              Proven Across <br /> 
              <span className="text-slate-300 group-hover:text-slate-950 transition-colors duration-700">Industrial Sectors.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-sm md:text-base leading-relaxed border-l border-slate-200 pl-8">
            From molecular refinement to macro-scale plant optimization, Chemvict technology is the standard for the world’s most demanding sectors.
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => {
            const SectorIcon = sector.icon
            return (
              <motion.div
                key={sector.id}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] bg-slate-900 overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#00a651]/30"
              >
                {/* BACKGROUND IMAGE - grayscale logic preserved */}
                <div className="absolute inset-0">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="h-full w-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Top Bar - Always visible */}
                  <div className="flex justify-start items-start">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 text-white transition-colors group-hover:bg-[#00a651] group-hover:border-[#00a651]">
                      <SectorIcon size={24} stroke={1.5} />
                    </div>
                  </div>

                  {/* Bottom Content - Disappears on hover */}
                  <div className="space-y-4 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white tracking-tight uppercase italic leading-none">
                        {sector.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {sector.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sector.tags.map((tag) => (
                          <span key={tag} className="text-[9px] font-bold text-white bg-white/10 px-2 py-1 rounded border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}