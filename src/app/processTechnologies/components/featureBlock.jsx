'use client'

import React from 'react'

export default function FeatureBlock({ title, subtitle, description, highlights }) {
  return (
    <div className="py-16 border-b border-black/5 last:border-0 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00a651] mb-4 block">
            {subtitle}
          </span>
          <h3 className="text-4xl font-bold tracking-tight uppercase italic group-hover:text-[#00a651] transition-colors duration-500">
            {title}
          </h3>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
            {description}
          </p>
          {highlights && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-6 bg-white border border-black/5 hover:border-[#00a651]/30 hover:shadow-sm transition-all duration-300">
                  {/* Stylized Diamond Pointer */}
                  <div className="mt-1.5 shrink-0">
                    <div className="w-2 h-2 bg-[#00a651] rotate-45" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-tight text-slate-500 italic leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}