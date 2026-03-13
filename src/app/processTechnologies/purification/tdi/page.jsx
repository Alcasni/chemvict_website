'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureBlock from '../../components/featureBlock'
import AdvantageGrid from '../../components/advantageGrid'

export default function TDIPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F2] text-[#1A1C1E]">
      <Header />
      
      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* NAVIGATION */}
          <nav className="flex items-center gap-2 mb-16 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#0284C7] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={10} />
            <Link href="/processTechnologies/purification" className="hover:text-[#0284C7] transition-colors">Purification Technology</Link>
            <ChevronRight size={10} />
            <span className="text-[#0284C7]">TDI Chlorine Removal</span>
          </nav>

          {/* SPLIT HERO SECTION */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-[#0284C7] mb-8">
                Technical Architecture 01
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                TDI <br />Chlorine Removal.
              </h1>
              <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-2xl italic border-l-4 border-[#0284C7] pl-8">
                "TDI (toluene diisocyanate) is a key building block for the polyurethane industry. During TDI production, trace hydrolyzable chloride may remain in the product."
              </p>
            </div>
            
            {/* TECHNICAL IMAGE CONTAINER */}
            <div className="lg:col-span-5 aspect-square bg-white border border-black/5 relative overflow-hidden group">
               <img 
                 src="/images/processTechnologies/tdi.jpg" 
                 alt="TDI Purification and Chlorine Removal System"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-md">
                   High-Efficiency Distillation Column
                 </span>
               </div>
            </div>
          </header>

          {/* TECHNICAL NARRATIVE */}
          <section className="mb-32 border-t border-black/10">
            <FeatureBlock 
              subtitle="Purity Benchmarks"
              title="Chloride Mitigation"
              description="If elevated, hydrolyzable chloride increases total chlorine and can adversely affect downstream polyurethane chain-extension performance."
              highlights={[
                "Control of trace hydrolyzable chloride to maintain product specifications",
                "Mitigation of adverse effects on downstream polyurethane chain-extension performance"
              ]}
            />

            <FeatureBlock 
              subtitle="System Performance"
              title="Technical Architecture"
              description="Effective removal depends strongly on separation efficiency and column hydraulics, particularly packing performance and pressure drop."
              highlights={[
                "Optimization of column hydraulics for effective chloride removal",
                "High-performance packing selection to manage pressure drop requirements"
              ]}
            />
          </section>
        </div>

        {/* COMPETITIVE ADVANTAGES */}
        <AdvantageGrid 
          title="The Chemvict Edge"
          items={[
            {
              title: "Drop-in Replacement",
              description: "Using Chemvict’s highly efficient structured packing and column internals as a drop-in replacement for conventional structured packing."
            },
            {
              title: "Nameplate Capacity",
              description: "Producers can maintain nameplate capacity while significantly reducing hydrolyzable chloride in the TDI product."
            },
            {
              title: "Industrial Standards",
              description: "Engineering solutions designed to meet the high standards of the polyurethane building block industry."
            }
          ]}
        />

        {/* BOTTOM NAVIGATION */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border-t border-black/10 pt-20">
            <Link href="/processTechnologies/purification" className="group inline-flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] hover:text-[#0284C7] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform" size={24} /> 
              Purification Ledger
            </Link>
            
            <div className="text-right hidden md:block">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Next Architecture</span>
              <Link 
                href="/processTechnologies/purification/fluoroChemicals" 
                className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#0284C7] transition-colors"
              >
                Fluorochemicals
                <ArrowRight className="group-hover:translate-x-3 transition-transform text-[#0284C7]" size={32} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}