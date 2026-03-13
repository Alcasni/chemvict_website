'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronUp, ChevronDown, ArrowRight } from 'lucide-react'

export default function SustainabilityNews({ newsData }) {
  const [activeTab, setActiveTab] = useState(0)
  const navRef = useRef(null)

  if (!newsData || newsData.length === 0) return null
  const current = newsData[activeTab]

  const scrollNav = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'up' ? -100 : 100
      navRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full bg-slate-50 py-24 md:py-32 overflow-hidden border-t border-slate-200">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        
        <div className="mb-20">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            Sustainability Horizon
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.9] italic uppercase">
            Engineering a <br /> Low-Carbon Future.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch border border-slate-200 rounded-sm bg-white shadow-sm overflow-hidden min-h-[750px]">
          
          {/* NAVIGATION */}
          <div className="w-full lg:w-[400px] flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 bg-white z-10">
            <button onClick={() => scrollNav('up')} className="h-12 flex items-center justify-center border-b border-slate-100 hover:bg-slate-50 text-slate-300 transition-colors">
              <ChevronUp size={18} />
            </button>

            <div ref={navRef} className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
              {newsData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative w-full flex flex-col items-start p-10 text-left transition-all border-b border-slate-50 last:border-b-0 ${
                    activeTab === index ? 'bg-slate-50' : 'hover:bg-slate-50/50'
                  }`}
                >
                  <span className={`text-[10px] font-bold tracking-widest mb-2 ${activeTab === index ? 'text-cyan-600' : 'text-slate-300'}`}>
                    {item.id} — {item.category}
                  </span>
                  <span className={`text-lg font-bold tracking-tight leading-tight ${activeTab === index ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {item.title}
                  </span>
                  {activeTab === index && (
                    <motion.div layoutId="newsActive" className="absolute left-0 top-0 h-full w-1.5 bg-cyan-600" />
                  )}
                </button>
              ))}
            </div>

            <button onClick={() => scrollNav('down')} className="h-12 flex items-center justify-center border-t border-slate-100 hover:bg-slate-50 text-slate-300 transition-colors">
              <ChevronDown size={18} />
            </button>
          </div>

          {/* CONTENT AREA */}
          <div className="flex-1 p-8 md:p-12 xl:p-16 relative flex items-center bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center w-full"
              >
                {/* IMAGE BOX */}
                <div className="xl:col-span-8 group">
                  <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden bg-white border border-slate-100">
                    <img 
                      src={current.image} 
                      alt={current.title} 
                      className="h-full w-full object-contain object-center transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </div>
                </div>

                {/* TEXT BOX WITH SYMMETRICAL QUOTES */}
                <div className="xl:col-span-4 space-y-8">
                  <div className="relative">
                    {/* OPENING QUOTE */}
                    <div className="text-cyan-600 mb-4 opacity-30">
                      <Quote size={28} fill="currentColor" />
                    </div>

                    <blockquote className="text-xl md:text-2xl font-light text-slate-900 leading-snug italic px-2">
                      {current.quote}
                    </blockquote>

                    {/* CLOSING QUOTE (Flipped) */}
                    <div className="text-cyan-600 mt-4 opacity-30 flex justify-end">
                      <Quote size={28} fill="currentColor" className="rotate-180" />
                    </div>
                  </div>
                  
                  <div className="h-px w-16 bg-slate-100" />

                  <div className="space-y-6">
                    <p className="text-lg font-bold text-slate-900 leading-tight uppercase tracking-tight">
                      {current.title}
                    </p>
                    <a href={`/sustainability/${current.slug}`} className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 group">
                      Technical Case Study
                      <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all transform group-hover:translate-x-2 shrink-0">
                        <ArrowRight size={16} />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}