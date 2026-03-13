'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Zap, Box, Microscope } from 'lucide-react'

const models = [
  {
    id: 'integrated',
    number: '01',
    title: 'Integrated Process Systems',
    tagline: 'PDP & Turnkey System Delivery',
    description: 'Providing the full package. Process Design Packages combined with critical equipment manufacturing and system integration.',
    milestones: [
      { label: 'Energy Integration', detail: 'Advanced optimization concepts for minimal utility consumption' },
      { label: 'Thermal Protection', detail: 'Specialized falling film evaporators to prevent degradation' },
      { label: 'System Purity', detail: 'Integrated crystallization for high purity specifications' }
    ],
    products: [
      'Benzenediol & Derivatives',
      'Antioxidant Process Packages',
      'NMP & GBL Systems',
      'Fatty Acid Distillation',
      'Dichlorobenzenes (DCB)'
    ],
    icon: Box
  },
  {
    id: 'purification',
    number: '02',
    title: 'Purification Technology',
    tagline: 'Separation Science & Molecular Precision',
    description: 'The technical foundation of every solution. Solving the most difficult molecular separation challenges where purity is extreme.',
    milestones: [
      { label: 'Molecular Purity', detail: 'Achieving parts per billion (ppb) level purity targets' },
      { label: 'Isomer Separation', detail: 'Rigorous design for close boiling and difficult positional isomers' },
      { label: 'Yield Management', detail: 'Minimizing product loss while maintaining strict standards' }
    ],
    products: [
      'TDI Chlorine Removal',
      'Electronic Grade DMC',
      'High Purity Fluorochemicals',
      'Pyridine & Derivatives',
      'DMAC Recovery',
      'Electronic Chemicals (ppb)',
      'm-Phenylenediamine (MPD)',
      'Citral Purification',
      'Menthol Stereoisomers'
    ],
    icon: Microscope
  }
]

export default function DualModeRouting() {
  const containerRef = useRef(null)
  const { contextSafe } = useGSAP({ scope: containerRef })

  const resetPanels = contextSafe(() => {
    gsap.to('.routing-panel', { flexBasis: '50%', duration: 1, ease: 'expo.inOut' })
    gsap.to('.routing-content', { opacity: 0, y: 10, duration: 0.4 })
    gsap.to('.blueprint-svg', { opacity: 0, scale: 0.9, duration: 0.6 })
    gsap.to('.bg-num', { opacity: 0.05, x: 0, duration: 0.8 })
  })

  const expandPanel = contextSafe((index) => {
    models.forEach((_, i) => {
      const isHovered = index === i
      
      gsap.to(`.panel-${i}`, { 
        flexBasis: isHovered ? '70%' : '30%', 
        duration: 1.2, 
        ease: 'expo.inOut' 
      })

      gsap.to(`.content-${i}`, { 
        opacity: isHovered ? 1 : 0, 
        y: isHovered ? 0 : 10, 
        duration: 0.6, 
        delay: 0.2 
      })
      
      gsap.to(`.blueprint-${i}`, { 
        opacity: isHovered ? 0.08 : 0, 
        scale: isHovered ? 1.1 : 0.9, 
        duration: 1.5 
      })

      gsap.to(`.num-${i}`, {
        opacity: isHovered ? 0.08 : 0,
        x: isHovered ? (i === 0 ? 60 : -60) : 0,
        duration: 1.2
      })
    })
  })

  return (
    <section ref={containerRef} className="relative w-full bg-[#0F172A] overflow-hidden border-t border-slate-800">
      
      <div 
        onMouseEnter={resetPanels}
        className="relative z-40 w-full pt-32 pb-16 flex flex-col items-center justify-center bg-[#0F172A] cursor-default"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
          Process Technologies
        </h2>
      </div>

      <div className="flex flex-col md:flex-row h-auto min-h-[800px] lg:h-[85vh] w-full border-t border-slate-800">
        {models.map((model, i) => {
          const Icon = model.icon;
          return (
            <div
              key={model.id}
              onMouseEnter={() => expandPanel(i)}
              className={`routing-panel panel-${i} relative flex-[1_1_50%] overflow-hidden flex items-center justify-center border-r border-slate-800 last:border-r-0 bg-[#0F172A] h-full`}
            >
              <div className={`bg-num num-${i} absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-[0.05]`}>
                <span className="text-[35vw] font-black text-white select-none italic">{model.number}</span>
              </div>

              <div className={`blueprint-svg blueprint-${i} absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-0`}>
                <svg width="60%" height="60%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-[#0284C7]">
                  <circle cx="50" cy="50" r="48" strokeWidth="0.05" strokeDasharray="2 2" />
                  <path d="M0 50 L100 50 M50 0 L50 100" strokeWidth="0.05" />
                </svg>
              </div>

              <div className="relative z-10 w-full max-w-[800px] px-12 py-20 flex flex-col items-center text-center">
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-none uppercase italic">
                  {model.title}
                </h3>
                <p className="text-[#38BDF8] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                  {model.tagline}
                </p>
                <p className="text-slate-400 text-lg font-light mb-12 max-w-[450px]">
                  {model.description}
                </p>

                <div className={`routing-content content-${i} opacity-0 translate-y-5 w-full flex flex-col md:flex-row gap-16 items-start text-left pb-10`}>
                  <div className="flex-1 space-y-4">
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-6">System Focus</span>
                    {model.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 bg-[#0284C7] shrink-0 shadow-[0_0_8px_rgba(2,132,199,0.6)]" />
                        <span className="text-[11px] font-bold text-slate-200 uppercase tracking-[0.12em]">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 md:border-l md:border-slate-800 md:pl-16 space-y-8">
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-6">Process Advantage</span>
                    {model.milestones.map((ms, idx) => (
                      <div key={idx}>
                        <span className="block text-[12px] font-black text-slate-100 uppercase mb-1">{ms.label}</span>
                        <span className="block text-[13px] text-slate-500 font-light italic leading-tight">{ms.detail}</span>
                      </div>
                    ))}
                    <div className="pt-4 flex items-center gap-2 text-[#38BDF8]">
                      <Icon size={14} className="fill-current" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {i === 0 ? 'Turnkey Solution' : 'Separation Science'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}