'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureBlock from '../../components/featureBlock'
import AdvantageGrid from '../../components/advantageGrid'

export default function FattyAcidsPage() {
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
            <span className="text-[#00a651]">Fatty Acid Distillation</span>
          </nav>

          {/* SPLIT HERO SECTION */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-[#00a651] mb-8">
                System Architecture 04
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                Fatty Acid <br />Distillation.
              </h1>
              <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-2xl italic border-l-4 border-[#00a651] pl-8">
                "Engineering for minimum pressure drop and rigorous material selection to preserve product integrity in high-corrosive environments."
              </p>
            </div>
            
            {/* TECHNICAL IMAGE CONTAINER */}
            <div className="lg:col-span-5 aspect-square bg-white border border-black/5 relative overflow-hidden group">
               <img 
                 src="/images/processTechnologies/fatty-acids.jpg" 
                 alt="Fatty Acid Distillation Column"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-md">
                   Low-DP Fractionation Unit
                 </span>
               </div>
            </div>
          </header>

          {/* TECHNICAL NARRATIVE */}
          <section className="mb-32 border-t border-black/10">
            <FeatureBlock 
              subtitle="Process Dynamics"
              title="Feed & Purity Logic"
              description="Fatty acids are primarily produced via continuous hydrolysis of triglycerides or through edible-oil refining. Managing these crude streams requires specific hydraulic considerations."
              highlights={[
                "Processing of crude fatty acid streams (85–90 wt% total fatty acids)",
                "Refining of edible oils (Palm/Coconut) containing ~5% Free Fatty Acids (FFA)",
                "Integrated hydrolysis system support under high temperature and pressure"
              ]}
            />

            <FeatureBlock 
              subtitle="Quality Preservation"
              title="Thermal Sensitivity"
              description="Exposure to high temperatures or extended heating can lead to irreversible odor and color changes. Our systems prioritize low residence time and hydraulic precision."
              highlights={[
                "System-wide design objective focused on Low Pressure Drop",
                "Strict temperature profile management to prevent molecular degradation",
                "Optimized internals to maintain color standards and olfactory profiles"
              ]}
            />
          </section>
        </div>

        {/* COMPETITIVE ADVANTAGES */}
        <AdvantageGrid 
          title="The Chemvict Edge"
          items={[
            {
              title: "Material Engineering",
              description: "Short-chain fatty acids are highly corrosive. We deploy specialized material selection protocols to ensure long-term equipment integrity and process stability."
            },
            {
              title: "Hydraulic Superiority",
              description: "The core of our FA distillation logic is the reduction of system-wide pressure drop, utilizing second-generation packing to achieve maximum efficiency."
            },
            {
              title: "Project Versatility",
              description: "Proven track record delivering fatty-acid process packages for greenfield projects, column revamps, and industrial capacity expansions."
            }
          ]}
        />

        {/* BOTTOM NAVIGATION LOGIC */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border-t border-black/10 pt-20">
            <Link href="/processTechnologies/integrated" className="group inline-flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] hover:text-[#00a651] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-3 transition-transform" size={24} /> 
              Return to Ledger
            </Link>
            
            <div className="text-right hidden md:block">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Next Architecture</span>
              <Link 
                href="/processTechnologies/integrated/dichlorobenzenes" 
                className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#00a651] transition-colors"
              >
                Dichlorobenzenes (DCB)
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