'use client'

import React, { useState, useEffect, useRef } from 'react'
// Ensure all icons used below are imported here
import { Home, ChevronRight, Building2, ShieldCheck, Zap, BarChart3, Target } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const COLORS = {
  bg: '#F5F5F2',
  text: '#1A1C1E',
  accent: '#00a651',
  border: 'rgba(26, 28, 30, 0.1)',
}

const MILESTONES = [
  { 
    year: '2010', 
    title: 'Company Establishment', 
    category: 'Foundation', 
    copy: 'Chemvict was officially registered and established in the Pudong New Area of Shanghai.', 
    icon: Building2 
  },
  { 
    year: '2014', 
    title: 'First Commissioning', 
    category: 'Milestone', 
    copy: 'Successfully achieved the commissioning of Chemvict’s first distillation unit.', 
    icon: Zap 
  },
  { 
    year: '2015', 
    title: 'Internal Supply Scale-up', 
    category: 'Operations', 
    copy: 'Supplied more than 20 sets of distillation column internals to the industry.', 
    icon: BarChart3 
  },
  { 
    year: '2016', 
    title: 'Revenue & Project Milestone', 
    category: 'Growth', 
    copy: 'Sales revenue exceeded 20 million RMB; 52 distillation columns were successfully commissioned for 8 different customers.', 
    icon: Target 
  },
  { 
    year: '2017', 
    title: 'Integrated System Breakthrough', 
    category: 'Innovation', 
    copy: 'Sales exceeded 80 million RMB; provided design, critical equipment manufacturing, installation, and commissioning for the first integrated distillation-and-crystallization separation unit.', 
    icon: Zap 
  },
  { 
    year: '2018', 
    title: 'ISO 9001 Certification', 
    category: 'Compliance', 
    copy: 'Achieved ISO 9001:2015 Quality Management System certification, further standardizing corporate management.', 
    icon: ShieldCheck 
  },
  { 
    year: '2022', 
    title: 'EHS System Certification', 
    category: 'Compliance', 
    copy: 'The company achieved ISO 14001:2015 Environmental Management and ISO 45001:2018 Occupational Health and Safety Management certifications.', 
    icon: ShieldCheck 
  },
  { 
    year: '2023', 
    title: 'Qingdao Facility Expansion', 
    category: 'Infrastructure', 
    copy: 'Relocated to the new Qingdao facility; the factory area increased to 8,000 m², expanding production capacity for core equipment.', 
    icon: Building2 
  },
  { 
    year: '2024', 
    title: 'Pressure Vessel Licensing', 
    category: 'Legal', 
    copy: 'Obtained Class D licensing for design and manufacture of stationary pressure vessels.', 
    icon: ShieldCheck 
  }
]

export default function TimelinePage() {
  const [activeYear, setActiveYear] = useState(MILESTONES[0].year)
  const milestoneRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveYear(entry.target.getAttribute('data-year'))
          }
        })
      },
      { threshold: 0.6, rootMargin: '-10% 0px -20% 0px' }
    )

    Object.values(milestoneRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToYear = (year) => {
    milestoneRefs.current[year]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      <Header />

      <main className="flex-grow pt-32 lg:pt-40 relative">
        {/* YEAR RAIL NAVIGATION */}
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-20">
          {MILESTONES.map((m) => (
            <button
              key={m.year}
              onClick={() => scrollToYear(m.year)}
              className="group flex items-center justify-end gap-3"
            >
              <span 
                className={`text-[9px] font-black transition-all duration-300 ${
                  activeYear === m.year ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}
                style={{ color: COLORS.accent }}
              >
                {m.title.toUpperCase()}
              </span>
              <div 
                className={`w-px transition-all duration-500 ${activeYear === m.year ? 'h-8' : 'h-3'}`} 
                style={{ backgroundColor: activeYear === m.year ? COLORS.accent : 'rgba(0,0,0,0.15)' }}
              />
              <span className={`text-[11px] font-bold transition-colors ${activeYear === m.year ? 'text-black' : 'text-black/20'}`}>
                {m.year}
              </span>
            </button>
          ))}
        </nav>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-40">
          
          <nav className="flex items-center gap-2 mb-10 opacity-40 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="hover:text-[#00a651] transition-colors flex items-center gap-1"><Home size={12} /></Link>
            <ChevronRight size={10} />
            <Link href="/about" className="hover:text-[#00a651] transition-colors">About</Link>
            <ChevronRight size={10} />
            <span style={{ color: COLORS.accent }}>Timeline</span>
          </nav>

          <div className="mb-16 lg:mb-20 max-w-3xl">
            <span className="block text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-[#00a651]">
              History & Evolution
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic">
              Continuous <br/>Engineering Excellence.
            </h1>
            <p className="text-slate-600 leading-relaxed text-lg font-medium max-w-xl">
              From our foundation in Shanghai to becoming a provincial leader, 
              we have consistently expanded the boundaries of separation technology.
            </p>
          </div>

          <div className="relative border-l md:border-l-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:w-px md:before:h-full md:before:bg-black/5">
            
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <div 
                  key={milestone.year}
                  data-year={milestone.year}
                  ref={el => milestoneRefs.current[milestone.year] = el}
                  className={`relative mb-8 md:mb-12 flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-[#F5F5F2] border items-center justify-center z-10"
                    style={{ borderColor: activeYear === milestone.year ? COLORS.accent : COLORS.border }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      activeYear === milestone.year ? 'scale-125' : 'scale-100 opacity-20'
                    }`} 
                    style={{ backgroundColor: activeYear === milestone.year ? COLORS.accent : 'black' }} 
                    />
                  </div>

                  {/* Squeezed Content Card */}
                  <div className={`w-full md:w-[48%] pl-8 md:pl-0 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div 
                      className="group bg-white p-4 lg:p-6 border transition-all duration-300 hover:border-[#00a651]/30 shadow-sm hover:shadow-md"
                      style={{ borderColor: COLORS.border }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">
                          {milestone.category}
                        </span>
                        <span className="text-lg font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#00a651] transition-all">
                          {milestone.year}
                        </span>
                      </div>

                      <div className="mb-3 flex items-center gap-4"> 
                        <div className="p-2 bg-black/5 rounded group-hover:bg-[#00a651]/5 transition-colors flex-shrink-0">
                          <Icon size={18} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight leading-none">
                          {milestone.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 leading-snug text-sm font-medium">
                        {milestone.copy}
                      </p>
                    </div>
                  </div>

                  <div className="absolute -left-[5px] top-8 md:hidden w-2.5 h-2.5 rounded-full bg-[#00a651]" />
                </div>
              )
            })}
          </div>

        </div>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  )
}