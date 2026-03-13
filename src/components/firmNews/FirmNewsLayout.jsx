'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Globe, Quote, BarChart3, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function FirmNewsLayout({ data }) {
  if (!data) return null;

  return (
    <article className="bg-white min-h-screen font-sans selection:bg-[#00a651] selection:text-white">
      
      {/* --- HEADER --- */}
      <header className={`relative pt-32 pb-12 px-6 ${data.title ? 'border-b border-slate-100' : ''}`}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="max-w-5xl space-y-6">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#00a651]">
                {data.category && <span className="px-2 py-0.5 border border-[#00a651]">{data.category}</span>}
                {data.date && <span className="text-slate-400">/ / {data.date}</span>}
              </div>
              {data.title && (
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-black text-slate-950 tracking-[-0.04em] leading-[0.85] uppercase italic"
                >
                  {data.title}
                </motion.h1>
              )}
            </div>
            {data.location && (
              <div className="flex flex-col items-start lg:items-end gap-2 text-right">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</span>
                <span className="text-sm font-black uppercase flex items-center gap-2">
                  <Globe size={14} className="text-[#00a651]" /> {data.location}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* --- NAV BAR (REFINED) --- */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#00a651] transition-colors">
            <ArrowLeft size={14} /> Back to Index
          </Link>
          {/* Metadata label removed per request */}
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- SIDEBAR --- */}
        <div className="lg:col-span-4 space-y-12">
          {(data.abstract || data.summary) && (
            <div className="space-y-6">
               <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">Executive Brief</span>
               <p className="text-2xl font-bold text-slate-900 leading-[1.2] italic">
                 "{data.abstract || data.summary}"
               </p>
            </div>
          )}

          {data.keyFacts && data.keyFacts.length > 0 && (
            <div className="bg-[#00a651] p-8 text-white">
              <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
                <BarChart3 size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Performance Metrics</span>
              </div>
              <ul className="space-y-6">
                {data.keyFacts.map((fact, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-60">{fact.label}</span>
                    <span className="text-2xl font-black italic">{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* --- BODY --- */}
        <div className="lg:col-span-8">
          <div className="space-y-16">
            
            {data.content?.introduction && (
              <div className="prose prose-slate max-w-none">
                <p className="text-3xl font-light text-slate-500 leading-snug first-letter:text-7xl first-letter:font-black first-letter:text-slate-950 first-letter:mr-3 first-letter:float-left">
                  {data.content.introduction}
                </p>
              </div>
            )}

            {data.content?.sections?.map((section, idx) => (
              <div 
                key={idx} 
                className={`space-y-6 ${section.featured ? 'bg-slate-50 p-10 border-l-4 border-[#00a651]' : ''}`}
              >
                {section.title && (
                  <h3 className="text-sm font-black text-slate-950 uppercase tracking-[0.2em] flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-[#00a651]"></span>
                    {section.title}
                  </h3>
                )}
                
                {section.body && (
                  <div className="text-xl text-slate-600 leading-relaxed font-light whitespace-pre-line">
                    {section.body}
                  </div>
                )}
              </div>
            ))}

            {data.pullQuote && (
              <div className="py-12 border-y border-slate-100 my-8">
                <Quote className="text-[#00a651] mb-6" size={40} />
                <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1] uppercase italic">
                  {data.pullQuote}
                </p>
              </div>
            )}
          </div>

          {data.image && (
            <div className="mt-20">
              <img src={data.image} className="w-full grayscale hover:grayscale-0 transition-all duration-[1.5s]" alt="" />
              {/* Caption removed per request */}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <Link href="/firmNews" className="inline-block group">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] mb-8 block group-hover:text-[#00a651] transition-colors">
              Continue Reading Archive
            </span>
            <h4 className="text-6xl md:text-8xl font-black text-slate-950 italic tracking-tighter flex items-center justify-center gap-6">
              ALL UPDATES <ArrowUpRight size={60} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-[#00a651]" strokeWidth={3} />
            </h4>
          </Link>
        </div>
      </footer>
    </article>
  )
}