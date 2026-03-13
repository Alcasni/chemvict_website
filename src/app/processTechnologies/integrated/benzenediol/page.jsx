'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureBlock from '../../components/featureBlock'
import AdvantageGrid from '../../components/advantageGrid'

export default function BenzenediolPage() {
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
            <span className="text-[#00a651]">Benzenediol & Derivatives</span>
          </nav>

          {/* SPLIT HERO SECTION */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-[#00a651] mb-8">
                System Architecture 01
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                Benzenediol <br />& Derivatives.
              </h1>
              <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-2xl italic border-l-4 border-[#00a651] pl-8">
                "Configuring the process train based on post-reaction feed composition to deliver catechol and hydroquinone at global purity standards."
              </p>
            </div>
            
            {/* TECHNICAL IMAGE CONTAINER */}
            <div className="lg:col-span-5 aspect-square bg-white border border-black/5 relative overflow-hidden group">
               <img 
                 src="/images/processTechnologies/benzenediol.jpg" 
                 alt="Benzenediol Fractionation and Purification System"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-md">
                   Integrated Purification Train
                 </span>
               </div>
            </div>
          </header>

          {/* TECHNICAL NARRATIVE */}
          <section className="mb-32 border-t border-black/10">
            <FeatureBlock 
              subtitle="Purity Benchmarks"
              title="Fractionation Logic"
              description="The process train is configured accordingly to produce catechol (o-benzenediol) and hydroquinone (p-benzenediol) with ≥99.0 wt% purity."
              highlights={[
                "High-purity isolation based on post-reaction feed composition",
                "≥99.9 wt% hydroquinone achieved by incorporating an additional crystallization step"
              ]}
            />

            <FeatureBlock 
              subtitle="Downstream Value"
              title="Derivative Schemes"
              description="Dedicated distillation process packages are available for downstream production of benzenediol-derived intermediates."
              highlights={[
                "Distillation packages for Resveratrol production",
                "Intermediate schemes for Guaiacol production"
              ]}
            />
          </section>
        </div>

        {/* COMPETITIVE ADVANTAGES */}
        <AdvantageGrid 
          title="The Chemvict Edge"
          items={[
            {
              title: "Internal Efficiency",
              description: "With Chemvict highly efficient column internals, the same tower diameter achieves higher throughput, lower pressure drop, and improved separation efficiency."
            },
            {
              title: "Thermal Sensitivity",
              description: "For thermal-sensitive materials, Chemvict’s specialized falling film evaporator minimizes their thermal degradation."
            },
            {
              title: "Optimized Integration",
              description: "Leveraging advanced energy integration and optimization concepts, Chemvict engineers systems with reduced utility consumption."
            }
          ]}
        />

        {/* BOTTOM NAVIGATION LOGIC */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border-t border-black/10 pt-20">
            <Link href="/processTechnologies/integrated" className="group inline-flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] hover:text-[#00a651] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform" size={24} /> 
              System Ledger
            </Link>
            
            <div className="text-right hidden md:block">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Next Architecture</span>
              <Link 
                href="/processTechnologies/integrated/antioxidants" 
                className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors"
              >
                Antioxidant Process Packages
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