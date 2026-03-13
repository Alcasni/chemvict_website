'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    img: '/core1.png',
    keyword: 'DEVELOP',
    title: 'Separation Process Development',
    description: 'Starting from feasibility studies, we progress through small-scale validation and pilot scale-up to deliver concrete industrial solutions.',
    bullets: ['Feasibility Research', 'Small-scale Validation', 'Pilot Scale-up'],
  },
  {
    img: '/core2.png',
    keyword: 'ENGINEER',
    title: 'Process & Engineering Design',
    description: 'Our design workflow moves from simulation verification and hydraulic calculations to finalized, specific separation process schemes.',
    bullets: ['Simulation Verification', 'Hydraulic Calculation', 'Process Schemes'],
  },
  {
    img: '/core3.png',
    keyword: 'SPECIFY',
    title: 'Key Equipment Design',
    description: 'Based on the separation scheme, our team develops comprehensive technical design datasheets for all critical core equipment.',
    bullets: ['Scheme Selection', 'Design Datasheets', 'Parameter Definition'],
  },
  {
    img: '/core4.png',
    keyword: 'MANUFACTURE',
    title: 'Key Equipment Manufacturing',
    description: 'High-precision fabrication of core hardware based on design datasheets to fulfill the specific needs of the separation flow.',
    bullets: ['Data-driven Mfg', 'Process Compliance', 'Quality Control'],
  },
  {
    img: '/core5.png',
    keyword: 'INTEGRATE',
    title: 'Integrated Equipment Manufacturing',
    description: 'Manufacturing in modular skid-mounted modes, coordinating auxiliary devices on-site to connect into a complete, seamless system.',
    bullets: ['Skid-mounted Design', 'Auxiliary Integration', 'System Connection'],
  },
  {
    img: '/core6.png',
    keyword: 'SUPERVISE',
    title: 'Installation & Startup Guidance',
    description: 'On-site expertise providing tower internals installation guidance, pilot run supervision, and professional startup services.',
    bullets: ['Internals Installation', 'Pilot Run Guidance', 'Startup Services'],
  },
]

export default function FeatureArcSection() {
  const sectionRef = useRef(null)
  const wheelRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const WHEEL_RADIUS = 500
  const ANGLE_STEP = 30 
  const TOTAL_ITEMS = features.length

  useGSAP(() => {
    features.forEach((_, i) => {
      if (i !== 0) gsap.set(`.text-panel-${i}`, { autoAlpha: 0, y: 40 })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=500%',
        scrub: 1,
        pin: true,
        snap: 1 / (TOTAL_ITEMS - 1),
        onUpdate: (self) => {
          const progress = self.progress
          const currentActive = Math.round(progress * (TOTAL_ITEMS - 1))
          const currentWheelRot = progress * (TOTAL_ITEMS - 1) * ANGLE_STEP
          setActiveIdx(currentActive)

          features.forEach((_, i) => {
            const distance = Math.abs(currentActive - i)
            const isActive = distance === 0
            
            gsap.to(`.bubble-${i}`, { 
                scale: isActive ? 1.45 : 0.75, 
                opacity: isActive ? 1 : 0.1, 
                duration: 0.4 
            })

            // Keep photos upright during rotation
            gsap.to(`.bubble-content-${i}`, { rotation: -currentWheelRot, duration: 0 })

            if (isActive) {
              gsap.to(`.text-panel-${i}`, { autoAlpha: 1, y: 0, duration: 0.5, overwrite: 'auto' })
            } else {
              gsap.to(`.text-panel-${i}`, { autoAlpha: 0, y: i < currentActive ? -40 : 40, duration: 0.5, overwrite: 'auto' })
            }
          })
        },
      },
    })
    tl.to(wheelRef.current, { rotation: (TOTAL_ITEMS - 1) * ANGLE_STEP, ease: 'none' })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative z-30 h-screen w-full overflow-hidden bg-white text-slate-900 shadow-[0_-20px_80px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center px-6 md:px-10">
        
        {/* LEFT SIDE: PRIMARY CONTENT */}
        <div className="relative z-10 w-full md:w-5/12">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-24">Core Capabilities</h2>

          <div className="relative h-[380px] w-full">
            {features.map((feature, i) => (
              <div key={i} className={`text-panel-${i} absolute inset-0 flex flex-col justify-center`}>
                <h3 className="mb-6 text-6xl font-black tracking-tighter text-slate-900 lg:text-7xl leading-[0.9]">
                  {feature.title}
                </h3>
                <p className="mb-10 text-xl leading-relaxed text-slate-500 max-w-md font-light">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {features[i].bullets.map((b, idx) => (
                    <span key={idx} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-800">
                      <span className="mr-3 h-1 w-1 bg-cyan-500" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: MINIMALIST ACTION KEYWORDS */}
        <div className="absolute right-[19%] top-1/2 z-40 -translate-y-1/2 pointer-events-none hidden md:block">
           <div className="relative h-40 w-80 text-right">
             {features.map((f, i) => (
               <div key={i} className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ${activeIdx === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                 <div className="flex items-center justify-end gap-3 mb-2">
                    <span className="h-px w-8 bg-slate-200" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-slate-400">CAPABILITY_0{i + 1}</p>
                 </div>
                 <p className="text-5xl font-black text-slate-900 leading-none tracking-tighter uppercase tabular-nums">
                    {f.keyword}
                 </p>
               </div>
             ))}
           </div>
        </div>

        {/* ROTATING ARC WHEEL */}
        <div className="absolute right-0 top-1/2 hidden h-full w-1/2 -translate-y-1/2 items-center md:flex">
          <div ref={wheelRef} className="absolute left-[20%]" style={{ width: WHEEL_RADIUS * 2, height: WHEEL_RADIUS * 2 }}>
            <div className="absolute inset-0 rounded-full border-[1.5px] border-slate-100" />

            {features.map((f, i) => {
              const angleRad = (180 - i * ANGLE_STEP) * (Math.PI / 180)
              const x = WHEEL_RADIUS + WHEEL_RADIUS * Math.cos(angleRad)
              const y = WHEEL_RADIUS + WHEEL_RADIUS * Math.sin(angleRad)

              return (
                <div key={i} className={`bubble-${i} absolute top-0 left-0 flex items-center justify-center`}
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}>
                  
                  {/* Clean Circular Mask */}
                  <div className={`bubble-content-${i} relative flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-2xl ring-4 ring-white overflow-hidden border border-slate-100`}>
                    <img 
                        src={f.img} 
                        alt={f.keyword} 
                        className={`h-full w-full object-cover transition-all duration-1000 ${activeIdx === i ? 'scale-100 grayscale-0 opacity-100' : 'scale-125 grayscale opacity-20'}`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}