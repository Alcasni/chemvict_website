'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  ChevronRight, 
  ArrowRight, 
  Target, 
  Zap, 
  Layers, 
  Recycle, 
  Cpu, 
  Search, 
  Leaf,
  BarChart3,
  Settings
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#00a651', // Sustainability Green
  subAccent: '#0284C7', // Technical Blue
  border: 'rgba(26, 28, 30, 0.1)',
}

const SUSTAINABILITY_INITIATIVES = [
  { 
    id: '01', 
    slug: 'co2-capture', 
    category: 'Carbon Management', 
    title: 'CO2 Capture', 
    icon: Target, 
    image: '/images/sustainability/news-01.png', 
    desc: 'Implementing chemical and physical absorption systems using advanced solvents to limit global warming pathways.' 
  },
  { 
    id: '02', 
    slug: 'heat-pump-assisted-distillation', 
    category: 'Energy Recovery', 
    title: 'Heat Pump Distillation', 
    icon: Zap, 
    image: '/images/sustainability/news-02.png', 
    desc: 'Upgrading low-grade waste heat via mechanical compression to significantly reduce primary heating demand.' 
  },
  { 
    id: '03', 
    slug: 'dividing-wall-column-dwc', 
    category: 'Process Intensification', 
    title: 'Dividing Wall Column (DWC)', 
    icon: Layers, 
    image: '/images/sustainability/news-03.png', 
    desc: 'Integrating multiple distillation functions in a single shell for ~30% reduction in energy and CAPEX.' 
  },
  { 
    id: '04', 
    slug: 'multiple-effect-distillation', 
    category: 'Thermal Cascading', 
    title: 'Multiple-Effect Distillation', 
    icon: Recycle, 
    image: '/images/sustainability/news-04.png', 
    desc: 'Cascading operating pressures to recycle latent heat across stages, eliminating external utility needs.' 
  },
  { 
    id: '05', 
    slug: 'distillation-system-energy-optimization', 
    category: 'System Intelligence', 
    title: 'Energy Optimization', 
    icon: Cpu, 
    image: '/images/sustainability/news-05.png', 
    desc: 'Utilizing pinch analysis and integrated modeling to identify globally optimal energy-saving strategies.' 
  },
  { 
    id: '06', 
    slug: 'capacity-debottlenecking-and-efficiency-improvement', 
    category: 'Operational Excellence', 
    title: 'Capacity Debottlenecking', 
    icon: Search, 
    image: '/images/sustainability/news-06.png', 
    desc: 'Unlocking asset potential through targeted revamps and high-performance tower internals.' 
  }
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* BREADCRUMB */}
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-sm font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors flex items-center gap-1">
              <Home size={16} /> 
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: COLORS.accent }}>Sustainability</span>
          </nav>

          {/* HEADER */}
          <header className="mb-24 lg:mb-32 max-w-5xl">
            <span className="block text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#00a651]">
              Low-Carbon Solutions
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
              Engineering a <br /> Low-Carbon Future.
            </h1>
            <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
              Applying rigorous chemical engineering logic to decarbonize industrial processes through thermal integration, 
              spatial intensification, and resource recovery.
            </p>
          </header>

          {/* CASE STUDIES GATEWAY SECTIONS */}
          <div className="space-y-32 lg:space-y-48 mb-48">
            {SUSTAINABILITY_INITIATIVES.map((news, idx) => {
              const Icon = news.icon;
              const isEven = idx % 2 === 0;

              return (
                <section key={news.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* TEXT SIDE */}
                    <div className={`lg:col-span-5 ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="sticky top-40">
                        <div className="flex items-center gap-3 mb-6">
                          <Icon size={20} className="text-[#00a651]" />
                          <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                            {news.category}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-8 uppercase italic leading-tight">
                          {news.title}
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                          {news.desc}
                        </p>
                        <Link 
                          href={`/sustainability/${news.slug}`} 
                          className="group flex items-center gap-6 text-base font-black uppercase tracking-[0.2em] text-[#00a651]"
                        >
                        Case Study 
                          <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* IMAGE SIDE */}
                    <div 
                      className={`lg:col-span-7 ${!isEven ? 'lg:order-1' : ''} bg-white border p-4 lg:p-6 shadow-sm overflow-hidden`} 
                      style={{ borderColor: COLORS.border }}
                    >
                      <div className="relative aspect-video overflow-hidden group">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 text-4xl font-black italic opacity-10 pointer-events-none">
                          {news.id}
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
              )
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}