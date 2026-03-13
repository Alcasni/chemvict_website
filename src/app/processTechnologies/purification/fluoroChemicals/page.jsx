'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureBlock from '../../components/featureBlock'
import AdvantageGrid from '../../components/advantageGrid'

export default function FluorochemicalsPage() {
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
            <span className="text-[#0284C7]">Fluorochemicals</span>
          </nav>

          {/* SPLIT HERO SECTION */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-[#0284C7] mb-8">
                Technical Architecture 02
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic leading-[0.95] uppercase">
                Fluorochemical <br />Purification.
              </h1>
              <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-2xl italic border-l-4 border-[#0284C7] pl-8">
                "As demand from advanced electronics and semiconductor manufacturing grows, purity specifications for fluorinated materials continue to tighten."
              </p>
            </div>
            
            {/* TECHNICAL IMAGE CONTAINER */}
            <div className="lg:col-span-5 aspect-square bg-white border border-black/5 relative overflow-hidden group">
               <img 
                 src="/images/processTechnologies/fluorochemicals.jpg" 
                 alt="High-Purity Fluorochemical Separation System"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-md">
                   Second-Generation Packing Internals
                 </span>
               </div>
            </div>
          </header>

          {/* TECHNICAL NARRATIVE */}
          <section className="mb-32 border-t border-black/10">
            <FeatureBlock 
              subtitle="Material Scope"
              title="Purity Specifications"
              description="Fluorinated products include high-purity wet chemicals, electronic specialty gases, fluorinated electrolytes, polymer materials, and other related products."
              highlights={[
                "Tightening specifications for semiconductor and advanced electronics manufacturing",
                "High-purity isolation of fluorinated electrolytes and polymer materials"
              ]}
            />

            <FeatureBlock 
              subtitle="Internal Design"
              title="Technical Architecture"
              description="Chemvict structured packing and wire-gauze packing belong to what is often referred to as “second-generation” high-performance packing."
              highlights={[
                "Designed to improve separation efficiency, capacity, and pressure drop versus conventional designs",
                "Achieve higher product purity and greater throughput within the same column diameter"
              ]}
            />
          </section>
        </div>

        {/* COMPETITIVE ADVANTAGES */}
        <AdvantageGrid 
          title="The Chemvict Edge"
          items={[
            {
              title: "Second-Generation Performance",
              description: "High-performance packing internals designed to outperform first-generation designs in efficiency and capacity."
            },
            {
              title: "High-Purity Duties",
              description: "Engineered specifically for fluorochemical duties where purity specifications are extremely stringent."
            },
            {
              title: "Optimized Throughput",
              description: "Delivering greater throughput within the same tower diameter compared to conventional packing."
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
                href="/processTechnologies/purification/electronicChemicals" 
                className="group flex items-center gap-6 text-2xl font-bold uppercase italic hover:text-[#0284C7] transition-colors"
              >
                Electronic Chemicals
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