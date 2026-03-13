'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, ChevronRight, ArrowRight, Binary } from 'lucide-react'
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

const INTEGRATED_PROJECTS = [
  {
    id: '01',
    title: 'Benzenediol & Derivatives',
    category: 'Thermal Separation',
    desc: 'Custom process trains producing catechol and hydroquinone at ≥99.0 wt% purity, with optional crystallization for ≥99.9 wt% hydroquinone.',
    link: '/processTechnologies/integrated/benzenediol'
  },
  {
    id: '02',
    title: 'Antioxidants',
    category: 'Fine Chemicals',
    desc: 'Rigorous simulation and precise column design for closely boiling tert-butyl phenol isomers to achieve ≥99.5 wt% purity.',
    link: '/processTechnologies/integrated/antioxidants'
  },
  {
    id: '03',
    title: 'NMP & GBL',
    category: 'Solvent Purification',
    desc: 'Thermodynamic modeling with validated physical-property data to ensure high purity and minimize thermal degradation in NMP and GBL production.',
    link: '/processTechnologies/integrated/nmp-gbl'
  },
  {
    id: '04',
    title: 'Fatty Acid',
    category: 'Oleochemicals',
    desc: 'Low pressure drop system design tailored for thermally sensitive fatty acids, featuring specialized material selection for high-corrosive environments.',
    link: '/processTechnologies/integrated/fatty-acids'
  },
  {
    id: '05',
    title: 'Dichlorobenzenes (DCB)',
    category: 'Isomer Separation',
    desc: 'Multi-stage distillation coupled with continuous crystallization to achieve ≥99.9 wt% p-DCB and ≥99.5 wt% o-DCB purity.',
    link: '/processTechnologies/integrated/dichlorobenzenes'
  }
]

export default function IntegratedTechnologyPage() {
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
            <Link href="/processTechnologies" className="hover:text-[#00a651] transition-colors">
              Process Technologies
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: COLORS.accent }}>Integrated Systems</span>
          </nav>

          <header className="mb-24 lg:mb-32 border-l-4 border-[#00a651] pl-8 lg:pl-12">
            <span className="block text-xs font-black uppercase tracking-[0.3em] mb-4 text-[#00a651]">
              Process Design & Delivery
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95]">
              Integrated <br />Process Packages.
            </h1>
            <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium max-w-4xl">
              From simulation-driven design to physical implementation. We deliver end-to-end Process Design Packages (PDP) integrated with specialized hardware.
            </p>
          </header>

          <section className="mb-32">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight uppercase italic mb-4">Technical Portfolios</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">Systematic breakdown of engineering logic, hydraulic parameters, and hardware configurations for proprietary process trains.</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest opacity-40">
                <Binary size={18} />
                <span>Indexed Systems: {INTEGRATED_PROJECTS.length}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-black/5 border border-black/10">
              {INTEGRATED_PROJECTS.map((project, idx) => (
                <Link 
                  key={idx} 
                  href={project.link}
                  className="group relative bg-[#F5F5F2] hover:bg-white transition-all duration-500 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-1 text-xs font-black text-slate-300 group-hover:text-[#00a651] transition-colors">
                    {project.id}
                  </div>
                  
                  <div className="lg:col-span-4">
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0284C7] mb-2">{project.category}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight group-hover:italic transition-all uppercase">{project.title}</h3>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-base text-slate-500 font-medium leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex justify-end">
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] group-hover:text-[#00a651] transition-colors">
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