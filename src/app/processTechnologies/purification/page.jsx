'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, ChevronRight, ArrowRight, Microscope, Binary } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#0284C7', // Symmetrical blue for Purification
  subAccent: '#00a651',
  border: 'rgba(26, 28, 30, 0.1)',
}

const PURIFICATION_PROJECTS = [
  {
    id: '01',
    title: 'TDI Chlorine Removal',
    category: 'Isocyanate Purification',
    desc: 'High-efficiency drop-in replacement packing that significantly reduces hydrolyzable chloride while maintaining nameplate capacity.',
    link: '/processTechnologies/purification/tdi'
  },
  {
    id: '02',
    title: 'Electronic-Grade DMC',
    category: 'Battery Materials',
    desc: 'Achieving ≥99.99% purity for lithium-ion battery electrolytes through precise dehydration and DMO removal.',
    link: '/processTechnologies/purification/electronic-dmc'
  },
  {
    id: '03',
    title: 'Fluorochemicals',
    category: 'Electronic Specialty Gases',
    desc: 'Second-generation high-performance packing designed for extreme purity wet chemicals and fluorinated electrolytes.',
    link: '/processTechnologies/purification/fluorochemicals'
  },
  {
    id: '04',
    title: 'Electronic Chemicals',
    category: 'Electronic Grade NMP',
    desc: 'Strict ppb-level metal ion control and residence time management for electronic-grade NMP and stripping solutions.',
    link: '/processTechnologies/purification/electronic-chemicals'
  },
  {
    id: '05',
    title: 'Pyridine & Derivatives',
    category: 'Azeotropic Separation',
    desc: 'Overcoming complex azeotropic challenges in pharmaceuticals using validated physical-property databases and operational data.',
    link: '/processTechnologies/purification/pyridine'
  },
  {
    id: '06',
    title: 'DMAC Solvent Recovery',
    category: 'High-Performance Solvents',
    desc: 'Recovery of DMAc from wastewater with stringent moisture and acidity limits (<50 ppm) to prevent hydrolysis.',
    link: '/processTechnologies/purification/dmac'
  },
  {
    id: '07',
    title: 'm-Phenylenediamine (MPD)',
    category: 'Positional Isomers',
    desc: 'Integrated distillation and crystallization for the separation of difficult MPD, OPD, and PPD positional isomers.',
    link: '/processTechnologies/purification/mpd'
  },
  {
    id: '08',
    title: 'Citral',
    category: 'Fragrance & Pharma',
    desc: 'High-vacuum distillation obtaining >98.5 wt% purity for acyclic monoterpenes used in Vitamin A synthesis.',
    link: '/processTechnologies/purification/citral'
  },
  {
    id: '09',
    title: 'High-Purity Menthol',
    category: 'Chiral Separation',
    desc: 'Proprietary continuous crystallization technology to isolate pure l-menthol isomers for pharmaceutical and food applications.',
    link: '/processTechnologies/purification/menthol'
  }
]

export default function PurificationTechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <nav className="flex items-center gap-2 mb-12 opacity-60 text-sm font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#0284C7] transition-colors flex items-center gap-1">
              <Home size={16} /> 
            </Link>
            <ChevronRight size={12} />
            <Link href="/processTechnologies" className="hover:text-[#0284C7] transition-colors">
              Process Technologies
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: COLORS.accent }}>Purification Technology</span>
          </nav>

          <header className="mb-24 lg:mb-32 border-l-4 border-[#0284C7] pl-8 lg:pl-12">
            <span className="block text-xs font-black uppercase tracking-[0.3em] mb-4 text-[#0284C7]">
              The Separation Science
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95]">
              Purification <br />Technologies.
            </h1>
            <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
              Precision separation at the molecular level. We solve complex challenges including isomer isolation, ppb-level impurity control, and azeotropic rectification.
            </p>
          </header>

          <section className="mb-32">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight uppercase italic mb-4">Technical Portfolios</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">Systematic breakdown of molecular purity benchmarks and specialized isolation hardware.</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest opacity-40">
                <Microscope size={18} />
                <span>Indexed Technologies: {PURIFICATION_PROJECTS.length}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-black/5 border border-black/10">
              {PURIFICATION_PROJECTS.map((project, idx) => (
                <Link 
                  key={idx} 
                  href={project.link}
                  className="group relative bg-[#F5F5F2] hover:bg-white transition-all duration-500 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-1 text-xs font-black text-slate-300 group-hover:text-[#0284C7] transition-colors">
                    {project.id}
                  </div>
                  
                  <div className="lg:col-span-4">
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#00a651] mb-2">{project.category}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight group-hover:italic transition-all uppercase">{project.title}</h3>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-base text-slate-500 font-medium leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex justify-end">
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] group-hover:text-[#0284C7] transition-colors">
                      Technical Architecture <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}