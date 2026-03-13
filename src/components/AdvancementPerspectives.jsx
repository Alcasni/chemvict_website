'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'
import { allFirmNews } from '@/content/firmNews'

export default function AdvancementPerspectives() {
  // Pulling dynamic data: First for the big feature, next 4 for the list
  const featuredNews = allFirmNews[0]
  const secondaryNews = allFirmNews.slice(1, 5)

  if (!featuredNews) return null

  return (
    <section className="bg-white py-24 md:py-40 px-6 overflow-hidden border-t border-slate-50">
      <div className="mx-auto max-w-[1400px]">
        
        {/* HEADER */}
        <header className="mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className="h-[1px] w-12 bg-[#00a651]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00a651]">
                Global Operations
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase leading-[0.85] italic"
            >
              News & <br /> 
              <span className="text-slate-200">Insights.</span>
            </motion.h2>
          </div>

          <Link
            href="/firmNews"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#00a651] transition-colors pb-2"
          >
            View All Updates
            <IconArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </header>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: FEATURED ANALYSIS (The one with "Briefing" and the Abstract) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <Link href={`/firmNews/${featuredNews.slug}`}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-slate-100 mb-10 shadow-sm">
                <motion.img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-slate-950 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white border border-white/10">
                    {featuredNews.category}
                  </span>
                </div>
              </div>
              
              <div className="max-w-2xl space-y-6">
                {/* RESTORED: BRIEFING & DATE */}
                <div className="flex items-center gap-4">
                   <span className="text-[10px] font-mono font-bold text-[#00a651] uppercase">
                    Briefing
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-300 uppercase">
                    {featuredNews.date}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight uppercase group-hover:text-[#00a651] transition-colors">
                  {featuredNews.title}
                </h3>

                {/* RESTORED: ABSTRACT / SHORT TEXT */}
                <p className="text-slate-500 text-lg leading-relaxed font-light">
                  {featuredNews.abstract || featuredNews.description}
                </p>

                <div className="pt-4">
                  <span className="inline-block text-xs font-black uppercase tracking-[0.2em] border-b-2 border-slate-950 pb-1 group-hover:border-[#00a651] group-hover:text-[#00a651] transition-all">
                    Access Report
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* RIGHT: BRIEFING LIST */}
          <div className="lg:col-span-5 flex flex-col">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 border-b border-slate-100 pb-6 mb-2">
              Recent Briefings
            </h4>
            
            <div className="divide-y divide-slate-100 flex-1">
              {secondaryNews.map((news, index) => (
                <motion.div
                  key={news.slug || index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/firmNews/${news.slug}`} className="group block py-8 transition-colors">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#00a651] border border-[#00a651]/20 px-2 py-0.5">
                          {news.category}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-300">
                          {news.date}
                        </span>
                      </div>
                      <div className="flex justify-between items-start gap-6">
                        <div className="space-y-2">
                          <h5 className="text-lg font-bold text-slate-800 tracking-tight leading-snug group-hover:text-[#00a651] transition-colors uppercase">
                            {news.title}
                          </h5>
                          {/* SHORT TEXT FOR SIDEBAR */}
                          <p className="text-[13px] text-slate-400 leading-relaxed font-medium line-clamp-2">
                            {news.summary || news.description}
                          </p>
                        </div>
                        <div className="mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                          <IconArrowUpRight size={20} className="text-[#00a651]" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-950" />
          </div>

        </div>
      </div>
    </section>
  )
}