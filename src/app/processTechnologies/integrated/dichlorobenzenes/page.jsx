'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureBlock from '../../components/featureBlock'
import AdvantageGrid from '../../components/advantageGrid'

export default function DichlorobenzenesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F2] text-[#1A1C1E]">
      <Header />
      
      <main className="flex-grow pt-32 lg:pt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* NAVIGATION */}
          <nav className="flex items-center gap-2 mb-16 opacity-60 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={10} />
            <Link href="/processTechnologies/integrated" className="hover:text-[#00a651] transition-colors">Integrated Systems</Link>
            <ChevronRight size={10} />
            <span className="text-[#00a651]">Dichlorobenzenes (DCB)</span>
          </nav>

          {/* SPLIT HERO SECTION */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-[#00a651] mb-8">
                System Architecture 05
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                Dichlorobenzenes <br />(DCB).
              </h1>
              <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-2xl italic border-l-4 border-[#00a651] pl-8">
                "Implementing multi-stage fractionation and continuous crystallization to isolate high-purity isomeric forms used in advanced resins, lubricants, and pesticide formulations."
              </p>
            </div>
            
            {/* TECHNICAL IMAGE CONTAINER */}
            <div className="lg:col-span-5 aspect-square bg-white border border-black/5 relative overflow-hidden group">
               <img 
                 src="/images/processTechnologies/dichlorobenzenes.jpg" 
                 alt="DCB Distillation and Crystallization Unit"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-md">
                   Isomer Separation Complex
                 </span>
               </div>
            </div>
          </header>

          {/* TECHNICAL NARRATIVE */}
          <section className="mb-32 border-t border-black/10">
            <FeatureBlock 
              subtitle="Chemical Principles"
              title="Isomeric Composition"
              description="DCB is produced by reacting liquid benzene with gaseous chlorine (20-80°C). Our systems are engineered to handle the representative reactor product slate effectively."
              highlights={[
                "Processing of standard reactor slates: ~75% p-DCB, 25% o-DCB, and 0.2% m-DCB",
                "Management of trace monochlorobenzene and trichlorobenzene components",
                "Application-specific purity for solvents, waxes, resins, and rubber additives"
              ]}
            />

            <FeatureBlock 
              subtitle="Process Methodology"
              title="Fractionation & Crystallization"
              description="The crude DCB feed is separated into three product-enriched streams using columns fitted with high-performance structured packing and proprietary internals."
              highlights={[
                "Three-stream separation: m-DCB overhead, p-DCB side draw, and o-DCB bottoms",
                "p-DCB purification via continuous crystallization to achieve ≥99.9 wt%",
                "o-DCB rectification in secondary columns to achieve ≥99.5 wt% purity"
              ]}
            />
          </section>
        </div>

        {/* COMPETITIVE ADVANTAGES */}
        <AdvantageGrid 
          title="The Chemvict Edge"
          items={[
            {
              title: "Spatial Optimization",
              description: "Where plot height is limited, the primary distillation section can be configured as a high-efficiency two-shell arrangement without compromising throughput."
            },
            {
              title: "Yield Recovery",
              description: "Crystallization mother liquor and residues are strategically routed back to the distillation section to ensure maximum recovery of remaining p-DCB."
            },
            {
              title: "Integration Experience",
              description: "Proven track record delivering DCB process packages for greenfield projects, column revamps, and industrial debottlenecking programs."
            }
          ]}
        />

        {/* BOTTOM NAVIGATION LOGIC (Wraps back to start) */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border-t border-black/10 pt-20">
            <Link href="/processTechnologies/integrated" className="group inline-flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] hover:text-[#00a651] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform" size={24} /> 
              Return to Ledger
            </Link>
            
            <div className="text-right hidden md:block">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Next Category</span>
              <Link 
                href="/processTechnologies/purification/tdi" 
                className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors"
              >
                Purification Technology
                <ArrowRight className="group-hover:translate-x-3 transition-transform text-[#00a651]" size={32} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}