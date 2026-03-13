'use client'

import React from 'react'
import { Settings, Thermometer, Zap } from 'lucide-react'

const icons = [Settings, Thermometer, Zap]

export default function AdvantageGrid({ title, items }) {
  return (
    <section className="py-32 bg-[#F5F5F2] border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-[#00a651] mb-4">
              Technical superiority
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase italic">
              {title}
            </h2>
          </div>
          <div className="hidden md:block h-px flex-grow mx-12 bg-black/10 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {items.map((item, i) => {
            const Icon = icons[i] || Settings;
            return (
              <div 
                key={i} 
                className="group relative bg-[#F5F5F2] p-12 transition-all duration-500 hover:bg-white overflow-hidden"
              >
                {/* Visual Accent: Top Animated Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#00a651] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                
                <div className="flex items-start justify-between mb-16">
                  {/* Eye-attractive Icon Anchor */}
                  <div className="w-16 h-16 bg-white border border-black/5 flex items-center justify-center text-[#00a651] shadow-sm group-hover:shadow-lg group-hover:border-[#00a651]/20 transition-all duration-500">
                    <Icon size={32} strokeWidth={1} />
                  </div>
                  <span className="text-6xl font-black text-black/[0.03] group-hover:text-[#00a651]/10 transition-colors italic leading-none select-none">
                    0{i + 1}
                  </span>
                </div>
                
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 group-hover:translate-x-3 transition-transform duration-500 italic">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 leading-relaxed text-sm font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}