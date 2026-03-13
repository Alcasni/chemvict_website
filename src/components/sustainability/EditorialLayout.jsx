'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowLeft, ArrowUpRight, ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
// --- IMPORT THE FOOTER COMPONENT ---
// Adjust the path based on where your Footer file is located (e.g., '@/components/Footer')
import Footer from '@/components/Footer' 

const INITIATIVES = [
  { slug: 'co2-capture', title: 'CO2 Capture' },
  { slug: 'heat-pump-assisted-distillation', title: 'Heat Pump Distillation' },
  { slug: 'dividing-wall-column-dwc', title: 'Dividing Wall Column' },
  { slug: 'multiple-effect-distillation', title: 'Multiple-Effect Distillation' },
  { slug: 'distillation-system-energy-optimization', title: 'Energy Optimization' },
  { slug: 'capacity-debottlenecking-and-efficiency-improvement', title: 'Capacity Debottlenecking' }
]

export default function EditorialLayout({ data }) {
  const currentIndex = INITIATIVES.findIndex(item => item.slug === data.slug)
  const nextArticle = INITIATIVES[(currentIndex + 1) % INITIATIVES.length]

  return (
    <article className="bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[65vh] w-full overflow-hidden bg-white">
        <div className="absolute inset-0 flex items-center justify-center p-10 md:p-20">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={data.image} 
            alt="" 
            className="h-full w-full object-contain"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 bg-gradient-to-t from-white via-white/70 to-transparent">
          <div className="max-w-[1400px] mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] italic uppercase"
            >
              {data.content.headline}
            </motion.h1>
          </div>
        </div>
      </header>

      {/* --- NAVIGATION --- */}
      <nav className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-50">
        <Link href="/" className="hover:text-slate-900 transition-colors flex items-center gap-1">
          <Home size={12} /> HOME
        </Link>
        <ChevronRight size={10} strokeWidth={3} />
        <Link href="/sustainability" className="hover:text-[#00a651] transition-colors">
          SUSTAINABILITY
        </Link>
        <ChevronRight size={10} strokeWidth={3} />
        <span className="text-slate-900 truncate max-w-[200px] md:max-w-none">
          {data.title}
        </span>
      </nav>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-12">
            <div className="pt-8 border-t-4 border-slate-950">
              <h2 className="text-xl font-bold text-slate-900 leading-tight uppercase tracking-tight">
                {data.content.subheadline}
              </h2>
            </div>
            
            <div className="relative">
              <p className="text-slate-500 font-light text-xl leading-relaxed italic border-l-2 border-slate-100 pl-6">
                "{data.quote}"
              </p>
            </div>

            <Link 
              href="/sustainability" 
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#00a651] transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Overview
            </Link>
          </div>
        </aside>

        <section className="lg:col-span-8 space-y-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-light text-slate-600 leading-snug"
          >
            {data.content.introduction}
          </motion.p>

          {data.content.sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 md:p-16 border-l border-[#00a651]"
            >
              <h3 className="text-[10px] font-black text-[#00a651] uppercase tracking-[0.3em] mb-8">
                {section.title}
              </h3>
              
              <p className="text-2xl font-bold text-slate-900 tracking-tight mb-10 leading-tight">
                {section.body}
              </p>
              
              {section.advantages && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 border border-slate-200 bg-white shadow-sm">
                      <Check size={14} className="text-[#00a651] mt-1 shrink-0" strokeWidth={3} />
                      <span className="text-[11px] font-bold text-slate-800 uppercase tracking-widest leading-tight">
                        {adv}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </section>
      </main>

      {/* --- PROFESSIONAL NEXT INSIGHT SECTION --- */}
      <section className="border-t border-slate-100 py-48 bg-white text-center">
        <Link 
          href={`/sustainability/${nextArticle.slug}`}
          className="group inline-flex flex-col items-center"
        >
          <span className="text-[10px] font-black text-[#00a651] uppercase tracking-[0.6em] mb-8">
            Continue Exploration
          </span>
          <div className="relative">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 italic tracking-tighter flex items-center gap-6 px-4">
              {nextArticle.title}
              <ArrowUpRight size={60} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500 text-[#00a651]" strokeWidth={2.5} />
            </span>
            <motion.div 
              className="absolute -bottom-4 left-0 h-2 bg-[#00a651] w-0 group-hover:w-full transition-all duration-700 ease-in-out"
            />
          </div>
        </Link>
      </section>

      {/* --- GLOBAL FOOTER --- */}
      <Footer />
    </article>
  )
}