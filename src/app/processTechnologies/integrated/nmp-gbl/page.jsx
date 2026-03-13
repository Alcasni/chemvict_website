'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ChevronRight, ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureBlock from '../../components/featureBlock'
import AdvantageGrid from '../../components/advantageGrid'

export default function NMPGBLPage() {
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
            <span className="text-[#00a651]">NMP & GBL Systems</span>
          </nav>

          {/* SPLIT HERO SECTION */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-[#00a651] mb-8">
                System Architecture 03
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                NMP & GBL <br />Purification.
              </h1>
              <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-2xl italic border-l-4 border-[#00a651] pl-8">
                "Addressing difficult close-boiling impurities through rigorous thermodynamic simulation and validated physical-property data."
              </p>
            </div>
            
            {/* IMAGE CONTAINER */}
            <div className="lg:col-span-5 aspect-square bg-white border border-black/5 relative overflow-hidden group">
               <img 
                 src="/images/processTechnologies/nmp-gbl.jpg" 
                 alt="NMP and GBL Purification System"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-md">
                   Solvent Recovery Train
                 </span>
               </div>
            </div>
          </header>

          {/* TECHNICAL NARRATIVE */}
          <section className="mb-32 border-t border-black/10">
            <FeatureBlock 
              subtitle="Separation Science"
              title="Thermodynamic Logic"
              description="NMP and GBL purification feeds contain numerous impurities with boiling points close to the target products, making high-purity separation technically challenging."
              highlights={[
                "Rigorous thermodynamic simulation using validated physical-property data",
                "Organic integration of high-efficiency column internals",
                "Strict compliance with extreme purity standards for polar aprotic solvents"
              ]}
            />

            <FeatureBlock 
              subtitle="Industrial Application"
              title="System Scope"
              description="Our process trains support the manufacture of lithium-ion batteries and para-aramid fibers where solvent integrity is critical to performance."
              highlights={[
                "High-purity NMP for EV traction battery manufacturing",
                "GBL intermediate production for pharmaceuticals and resins",
                "Validated systems for man-made fiber and化纤 industries"
              ]}
            />
          </section>
        </div>

        {/* ADVANTAGE GRID */}
        <AdvantageGrid 
          title="The Chemvict Edge"
          items={[
            {
              title: "Validated Modeling",
              description: "Process design calculations are based on internationally recognized physical-property databases, confirmed against multi-set operating data."
            },
            {
              title: "Yield Management",
              description: "The integrated use of highly efficient internals and falling-film evaporators effectively reduces thermal degradation in sensitive systems."
            },
            {
              title: "Minimized Loss",
              description: "Our engineered solutions ensure on-spec purity while simultaneously minimizing product yield loss throughout the recovery cycle."
            }
          ]}
        />

        {/* FOOTER NAVIGATION */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <Link href="/processTechnologies/integrated" className="group inline-flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] hover:text-[#00a651] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform" size={24} /> 
              Return to Ledger
            </Link>
            
            <div className="text-right hidden md:block">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Next Architecture</span>
              <Link href="/processTechnologies/integrated/fatty-acids" className="text-xl font-bold uppercase italic hover:text-[#00a651] transition-colors">
                Fatty Acid Distillation →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}